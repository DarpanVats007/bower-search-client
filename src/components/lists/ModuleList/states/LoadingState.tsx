import { ModuleSkeleton } from "@/components/ui/skeleton/skeleton-structure";
import { ModuleTextModel } from "@/types/module-types";
import { moduleContainer } from "../ModuleList.css";

export type LoadingStateProps = {
  query: string;
  textModel: ModuleTextModel;
};

export const LoadingState: React.FC<LoadingStateProps> = ({
  query,
  textModel,
}) => {
  return (
    <div>
      <div className={moduleContainer}>
        {query.length > 0
          ? textModel.loadingSearch
          : textModel.loadingPopularRepo}
      </div>
      {Array.from({ length: 5 }, (_, index) => (
        <ModuleSkeleton key={index} />
      ))}
    </div>
  );
};
