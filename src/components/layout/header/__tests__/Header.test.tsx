import { Header, HeaderProps } from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("../../../assets/bower-logo.svg", () => "mocked-logo");

describe("Header Component", () => {
  const mockToggleSidebar = jest.fn();

  const mockTextModel: HeaderProps["textModel"] = {
    headerTitle: "Test Header Title",
    headerSubTitle: "Test Subtitle",
    link: {
      name: "Test Link",
      href: "/test-link",
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders title, subtitle, and link", () => {
    render(
      <Header textModel={mockTextModel} onToggleSidebar={mockToggleSidebar} />
    );

    expect(screen.getByText(mockTextModel.headerTitle)).toBeInTheDocument();
    expect(screen.getByText(mockTextModel.headerSubTitle)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: mockTextModel.link?.name })
    ).toHaveAttribute("href", mockTextModel.link?.href);
  });

  test("renders logo in non-test mode", () => {
    render(
      <Header textModel={mockTextModel} onToggleSidebar={mockToggleSidebar} />
    );
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });

  test("calls onToggleSidebar when hamburger menu is clicked", () => {
    render(
      <Header textModel={mockTextModel} onToggleSidebar={mockToggleSidebar} />
    );
    fireEvent.click(screen.getByText("☰"));
    expect(mockToggleSidebar).toHaveBeenCalledTimes(1);
  });
});
