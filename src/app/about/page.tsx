"use client"

import { useRef } from "react";
import { TextReveal } from "@/components/landing/TextReveal";
import WordCarousel from "@/components/landing/WordCarousel";
import  {ImageMarqueeDemo}  from "@/components/AboutPage/Marquee/image-marquee";
import AnimatedProjectsInfo from "@/components/AboutPage/Projects/animated-projects-info";
import WhoWeAre from "@/components/landing/WhoWeAre";
import ScrollBar from "@/components/landing/ScrollBar";
import FellowshipReveal from "@/components/landing/FellowshipReveal";
import { fellowshipCards } from "@/data/fellowship-cards";
import { board } from "@/data/ProductSpace24-25/board";
import { directors } from "@/data/ProductSpace24-25/directors";
import { advisors } from "@/data/ProductSpace24-25/advisors";
import { previewTeam } from "@/data/ProductSpace24-25/Fellows/TeamPreview";
import { syncTeam } from "@/data/ProductSpace24-25/Fellows/TeamSync";
import { curateTeam } from "@/data/ProductSpace24-25/Fellows/TeamCurate";
import { scrapsTeam } from "@/data/ProductSpace24-25/Fellows/TeamScraps";
import BoardProfile from "@/components/AboutPage/Profiles/board";
import DirectorProfile from "@/components/AboutPage/Profiles/directors";
import AdvisorProfile from "@/components/AboutPage/Profiles/advisors";
import CurateProfile from "@/components/AboutPage/Profiles/curateTeam";
import PreviewProfile from "@/components/AboutPage/Profiles/previewTeam";
import ScrapsProfile from "@/components/AboutPage/Profiles/scrapsTeam";
import SyncProfile from "@/components/AboutPage/Profiles/syncTeam";

export default function Page() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fellowshipScrollRef = useRef<HTMLDivElement>(null);

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


        {/* Fellows/Board section */}
        <section className="flex flex-col justify-between mb-[60px] md:mb-[160px]">
          <div className="flex flex-col items-start">
            <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal">
              Nationwide, Product Space is home to...
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-[60px] mt-[16px] space-y-[32px] sm:space-y-0 w-full">
              <div className="flex flex-col items-start">
                <h1 className="bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent text-[64px] font-semibold leading-normal">
                  15+
                </h1>
                <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal mt-[8px]">
                  Chapters
                </p>
              </div>

              <div className="flex flex-col items-start">
                <h1 className="bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent font-inter text-[64px] font-semibold leading-normal">
                  500+
                </h1>
                <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal mt-[8px]">
                  Students
                </p>
              </div>

              <div className="flex flex-col items-start">
                <h1 className="bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent font-inter text-[64px] font-semibold leading-normal">
                  1000+
                </h1>
                <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal mt-[8px]">
                  Alumni
                </p>
              </div>
            </div>
          </div>


          {/* text content */}
          <div className="text-left max-w-3xl space-y-4 mt-[144px]">
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold mb-8 whitespace-nowrap text-left w-full">
            Meet the Davis Squad!
          </h2>
            <p className="text-lg font-medium mb-8">
              Leadership
            </p>
          </div>
             {/* Board section */}
             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {board.map((board, i) => (
              <BoardProfile key={i} {...board} />
            ))}
          </div>
            {/* Directors section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-10">
                {directors.map((directors, i) => (
                <DirectorProfile key={i} {...directors} />
                ))}
            </div>
                {/* Advisors section */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-10 items-start">
                {advisors.map((advisors, i) => (
                <AdvisorProfile key={i} {...advisors} />
                ))}
            </div>
          </section>

          <section className="flex flex-col justify-between mb-[160px] mt-[80px]">

          <div className="text-left max-w-3xl space-y-4">
            <h2 className="text-[#3A3A3A] font-inter text-[20px] font-medium leading-normal">
              Fall '24 Fellows
            </h2>
            <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal mb-8">
              Team Preview
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-10">
            {previewTeam.map((previewTeam, i) => (
              <PreviewProfile key={i} {...previewTeam} />
            ))}
          </div>

          <div className="text-left max-w-3xl space-y-[32px] mt-10">
            <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal mb-8">
              Team Scraps
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-10">
          {scrapsTeam.map((scrapsTeam, i) => (
            <ScrapsProfile key={i} {...scrapsTeam} />
          ))}
        </div>

          <div className="text-left max-w-3xl space-y-[32px] mt-10">
            <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal mb-8">
              Team Sync
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-10">
            {syncTeam.map((syncTeam, i) => (
              <SyncProfile key={i} {...syncTeam} />
            ))}
          </div>

          <div className="text-left max-w-3xl space-y-[32px] mt-10">
            <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal mb-8">
              Team Curate
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-10">
            {curateTeam.map((curateTeam, i) => (
              <CurateProfile key={i} {...curateTeam} />
            ))}
          </div>
          {/* Projects Section */}
          <div className="text-left max-w-3xl space-y-4 mt-[144px]">
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
        </section>
      </div>
    </main>
  );
}
