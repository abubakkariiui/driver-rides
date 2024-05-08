import React from "react";

const sizes = {
  xs: "text-[8px] font-medium",
  lg: "text-[11px] font-normal",
  s: "text-[9px] font-medium",
  "2xl": "text-base font-medium",
  "3xl": "text-2xl font-normal md:text-[22px]",
  xl: "text-xs font-medium",
  md: "text-[10px] font-medium",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "md",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
