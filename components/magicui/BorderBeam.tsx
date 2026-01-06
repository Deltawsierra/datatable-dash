"use client";
import { cn } from "../../lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}

export function BorderBeam({
  className,
  size = 50,
  duration = 6,
  delay = 0,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
      style={{
        ["--size" as string]: size,
        ["--duration" as string]: `${duration}s`,
        ["--delay" as string]: `${delay}s`,
        ["--color-from" as string]: colorFrom,
        ["--color-to" as string]: colorTo,
        ["--border-width" as string]: `${borderWidth}px`,
      }}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          maskComposite: "exclude",
          padding: `${borderWidth}px`,
          animation: `border-beam var(--duration) linear infinite var(--delay)`,
        }}
      />
    </div>
  );
}
