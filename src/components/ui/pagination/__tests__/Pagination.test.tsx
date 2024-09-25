import { Pagination, PaginationProps } from "../Pagination";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Pagination Component", () => {
  const mockOnPageChange = jest.fn();
  const mockTextModel = {
    previousLabel: "Previous",
    nextLabel: "Next",
  };

  const defaultProps: PaginationProps = {
    currentPage: 2,
    totalPages: 5,
    onPageChange: mockOnPageChange,
    textModel: mockTextModel,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correct number of page buttons", () => {
    render(<Pagination {...defaultProps} />);

    const pageButtons = screen.getAllByRole("button");

    expect(pageButtons).toHaveLength(7);
  });

  test('disables "Previous" button when on the first page', () => {
    render(<Pagination {...defaultProps} currentPage={1} />);

    const prevButton = screen.getByText("Previous");
    expect(prevButton).toBeDisabled();
  });

  test('disables "Next" button when on the last page', () => {
    render(<Pagination {...defaultProps} currentPage={5} totalPages={5} />);

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  test("calls onPageChange when a page button is clicked", () => {
    render(<Pagination {...defaultProps} />);

    const pageButton = screen.getByText("3");
    fireEvent.click(pageButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  test('calls onPageChange when "Previous" button is clicked', () => {
    render(<Pagination {...defaultProps} currentPage={3} />);

    const prevButton = screen.getByText("Previous");
    fireEvent.click(prevButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test('calls onPageChange when "Next" button is clicked', () => {
    render(<Pagination {...defaultProps} currentPage={3} />);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  test("highlights the current page as active", () => {
    render(<Pagination {...defaultProps} currentPage={3} />);

    const activePage = screen.getByText("3");
    expect(activePage).toHaveClass("activeButton");
  });

  test("does not call onPageChange when clicking the active page button", () => {
    render(<Pagination {...defaultProps} currentPage={3} />);

    const activePage = screen.getByText("3");
    fireEvent.click(activePage);

    expect(mockOnPageChange).not.toHaveBeenCalled();
  });
});
