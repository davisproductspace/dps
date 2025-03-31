"use client";

import Image from "next/image";
import { useRef } from "react";
import { TextReveal } from "@/components/landing/TextReveal";
import WordCarousel from "@/components/landing/WordCarousel";
import WhoWeAre from "@/components/landing/WhoWeAre";
import MeetTheFellowship from "@/components/landing/MeetTheFellowship";
import MentorProfile from "@/components/landing/MentorProfile";
import { mentors } from "@/data/mentors";
import ArrowButton from "@/components/landing/ArrowButton"

export default function Page() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fellowshipScrollRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-[#FDFAFF] text-[#3a3a3a] flex flex-col items-center justify-center">
      {/* hero section */}
      <section className="min-h-screen relative w-full overflow-hidden">
        {/* mobile background image */}
        <img
          src="/images/hero-mobile.svg"
          alt="stacked logos background mobile"
          className="block sm:hidden absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* desktop background image */}
        <img
          src="/images/hero-logos.svg"
          alt="stacked logos background desktop"
          className="hidden sm:block absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        <div className="w-full px-12 sm:px-10 md:px-16 lg:px-[7.5rem] absolute top-[195px] sm:top-auto sm:bottom-[9rem] z-10 space-y-6">
          <WordCarousel />

          {/* mobile version - who we are */}
          <div className="flex flex-col items-center gap-6 lg:hidden">
            <div className="w-full rounded-xl overflow-hidden">
              <Image
                src="/images/WhoWeAre/capstone-pres.png"
                alt="capstone presentation"
                width={600}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full text-left">
              <h3 className="text-[1.5rem] font-bold bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent">
                Who We Are
              </h3>
              <p className="text-base font-medium leading-snug">
                We’re a national community of students with a mission to become the world’s next generation of product leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* what is product – own full screen */}
      <section className="relative min-h-screen">
        <TextReveal
          heading={
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-semibold leading-tight bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent">
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

      {/* who we are – skip rendering on mobile */}
      <section className="w-full hidden lg:block w-full">
        <WhoWeAre />
      </section>

      {/* meet the fellowship section. handles text and scroll animations */}
      <MeetTheFellowship />

      {/* mentors section */}
      <section className="w-full px-6 sm:px-10 md:px-16 lg:px-[7.5rem] flex flex-col gap-8 mb-40">
        <div className="text-left max-w-3xl space-y-4">
          <p className="text-base font-medium">That’s right! Our Fellowship is...</p>
          <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent leading-tight">
            Entirely Industry-Led.
          </h2>
          <p className="text-base font-medium">
            Our workshop leaders and Capstone mentors are from the world’s top technology companies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {mentors.map((mentor, i) => (
            <MentorProfile key={i} {...mentor} />
          ))}
        </div>
      </section>
    </main>
  );
}
