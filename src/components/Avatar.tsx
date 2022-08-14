import React, { ImgHTMLAttributes } from "react";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  size?: "sm" | "md" | "lg";
  borderless?: boolean;
};

export const Avatar: React.FC<AvatarProps> = ({
  size = "sm",
  borderless,
  ...rest
}) => {
  const sizes = {
    sm: "w-14 h-14",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const border = borderless
    ? "border-none"
    : "border-4 border-gray-800 ring-2 ring-brand-500";

  return (
    <img
      {...rest}
      className={`rounded-md ${border} ${sizes[size]}`}
      alt="Avatar do usuário"
    />
  );
};

Avatar.defaultProps = {
  size: "sm",
  borderless: false,
};
