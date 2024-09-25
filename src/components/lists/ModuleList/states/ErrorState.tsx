import { moduleContainer } from "../ModuleList.css";

export type ErrorStateProps = {
  message: string;
};

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
  return <div className={moduleContainer}>{message}</div>;
};
