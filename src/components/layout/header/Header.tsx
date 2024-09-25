import {
  column,
  hamburgerMenu,
  header,
  headerTitle,
  link,
  logoStyle,
  row,
} from "./Header.css";

import React from "react";
import { headerTextModel } from "../../../types/layout-types";
import logo from "../../../assets/bower-logo.svg";

export type HeaderProps = {
  textModel: headerTextModel;
  onToggleSidebar: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  textModel,
  onToggleSidebar,
}) => {
  return (
    <header className={header}>
      <div className={hamburgerMenu} onClick={onToggleSidebar}>
        &#9776;
      </div>

      <div className={row}>
        <img src={logo} alt="Logo" className={logoStyle} />
        <div className={column}>
          {textModel.link && (
            <>
              <div className={headerTitle}>{textModel.headerTitle}</div>
              <div>
                {textModel.headerSubTitle}{" "}
                <a className={link} href={textModel.link.href}>
                  {textModel.link.name}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
