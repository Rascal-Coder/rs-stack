import React from "react";

import { cn } from "@rs-stack/ui/lib/utils";

export type ScalesProps = {
  orientation?: "horizontal" | "vertical" | "diagonal";
  size?: number;
  className?: string;
  color?: string;
};

export const Scales = ({ orientation = "diagonal", size = 10, className, color }: ScalesProps) => {
  const getGradientAngle = () => {
    switch (orientation) {
      case "horizontal":
        return "0deg";
      case "vertical":
        return "90deg";
      case "diagonal":
      default:
        return "315deg";
    }
  };

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full overflow-hidden text-black/10 dark:text-white/10",
        className
      )}
      style={
        {
          "--scales-size": `${size}px`,
          "--scales-angle": getGradientAngle(),
          ...(color && { color })
        } as React.CSSProperties
      }
    >
      <div
        className="h-full w-full bg-[repeating-linear-gradient(var(--scales-angle),currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"
        style={{
          backgroundSize: `var(--scales-size) var(--scales-size)`
        }}
      />
    </div>
  );
};

export type ScalesContainerProps = {
  children?: React.ReactNode;
  containerClassName?: string;
} & ScalesProps;

export const ScalesContainer = ({
  children,
  orientation = "diagonal",
  size = 10,
  className,
  containerClassName,
  color
}: ScalesContainerProps) => (
  <div className={cn("relative", containerClassName)}>
    <Scales orientation={orientation} size={size} className={className} color={color} />
    <div className="relative z-10">{children}</div>
  </div>
);

export default Scales;
