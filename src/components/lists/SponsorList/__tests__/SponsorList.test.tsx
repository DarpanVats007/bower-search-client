import { SponsorList, SponsorListProps } from "../SponsorList";
import { render, screen } from "@testing-library/react";

describe("SponsorList Component", () => {
  const mockSponsors = [
    { name: "Sponsor 1", href: "https://sponsor1.com" },
    { name: "Sponsor 2", href: "https://sponsor2.com" },
    { name: "Sponsor 3", href: "https://sponsor3.com" },
  ];

  const defaultProps: SponsorListProps = {
    sponsors: mockSponsors,
  };

  test("renders sponsor links correctly", () => {
    render(<SponsorList {...defaultProps} />);

    mockSponsors.forEach((sponsor) => {
      const sponsorLink = screen.getByRole("link", { name: sponsor.name });
      expect(sponsorLink).toBeInTheDocument();
      expect(sponsorLink).toHaveAttribute("href", sponsor.href);
    });
  });
});
