import {
  activeButton,
  inactiveButton,
  paginationButton,
  paginationContainer,
} from "./Pagination.css";

import { Button } from "../button/Button";
import React from "react";
import { paginationTextModel } from "@/types/layout-types";

export type PaginationProps = {
  textModel: paginationTextModel;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  textModel,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className={paginationContainer}>
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={paginationButton}
      >
        {textModel.previousLabel}
      </Button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        return (
          <Button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`${paginationButton} ${
              currentPage === page ? activeButton : inactiveButton
            }`}
          >
            {page}
          </Button>
        );
      })}
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={paginationButton}
      >
        {textModel.nextLabel}
      </Button>
    </div>
  );
};
