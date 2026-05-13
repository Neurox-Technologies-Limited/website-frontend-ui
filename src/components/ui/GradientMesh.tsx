import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface GradientMeshProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const GradientMesh = ({ children, className, ...rest }: GradientMeshProps) => {
  return (
    <div className={cn("gradient-mesh-bg", className)} {...rest}>
      {children}
    </div>
  );
};

export default GradientMesh;
