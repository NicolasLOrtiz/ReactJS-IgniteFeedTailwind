import React, { HtmlHTMLAttributes } from "react";

type ContentTextProps = HtmlHTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};

export const ContentText: React.FC<ContentTextProps> = ({
  children,
  ...rest
}) => (
  <p {...rest} className="mt-4">
    {children}
  </p>
);
