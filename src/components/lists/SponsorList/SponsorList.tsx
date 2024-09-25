import { sponsorLink, sponsorsContainer } from "./SponsorList.css";

import React from "react";
import { footerTextModel } from "../../../types/layout-types";

export type SponsorListProps = {
  sponsors: footerTextModel["sponsors"];
};

export const SponsorList: React.FC<SponsorListProps> = ({ sponsors }) => {
  return (
    <div className={sponsorsContainer}>
      {sponsors.map((sponsor, index) => (
        <span key={index}>
          <a
            href={sponsor.href}
            className={sponsorLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sponsor.name}
          </a>
          {index < sponsors.length - 1 && " | "}
        </span>
      ))}
    </div>
  );
};
