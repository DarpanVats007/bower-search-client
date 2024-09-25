import { fireEvent, render, screen } from "@testing-library/react";

import { SideBar } from "../SideBar";

describe("SideBar", () => {
  const mockOnClose = jest.fn();
  const mockTextModel = {
    menuItems: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
  };

  test("calls onClose when close button is clicked", () => {
    render(
      <SideBar isOpen={true} onClose={mockOnClose} textModel={mockTextModel} />
    );

    const closeButton = screen.getByText("Close");

    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
