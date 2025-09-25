// components/ui/Button.tsx
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { div } from "motion/react-client";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

const Button: React.FC<ButtonProps> = ({
  iconPosition = "left",
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  icon,
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        " cursor-pointer",
        baseStyles,
        variantStyles[variant],
        className
      )}
    >
      {icon && iconPosition === "left" && (
        <div className={` ${children ? "pe-2" : ""}`}>{icon}</div>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <div className={` ${children ? "ps-2" : ""}`}>{icon}</div>
      )}
    </button>
  );
};

export default Button;
