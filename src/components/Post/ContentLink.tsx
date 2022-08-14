import React, { AnchorHTMLAttributes } from "react";

type ContentLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export const ContentLink: React.FC<ContentLinkProps> = ({
  children,
  ...rest
}) => (
  <a
    {...rest}
    className="font-bold text-brand-500 hover:text-brand-300 transition-colors duration-200 ease-in-out"
  >
    {children}
  </a>
);
