"use client"

import { useRef } from "react";
import { TextReveal } from "@/components/landing/TextReveal";
import WordCarousel from "@/components/landing/WordCarousel";
import WhoWeAre from "@/components/landing/WhoWeAre";
import ScrollBar from "@/components/landing/ScrollBar";
import FellowshipReveal from "@/components/landing/FellowshipReveal";
import { fellowshipCards } from "@/data/fellowship-cards";
import MentorProfile from "@/components/landing/MentorProfile";
import { mentors } from "@/data/mentors";

export default function Page() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fellowshipScrollRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-[#FDFAFF] text-[#3a3a3a] flex flex-col items-center justify-center">
      {/* hero section */}
      <section className="min-h-screen relative w-full overflow-hidden">
        <img src="/images/hero-logos.svg" alt="stacked logos background"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
        <div className="w-full px-[7.5rem] absolute bottom-[9rem] z-10">
          <WordCarousel />
        </div>
      </section>

      {/* space page context to horiz padding 120px each side*/}
      <div className="w-full px-[7.5rem]">
        {/* what is product */}
        <section className="min-h-screen">
          {/* call scrolling text animation with content */}
          <TextReveal
            heading={
              <h2 className="text-[2.75rem] font-semibold leading-none bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent">
                What Is Product?
              </h2>
            }
            content={[
              "A product manager is the CEO of a product. They communicate with customers to understand their needs, come up with solutions that address them, and collaborate with designers, engineers, and marketers to transform those ideas into",
              <span
                key="highlight"
                className="bg-gradient-to-l from-[#E06287] to-[#765DF2] bg-clip-text text-transparent font-semibold"
              >
                products that people love.
              </span>,
            ]}
          />
        </section>

        {/* who we are */}
        <WhoWeAre />

        {/* meet the fellowship */}
        <section ref={fellowshipScrollRef} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen flex items-center justify-between">
            {/* left text content - meet the fellowship, stays pinned */}
            <div className="max-w-xl space-y-[1rem]">
              <p className="text-base font-semibold tracking-normal font-sans">
                What We Offer
              </p>
              <h2 className="text-[3.5rem] font-semibold font-sans leading-tight">
                Meet the <br />
                <span className="bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent">
                  Fellowship.
                </span>
              </h2>
              <p className="w-[26.5rem] text-base font-sans leading-tight">
                An immersive eight-week program in which you learn product management by doing product management.
              </p>

              <button className="bg-[#FDFAFF] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] text-[0.75rem] bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent font-medium px-5 py-2 rounded-md mt-[1.5rem]">
                Join the Pack
              </button>
            </div>

            {/* right side - workshop and capstone component */}
            <div className="flex items-center">
              <FellowshipReveal targetRef={fellowshipScrollRef} cards={fellowshipCards} />
              <ScrollBar targetRef={sectionRef} />
            </div>
          </div>
        </section>

        {/* mentors section */}
        <section className="flex flex-col justify-between mb-[160px]">
          {/* text content */}
          <div className="text-left max-w-3xl space-y-4">
            <p className="text-[1rem] font-medium">That’s right! Our Fellowship is...</p>
            <h2 className="text-[2.25rem] font-semibold bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent leading-tight bg-gradient-to-r from-[#765DF2] to-[#ffffff] bg-clip-text text-transparent">
              Entirely Industry-Led.
            </h2>
            <p className="text-base font-medium mb-8">
              Our workshop leaders and Capstone mentors are from the world’s top technology companies.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 w-full">
            {mentors.map((mentor, i) => (
              <MentorProfile key={i} {...mentor} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}