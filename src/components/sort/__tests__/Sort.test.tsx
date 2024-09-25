import { fireEvent, render, screen } from "@testing-library/react";

import { Sort } from "../Sort";
import { sortText } from "@/data/layout-data";
import { sortTextModel } from "../../../types/layout-types";

const mockTextModel: sortTextModel = {
  label: "Sort By",
  options: sortText.options,
};

describe("Sort Component", () => {
  const mockOnSortChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders sort options", () => {
    render(<Sort onSortChange={mockOnSortChange} textModel={mockTextModel} />);

    expect(screen.getByLabelText(/sort by/i)).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: /no selection/i })
    ).toBeInTheDocument();

    mockTextModel.options.forEach((option) => {
      expect(
        screen.getByRole("option", { name: option.label })
      ).toBeInTheDocument();
    });
  });

  test("calls onSortChange with correct value when an option is selected", () => {
    render(<Sort onSortChange={mockOnSortChange} textModel={mockTextModel} />);

    const selectElement = screen.getByLabelText(/sort by/i);

    fireEvent.change(selectElement, { target: { value: "stars" } });

    expect(mockOnSortChange).toHaveBeenCalledWith("stars");
  });

  test("does not call onSortChange when selecting the same option twice", () => {
    render(<Sort onSortChange={mockOnSortChange} textModel={mockTextModel} />);

    const selectElement = screen.getByLabelText(/sort by/i);

    fireEvent.change(selectElement, { target: { value: "stars" } });
    expect(mockOnSortChange).toHaveBeenCalledWith("stars");

    fireEvent.change(selectElement, { target: { value: "stars" } });
    expect(mockOnSortChange).toHaveBeenCalledTimes(1);
  });

  test("does not call onSortChange when 'no selection' is selected", () => {
    render(<Sort onSortChange={mockOnSortChange} textModel={mockTextModel} />);

    const selectElement = screen.getByLabelText(/sort by/i);

    fireEvent.change(selectElement, { target: { value: "no selection" } });

    expect(mockOnSortChange).not.toHaveBeenCalled();
  });

  test("calls onSortChange again when a different option is selected after 'no selection'", () => {
    render(<Sort onSortChange={mockOnSortChange} textModel={mockTextModel} />);

    const selectElement = screen.getByLabelText(/sort by/i);

    fireEvent.change(selectElement, { target: { value: "no selection" } });
    expect(mockOnSortChange).not.toHaveBeenCalled();

    fireEvent.change(selectElement, { target: { value: "stars" } });
    expect(mockOnSortChange).toHaveBeenCalledWith("stars");
  });
});
