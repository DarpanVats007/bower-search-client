import { ModuleInfo, ModuleTextModel } from "../../../types/module-types";
import {
  moduleContainer,
  moduleHeader,
  moduleLink,
  moduleSection,
  moduleText,
  moduleTitle,
} from "./ModuleList.css";

import { getOwnerFromUrl } from "../../../utils/url-utils";
import { highlightText } from "@/utils/highlight-utils";

export type ModuleItemProps = {
  module: ModuleInfo;
  query: string;
  textModel: ModuleTextModel;
};

export const ModuleItem: React.FC<ModuleItemProps> = ({
  module,
  query,
  textModel,
}) => {
  return (
    <div key={module.name} className={moduleContainer}>
      <div className={moduleHeader}>
        <div className={moduleSection}>
          <h4 className={moduleTitle}>{textModel.headerLabels.name}</h4>
          <a
            href={module.repository_url}
            className={moduleLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {highlightText(module.name, query)}
          </a>
        </div>

        <div className={moduleSection}>
          <h4 className={moduleTitle}>{textModel.headerLabels.owner}</h4>
          <p className={moduleText}>
            {highlightText(getOwnerFromUrl(module.repository_url), query)}
          </p>
        </div>

        <div className={moduleSection}>
          <h4 className={moduleTitle}>{textModel.headerLabels.stars}</h4>
          <p className={moduleText}>{module.stars}</p>
        </div>
      </div>

      <div className={moduleSection}>
        <h4 className={moduleTitle}>
          {textModel.headerLabels.contributions_count}
        </h4>
        <p className={moduleText}>{module.contributions_count}</p>
      </div>

      <div className={moduleSection}>
        <h4 className={moduleTitle}>{textModel.headerLabels.repository_url}</h4>
        <a
          href={module.repository_url}
          className={moduleText}
          target="_blank"
          rel="noopener noreferrer"
        >
          {highlightText(module.repository_url, query)}
        </a>
      </div>

      <div className={moduleSection}>
        <h4 className={moduleTitle}>{textModel.headerLabels.description}</h4>
        <p className={moduleText}>{highlightText(module.description, query)}</p>
      </div>
    </div>
  );
};
