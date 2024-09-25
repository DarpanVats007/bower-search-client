import { fireEvent, render, screen } from "@testing-library/react";

import { ContentArea } from "../ContentArea";
import { ModuleListProps } from "@/components/lists/ModuleList/ModuleList";
import { SearchBarProps } from "@/components/ui/search-bar/SearchBar";
import { SortProps } from "@/components/sort/Sort";

jest.mock("@/components/lists/ModuleList/ModuleList", () => ({
  ModuleList: ({ query, sort, textModel }: ModuleListProps) => (
    <div data-testid="module-list">
      <p>Query: {query}</p>
      <p>Sort: {sort}</p>
      <p>{JSON.stringify(textModel)}</p>
    </div>
  ),
}));

jest.mock("@/components/ui/search-bar/SearchBar", () => ({
  SearchBar: ({ onSearch, textModel }: SearchBarProps) => (
    <input
      data-testid="search-input"
      onChange={(e) => onSearch(e.target.value)}
      placeholder={textModel.placeholderText}
    />
  ),
}));

jest.mock("@/components/sort/Sort", () => ({
  Sort: ({ onSortChange, textModel }: SortProps) => (
    <select
      data-testid="sort-select"
      onChange={() => onSortChange}
      aria-label={textModel.label}
    >
      <option value="stars-asc">{textModel.options[0].value}</option>
      <option value="stars-desc">{textModel.options[1].value}</option>
    </select>
  ),
}));

describe("ContentArea Component", () => {
  beforeEach(() => {
    render(<ContentArea />);
  });

  test("renders SearchBar and Sort components", () => {
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("sort-select")).toBeInTheDocument();
  });

  test("updates query state when search input changes", () => {
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "react" } });

    expect(screen.getByTestId("module-list")).toHaveTextContent("react");
  });

  test("updates sortOption state when sort option changes", () => {
    const sortSelect = screen.getByTestId("sort-select");
    fireEvent.change(sortSelect, { target: { value: "stars" } });

    expect(screen.getByTestId("module-list")).toHaveTextContent("stars");
  });
});
