import { Footer, FooterProps } from "../Footer";
import { render, screen } from "@testing-library/react";

jest.mock("@/components/lists/SponsorList/SponsorList", () => ({
  SponsorList: () => <div>Sponsor List Mock</div>,
}));

describe("Footer Component", () => {
  const mockTextModel = {
    improvementText: "Help us improve this tool",
    improvementLink: {
      name: "Improve Tool",
      href: "https://example.com/improve",
    },
    supportersText: "Supported by:",
    sponsors: [
      { name: "Sponsor 1", href: "https://sponsor1.com" },
      { name: "Sponsor 2", href: "https://sponsor2.com" },
    ],
  };

  const defaultProps: FooterProps = {
    textModel: mockTextModel,
  };

  test("renders improvement link correctly", () => {
    render(<Footer {...defaultProps} />);

    const improvementLink = screen.getByRole("link", {
      name: mockTextModel.improvementText,
    });
    expect(improvementLink).toBeInTheDocument();
    expect(improvementLink).toHaveAttribute(
      "href",
      mockTextModel.improvementLink.href
    );
  });

  test("renders supporters text correctly", () => {
    render(<Footer {...defaultProps} />);

    const supportersText = screen.getByText(mockTextModel.supportersText);
    expect(supportersText).toBeInTheDocument();
  });

  test("renders SponsorList component", () => {
    render(<Footer {...defaultProps} />);

    const sponsorListMock = screen.getByText("Sponsor List Mock");
    expect(sponsorListMock).toBeInTheDocument();
  });
});
