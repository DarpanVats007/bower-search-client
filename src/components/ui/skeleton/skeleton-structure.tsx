import "react-loading-skeleton/dist/skeleton.css";

import {
  moduleContainer,
  moduleHeader,
  moduleSection,
} from "../../lists/ModuleList/ModuleList.css";

import React from "react";
import Skeleton from "react-loading-skeleton";

export const ModuleSkeleton: React.FC = () => {
  return (
    <div className={moduleContainer}>
      <div className={moduleHeader}>
        <div className={moduleSection}>
          <Skeleton width={50} height={20} />
        </div>

        <div className={moduleSection}>
          <Skeleton width={50} height={20} />
        </div>

        <div className={moduleSection}>
          <Skeleton width={50} height={20} />
        </div>
      </div>

      <div className={moduleSection}>
        <Skeleton count={2} width={250} height={20} />
      </div>

      <div className={moduleSection}>
        <Skeleton count={4} height={20} />
      </div>
    </div>
  );
};
