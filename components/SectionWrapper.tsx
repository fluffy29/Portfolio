import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, children, id, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-20 md:py-32 relative overflow-hidden", className)}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          {children}
        </div>
      </section>
    );
  }
);
SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };
