"use client"

import { useRef } from "react";
import  {ImageMarqueeDemo}  from "@/components/AboutPage/Marquee/image-marquee";
import AnimatedProjectsInfo from "@/components/AboutPage/Projects/animated-projects-info";
import { board } from "@/data/ProductSpace24-25/board";
import { previewTeam } from "@/data/ProductSpace24-25/Fellows/TeamPreview";
import { syncTeam } from "@/data/ProductSpace24-25/Fellows/TeamSync";
import { curateTeam } from "@/data/ProductSpace24-25/Fellows/TeamCurate";
import { scrapsTeam } from "@/data/ProductSpace24-25/Fellows/TeamScraps";
import FlipProfile from "@/components/AboutPage/FlipProfile";
import StatsCard from "@/components/AboutPage/StatsCard";
import ProfileGrid from "@/components/AboutPage/ProfileGrid";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFAFF] text-[#3a3a3a] flex flex-col items-center justify-center">
      {/* hero section */}
      <section className="min-h-[400px] md:min-h-screen relative w-full overflow-hidden">
        <img src="/images/about-page.svg" alt="stacked logos background"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
        <div className="hidden md:block w-full px-[7.5rem] absolute bottom-[9rem] z-10">
          <ImageMarqueeDemo />
        </div>
      </section>

      {/* space page context to horiz padding 120px each side*/}
      <div className="w-full px-4 sm:px-[7.5rem]">
        {/* stats section */}
        <section className="flex flex-col items-start">
            <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal">
              Nationwide, Product Space is home to...
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-[60px] mt-[16px] space-y-[32px] sm:space-y-0 w-full">
              <StatsCard value="15+" label="Chapters" />
              <StatsCard value="500+" label="Students" />
              <StatsCard value="1000+" label="Alumni" />
            </div>
        </section>

        {/* leadership */}
        <section>
          <div className="text-left max-w-3xl space-y-4 mt-[144px]">
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold mb-8 whitespace-nowrap text-left w-full">
              Meet the Davis Squad!
            </h2>
            <p className="text-lg font-medium mb-8">
              Leadership
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {board.map((board, i) => (
              <FlipProfile key={i} {...board} />
            ))}
          </div>
        </section>

        
        {/* Fall '24 Fellows Section */}
        <section className="flex flex-col justify-between mb-[160px] mt-[80px]">
          <ProfileGrid
            title="Fall '24 Fellows"
            subtitle="Team Preview"
            data={previewTeam}
            ProfileComponent={FlipProfile}
          />
          <ProfileGrid
            title="Team Scraps"
            data={scrapsTeam}
            ProfileComponent={FlipProfile}
          />
          <ProfileGrid
            title="Team Sync"
            data={syncTeam}
            ProfileComponent={FlipProfile}
          />
          <ProfileGrid
            title="Team Curate"
            data={curateTeam}
            ProfileComponent={FlipProfile}
          />
        </section>
          
          {/* Projects Section */}
          <div id="projects" className="text-left max-w-3xl space-y-4 mt-[144px]">
          <p className="text-[#3A3A3A] font-inter text-[16px] font-semibold leading-normal">
          Curious about the Capstone? Check out...
          </p>
          <h2 className="mt-[12px] text-[36px] font-semibold font-inter leading-normal bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent">
          Our Fall’24 Projects
          </h2>
          <p className="mt-[16px] text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal">
          Prompt: Develop a product enhancement for one of Meta’s social media platforms.
          </p>
            <AnimatedProjectsInfo />
          </div>
      </div>
    </main>
  );
}
