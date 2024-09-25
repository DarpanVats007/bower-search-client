import { moduleText } from "../data/layout-data";

export type ModuleInfo = {
  name: string;
  repository_url: string;
  owner: string;
  stars: number;
  description: string;
  contributions_count: string;
};

export type ModuleTextModel = typeof moduleText;
