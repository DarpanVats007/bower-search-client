import {
  closeButton,
  list,
  listItem,
  sidebar,
  sidebarOpen,
} from "./SideBar.css";

import { Button } from "../../../ui/button/Button";
import React from "react";
import { sideBarTextModel } from "../../../../types/layout-types";

export type SideBarProps = {
  textModel: sideBarTextModel;
  isOpen: boolean;
  onClose: () => void;
};

export const SideBar: React.FC<SideBarProps> = ({
  isOpen,
  onClose,
  textModel,
}) => {
  return (
    <div className={`${sidebar} ${isOpen ? sidebarOpen : ""}`}>
      <Button className={closeButton} onClick={onClose}>
        Close
      </Button>
      <ul className={list}>
        {textModel.menuItems.map((item, index) => (
          <li key={index} className={listItem}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
