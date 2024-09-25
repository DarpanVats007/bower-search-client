import { footer, footerParagraph } from "./Footer.css";

import React from "react";
import { SponsorList } from "../../lists/SponsorList/SponsorList";
import { footerTextModel } from "../../../types/layout-types";

export type FooterProps = {
  textModel: footerTextModel;
};

export const Footer: React.FC<FooterProps> = ({ textModel }) => {
  return (
    <footer className={footer}>
      <p className={footerParagraph}>
        <a href={textModel.improvementLink.href}>{textModel.improvementText}</a>
      </p>
      <p>{textModel.supportersText}</p>
      <SponsorList sponsors={textModel.sponsors} />
    </footer>
  );
};
