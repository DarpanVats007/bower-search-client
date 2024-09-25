import React from "react";
import { buttonBase } from "./Button.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return <button className={`${buttonBase} ${className}`} {...props} />;
};
