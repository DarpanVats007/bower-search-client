import {
  Pagination,
  PaginationProps,
} from "@/components/ui/pagination/Pagination";
import {
  SearchBar,
  SearchBarProps,
} from "@/components/ui/search-bar/SearchBar";
import { Sort, SortOption, SortProps } from "../../sort/Sort";
import {
  moduleText,
  paginationText,
  searchBarText,
  sortText,
} from "../../../data/layout-data";

import { ModuleList } from "../../lists/ModuleList/ModuleList";
import { contentArea } from "./ContentArea.css";
import { useState } from "react";

export const ContentArea: React.FC = () => {
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("no selection");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleSearch: SearchBarProps["onSearch"] = (newQuery) => {
    setQuery(newQuery);
    setCurrentPage(1);
  };

  const handleSortChange: SortProps["onSortChange"] = (sortOption) => {
    setSortOption(sortOption);
    setCurrentPage(1);
  };

  const handlePageChange: PaginationProps["onPageChange"] = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={contentArea}>
      <SearchBar onSearch={handleSearch} textModel={searchBarText} />
      <Sort onSortChange={handleSortChange} textModel={sortText} />
      <ModuleList
        query={query}
        sort={sortOption}
        textModel={moduleText}
        currentPage={currentPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        textModel={paginationText}
      />
    </div>
  );
};
