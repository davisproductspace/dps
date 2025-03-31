"use client";

import { useRef } from "react";
import FellowshipReveal from "@/components/landing/FellowshipReveal";
import ScrollBar from "@/components/landing/ScrollBar";
import { fellowshipCards } from "@/data/fellowship-cards";

export default function MeetTheFellowship() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fellowshipScrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={fellowshipScrollRef}
      className="relative h-[300vh] w-full px-[48px] lg:px-[7.5rem]"
    >
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* left text content */}
        <div className="max-w-xl space-y-4 lg:text-left">
          <p className="text-base font-semibold font-sans">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-semibold font-sans leading-tight">
            Meet the <br />
            <span className="bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent">
              Fellowship.
            </span>
          </h2>
          <p className="text-base font-sans leading-tight mx-auto lg:mx-0 max-w-md">
            An immersive eight-week program in which you learn product management by doing product management.
          </p>

          <button className="hidden lg:inline-block bg-[#FDFAFF] shadow-md text-sm bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent font-medium px-5 py-2 rounded-md mt-4">
            Join the Pack
          </button>
        </div>

        {/* fellowship cards + scroll bar */}
        <div className="flex items-center gap-6">
          <FellowshipReveal targetRef={fellowshipScrollRef} cards={fellowshipCards} />
          <div className="hidden lg:block">
            <ScrollBar targetRef={sectionRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
