import { render, screen } from "@testing-library/react";

import { ModuleList } from "../ModuleList";
import { moduleText } from "../../../../data/layout-data";
import { useQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

describe("ModuleList", () => {
  test("renders error state when there is a problem fetching modules", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: new Error("Failed to fetch"),
      isLoading: false,
    });

    render(
      <ModuleList
        textModel={moduleText}
        query="react"
        sort={"no selection"}
        currentPage={1}
      />
    );
    expect(
      screen.getByText(/An error occurred, please try again later/i)
    ).toBeInTheDocument();
  });

  test("renders fetched modules when data is available", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [{ name: "react", stars: 150 }],
      error: undefined,
      isLoading: false,
    });

    render(
      <ModuleList
        textModel={moduleText}
        query="react"
        sort={"no selection"}
        currentPage={1}
      />
    );
    expect(screen.getByText("react")).toBeInTheDocument();
    expect(screen.getByText("150")).toBeInTheDocument();
  });
});
