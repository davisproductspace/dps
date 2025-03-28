"use client";

import React, { ReactElement } from "react";

interface LogosMarqueeProps {
  logos: ReactElement[];
  reverse?: boolean;
  speed?: number; // seconds
}

export default function LogosMarquee({ logos, reverse = false, speed = 20 }: LogosMarqueeProps) {
  const repeated = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-2">
      <div
        className={`flex gap-6 whitespace-nowrap will-change-transform ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {repeated.map((logo, i) => (
          <div key={`logo-${i}`} className="shrink-0">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
