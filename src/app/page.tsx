"use client"

import Link from "next/link"
import Image from "next/image";

import { useRef, useEffect, useState } from "react";

//hero and product
import { TextReveal } from "@/components/landing/TextReveal";
import WordCarousel from "@/components/landing/WordCarousel";
// fellowship section
import ScrollBar from "@/components/landing/ScrollBar";
import FellowshipReveal from "@/components/landing/FellowshipReveal";
import { fellowshipCards } from "@/data/fellowship-cards";
//who we are
import SocialPic1 from '@/assets/images/social-pic1.jpg';
// mentors
import MentorProfile from "@/components/landing/MentorProfile";

export default function Page() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fellowshipScrollRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* hero section -- fix bg lol */}
      <section className="min-h-screen relative w-full overflow-hidden">
        <img
          src="/images/stacked-logos.svg"
          alt="stacked logos background"
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
          <TextReveal
            heading={
              <h2
                className="text-[2.75rem] font-semibold leading-none bg-gradient-to-r from-[#765DF2] to-[#ffffff] bg-clip-text text-transparent">
                What Is Product?
              </h2>
            }
            content={[
              "A product manager is the CEO of a product. They communicate with customers to understand their needs, come up with solutions that address them, and collaborate with designers, engineers, and marketers to transform those ideas into",
              <span
                key="highlight"
                className="bg-gradient-to-l from-[#765DF2] to-[#BFB2FF] bg-clip-text text-transparent font-semibold"
              >
                products that people love.
              </span>,
            ]}
          />
        </section>

        {/* who we are */}
        <section className="min-h-screen flex flex-col justify-center bg-black text-white">
          <div className="flex flex-col gap-y-[2rem]">
            {/* pics top row */}
            <div className="flex justify-between gap-[3.75rem]">
              <div className="w-[224px] h-[216px] rounded-xl overflow-hidden">
                <Image
                  src={SocialPic1}
                  alt="social group picture"
                  width={224}
                  height={216}
                  className="object-cover object-bottom"
                />
              </div>
                <div className="bg-white w-[24rem] h-[13.5rem] rounded-xl" />
                <div className="bg-white w-[24rem] h-[13.5rem] rounded-xl" />
            </div>

            {/* text with pics bottom row */}
            <div className="flex justify-between gap-[3.75rem]">
              {/* who we are text block */}
              <div className="w-[14rem] h-[13.5rem] flex flex-col justify-center gap-[1rem]">
                <h3 className="text-[2rem] font-bold text-left leading-snug bg-gradient-to-r from-[#765DF2] to-[#BFB2FF] bg-clip-text text-transparent">
                  Who We Are
                </h3>
                <p className="text-white text-base font-normal font-sans max-w-[30rem]">
                  We’re a national community of students with a mission to become the world’s next generation of product leaders.
                </p>
              </div>

              <div className="bg-white w-[30rem] h-[13.5rem] rounded-xl" />
              <div className="bg-white w-[13.5rem] h-[13.5rem] rounded-xl" />
            </div>
          </div>
        </section>

        {/* meet the fellowship */}
        <section 
        ref={fellowshipScrollRef}
        className="relative h-[300vh]">
          <div className="sticky top-0 h-screen flex items-center justify-between">
            {/* left text content - meet the fellowship, stays pinned */}
            <div className="max-w-xl space-y-[1rem]">
              <p className="text-base font-semibold text-white tracking-normal font-sans">
                What We Offer
              </p>
              <h2 className="text-[3.5rem] font-semibold font-sans leading-tight">
                Meet the <br />
                <span className="bg-gradient-to-r from-[#765DF2] to-[#BFB2FF] bg-clip-text text-transparent">
                  Fellowship.
                </span>
              </h2>
              <p className="w-[26.5rem] text-base font-sans leading-tight">
                An immersive eight-week program in which you learn product management by doing product management.
              </p>

              <button className="bg-white text-black font-medium px-5 py-2 rounded-md mt-[1.5rem]">
                Join the Pack
              </button>
            </div>

            {/* right side - workshop and capstone component */}
            <div className="flex items-center gap-x-6">
              <FellowshipReveal targetRef={fellowshipScrollRef} cards={fellowshipCards} />
              <ScrollBar targetRef={sectionRef} />
            </div>
          </div>
        </section>

        {/* mentors section */}
        <section className="flex flex-col justify-between">
          {/* text content */}
          <div className="text-left max-w-3xl space-y-4">
            <p className="text-[1rem] font-medium text-white">That’s right! Our Fellowship is...</p>
            <h2 className="text-[2.25rem] font-semibold text-indigo-400 leading-tight bg-gradient-to-r from-[#765DF2] to-[#ffffff] bg-clip-text text-transparent">
              Entirely Industry-Led.
            </h2>
            <p className="text-base font-medium text-white">
              Our workshop leaders and Capstone mentors are from the world’s top technology companies.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-x-[60px] gap-y-[50px]">
            <MentorProfile
              imageSrc="/mentors/caitlyn.jpeg" name="Caitlyn Liu" title="PM II" company="Uber"
            />
            <MentorProfile
              name="Nagi SriRanga" title="Director of PM" company="Ruckus"
            />
            <MentorProfile
              imageSrc="/mentors/asha.jpeg" name="Asha Anand" title="Technical PM" company="Microsoft"
            />
            <MentorProfile
              name="Lovlesh Chhabra" title="Director of PM" company="Meta"
            />
            <MentorProfile
              imageSrc="/mentors/caitlyn.jpeg" name="Caitlyn Liu" title="PM II" company="Uber"
            />
            <MentorProfile
              name="Nagi SriRanga" title="Director of PM" company="Ruckus"
            />
            <MentorProfile
              imageSrc="/mentors/asha.jpeg" name="Asha Anand" title="Technical PM" company="Microsoft"
            />
            <MentorProfile
              name="Lovlesh Chhabra" title="Director of PM" company="Meta"
            />
          </div>
        </section>
      </div>
    </main>
  );
}