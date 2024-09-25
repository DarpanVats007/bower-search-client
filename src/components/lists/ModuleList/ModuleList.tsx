import { ModuleInfo, ModuleTextModel } from "../../../types/module-types";

import { ErrorState } from "./states/ErrorState";
import { LoadingState } from "./states/LoadingState";
import { ModuleItem } from "./ModuleItem";
import { SortOption } from "@/components/sort/Sort";
import { fetchModules } from "../../../api/module-api";
import { useQuery } from "@tanstack/react-query";

export type ModuleListProps = {
  textModel: ModuleTextModel;
  query: string;
  sort: SortOption;
  currentPage: number;
};

export const ModuleList: React.FC<ModuleListProps> = ({
  query,
  sort,
  textModel,
  currentPage,
}) => {
  const { data, error, isLoading } = useQuery<ModuleInfo[], Error>({
    queryKey: ["modules", query, currentPage, sort],
    queryFn: () =>
      fetchModules(query.length > 0 ? query : "", currentPage, sort),
    enabled: true,
  });

  if (isLoading) {
    return <LoadingState query={query} textModel={textModel} />;
  }

  if (error) {
    return <ErrorState message={textModel.errorText} />;
  }

  if (data?.length === 0) {
    return <ErrorState message={textModel.noResponse} />;
  }

  return (
    <div>
      {data?.map((module) => (
        <ModuleItem
          key={module.name}
          module={module}
          query={query}
          textModel={textModel}
        />
      ))}
    </div>
  );
};
