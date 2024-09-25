import React, { useState } from "react";
import { searchBarInput, searchBarWrapper } from "./SearchBar.css";

import { searchBarTextModel } from "@/types/layout-types";

export type SearchBarProps = {
  onSearch: (query: string) => void;
  textModel: searchBarTextModel;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  textModel,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={searchBarWrapper}>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e)}
        placeholder={textModel.placeholderText}
        className={searchBarInput}
      />
    </div>
  );
};
