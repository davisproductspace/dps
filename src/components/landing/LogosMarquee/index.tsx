import { ReactNode } from "react";

interface LogosMarqueeProps {
  logos: ReactNode[];
}

export default function LogosMarquee({ logos }: LogosMarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* Scrolling track */}
      <div className="flex animate-marquee gap-6 whitespace-nowrap [--duration:30s] hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((Logo, index) => (
          <div
            key={index}
            className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-neutral-900"
          >
            <div className="w-8 h-8">
              {Logo}
            </div>
          </div>
        ))}
      </div>

      {/* Optional edge fading */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" />
    </div>
  );
}
