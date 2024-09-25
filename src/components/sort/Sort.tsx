import React, { useState } from "react";

import { sortTextModel } from "../../types/layout-types";
import { sortWrapper } from "./Sort.css";

export type SortOption = "no selection" | "stars" | "contributions_count";

export type SortProps = {
  onSortChange: (sortOption: SortOption) => void;
  textModel: sortTextModel;
};

export const Sort: React.FC<SortProps> = ({ onSortChange, textModel }) => {
  const [currentSort, setCurrentSort] = useState<SortOption>("no selection");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value as SortOption;
    if (newSort !== currentSort) {
      setCurrentSort(newSort);
      onSortChange(newSort);
    }
  };

  return (
    <div className={sortWrapper}>
      <label htmlFor="sort">{textModel.label}</label>
      <select id="sort" onChange={handleSortChange} value={currentSort}>
        <option value="no selection">No selection</option>
        {textModel.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
