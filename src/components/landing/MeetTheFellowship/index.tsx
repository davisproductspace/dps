"use client";

import { useRef, useState } from "react";
import FellowshipReveal from "@/components/landing/FellowshipReveal";
import ScrollBar from "@/components/landing/ScrollBar";
import FellowshipCard from "@/components/landing/FellowshipCard";
import { fellowshipCards } from "@/data/fellowship-cards";
import ArrowButton from "@/components/landing/ArrowButton";
import ArrowLeftIcon from "@/assets/icons/left-arrow.svg";
import ArrowRightIcon from "@/assets/icons/right-arrow.svg";

export default function MeetTheFellowship() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fellowshipScrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0); // for mobile

  return (
    <section
      ref={fellowshipScrollRef}
      className="relative h-auto lg:h-[300vh] w-full px-[48px] lg:px-[7.5rem] py-12 lg:py-0"
    >
      <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col lg:flex-row items-center justify-between gap-8">
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

          {/* desktop-only button */}
          <button className="hidden lg:inline-block bg-[#FDFAFF] shadow-md text-sm bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent font-medium px-5 py-2 rounded-md mt-4">
            Join the Pack
          </button>
        </div>

        {/* fellowship cards */}
        <div className="flex flex-col items-center gap-0.5 mt-2">

          {/* desktop version */}
          <div className="hidden lg:flex items-center gap-2">
            <FellowshipReveal targetRef={fellowshipScrollRef} cards={fellowshipCards} />
            <div className="hidden lg:block">
              <ScrollBar targetRef={sectionRef} />
            </div>
          </div>

          {/* mobile version */}
          <div className="lg:hidden flex flex-col items-center w-full">
            <FellowshipCard {...fellowshipCards[index].props} />

            <div className="flex flex-col items-center gap-2 mt-4">
              <div className="flex justify-center items-center gap-4">
                <ArrowButton
                  onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={index === 0}
                >
                  <ArrowLeftIcon className="w-[10px] h-[10px] fill-[#765DF2]" />
                </ArrowButton>

                <ArrowButton
                  onClick={() =>
                    setIndex((prev) => Math.min(prev + 1, fellowshipCards.length - 1))
                  }
                  disabled={index === fellowshipCards.length - 1}
                >
                  <ArrowRightIcon className="w-[10px] h-[10px] fill-[#765DF2]" />
                </ArrowButton>
              </div>

              <p className="text-sm font-medium text-center tracking-wider">
                <span className="text-[#E06287]">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[#765DF2]">
                    {" / "}{String(fellowshipCards.length).padStart(2, "0")}
                </span>
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
