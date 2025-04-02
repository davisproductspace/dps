"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import LeftArrow from "@/assets/icons/left-arrow.svg";
import RightArrow from "@/assets/icons/right-arrow.svg";

type Project = {
  quote: string;
  secondQuote?: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedProjects = ({ projects }: { projects: Project[] }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isActive = (index: number) => index === active;

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  const renderAnimatedText = (text: string) =>
    text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * i }}
        className="inline-block"
      >
        {word}&nbsp;
      </motion.span>
    ));

  return (
    // Updated grid: on extra-large screens, the left column is set to 1400px wide.
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[700px_auto] gap-y-20 gap-x-[120px] items-center w-full">
      {/* Left: Image Section */}
      <div className="flex justify-center">
        {/* Container now allows a max width of 1400px */}
        <div className="relative w-full max-w-[1400px] rounded-[40px] overflow-hidden z-0 bg-white">
          <AnimatePresence mode="wait">
            {projects.map((project, index) =>
              isActive(index) ? (
                <motion.div
                  key={project.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    z: 0,
                    rotate: 0,
                    zIndex: 40,
                    y: [0, -80, 0],
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative w-full h-auto rounded-[40px] overflow-hidden"
                >
                  {/* Updated image dimensions */}
                  <Image
                    src={project.src || "/placeholder.svg"}
                    alt={project.name}
                    width={1000}
                    height={750}
                    draggable={false}
                    className="w-full h-auto object-contain rounded-[40px]"
                  />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left w-full">
        <motion.div
          className="w-full md:w-auto"
          key={active}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <h3 className="text-[24px] sm:text-[28px] md:text-[36px] font-medium text-[#3A3A3A] font-inter leading-normal">
            {projects[active].name}
          </h3>
          <div className="w-full md:w-[488px] min-h-[15px] mx-auto md:mx-0">
            <p className="text-[12px] font-medium text-[#3A3A3A] font-['Inter'] leading-[15px]">
              {projects[active].designation}
            </p>
          </div>
          <div className="mt-8 space-y-8 w-full md:w-[488px] mx-auto md:mx-0">
            <motion.p className="text-[14px] font-medium text-[#3A3A3A] font-['Inter'] leading-[23px]">
              {renderAnimatedText(projects[active].quote)}
            </motion.p>
            {projects[active].secondQuote && (
              <motion.p className="text-[14px] font-medium text-[#3A3A3A] font-['Inter'] leading-[23px]">
                {renderAnimatedText(projects[active].secondQuote)}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-[23px]">
          <button
            onClick={handlePrev}
            className="flex h-7 w-[152px] items-center justify-center rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
          >
            <LeftArrow width={15} height={15} alt="Left Arrow" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-7 w-[152px] items-center justify-center rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
          >
            <RightArrow width={15} height={15} alt="Right Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
