import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
};

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track flex w-max motion-reduce:animate-none">
        <div className="flex shrink-0 items-center">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
