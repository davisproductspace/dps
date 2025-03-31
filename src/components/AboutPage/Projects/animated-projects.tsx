"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  quote: string;
  secondQuote?: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedProjects = ({
  projects,
  autoplay = false,
}: {
  projects: Project[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  const renderAnimatedText = (text: string) =>
    text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
        className="inline-block"
      >
        {word}&nbsp;
      </motion.span>
    ));

  return (
    <div className="px-4 py-20 font-sans antialiased md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[520px_auto] gap-y-20 gap-x-[75px] w-full max-w-[1200px] mx-auto items-start">
        {/* Image section */}
        <div className="flex justify-center pr-6">
  <div className="relative w-full max-w-[640px] h-[338px] rounded-[40px] overflow-hidden z-0 bg-white">
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
            className="absolute inset-0 rounded-[40px] overflow-hidden"
          >
            <Image
              src={project.src || "/placeholder.svg"}
              alt={project.name}
              fill
              draggable={false}
              className="object-cover object-center rounded-[40px] w-full h-full"
            />
          </motion.div>
        ) : null
      )}
    </AnimatePresence>
  </div>
</div>


        {/* Text content */}
        <div className="flex flex-col justify-between py-4 pl-6 md:pl-12">
          <motion.div
            className="self-end"
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-[36px] font-medium text-[#3A3A3A] font-inter leading-normal">
              {projects[active].name}
            </h3>
            <div className="w-[488px] min-h-[15px] max-w-full">
              <p className="text-[12px] font-medium text-[#3A3A3A] font-['Inter'] leading-[15px]">
                {projects[active].designation}
              </p>
            </div>
            <div className="mt-8 space-y-[40px] w-[488px] max-w-full">
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
              {/* SVG Left Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="none"
                viewBox="0 0 15 15"
              >
                <path
                  d="M6.707 2.29279C6.51947 2.10532 6.26516 2 6 2C5.73484 2 5.48053 2.10532 5.293 2.29279L0.793 6.79279C0.605526 6.98031 0.500244 7.23462 0.500244 7.49979C0.500244 7.76495 0.605526 8.01926 0.793 8.20679L5.293 12.7068C5.4816 12.8889 5.7342 12.9897 5.9964 12.9875C6.2586 12.9852 6.50941 12.88 6.69482 12.6946C6.88023 12.5092 6.9854 12.2584 6.98767 11.9962C6.98995 11.734 6.88916 11.4814 6.707 11.2928L4 8.49979H13.5C13.7652 8.49979 14.0196 8.39443 14.2071 8.20689C14.3946 8.01936 14.5 7.765 14.5 7.49979C14.5 7.23457 14.3946 6.98022 14.2071 6.79268C14.0196 6.60514 13.7652 6.49979 13.5 6.49979H4L6.707 3.70679C6.89447 3.51926 6.99979 3.26495 6.99979 2.99979C6.99979 2.73462 6.89447 2.48031 6.707 2.29279Z"
                  fill="url(#paint0_linear_left)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_left"
                    x1="14.5"
                    y1="12.9998"
                    x2="0.5"
                    y2="12.9998"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#765DF2" />
                    <stop offset="1" stopColor="#E06287" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="flex h-7 w-[152px] items-center justify-center rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
            >
              {/* SVG Right Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="none"
                viewBox="0 0 15 15"
              >
                <path
                  d="M8.293 2.29279C8.48053 2.10532 8.73484 2 9 2C9.26516 2 9.51947 2.10532 9.707 2.29279L14.207 6.79279C14.3945 6.98031 14.4998 7.23462 14.4998 7.49979C14.4998 7.76495 14.3945 8.01926 14.207 8.20679L9.707 12.7068C9.5184 12.8889 9.2658 12.9897 9.0036 12.9875C8.7414 12.9852 8.49059 12.88 8.30518 12.6946C8.11977 12.5092 8.0146 12.2584 8.01233 11.9962C8.01005 11.734 8.11084 11.4814 8.293 11.2928L11 8.49979H1.5C1.23478 8.49979 0.98043 8.39443 0.792893 8.20689C0.605357 8.01936 0.5 7.765 0.5 7.49979C0.5 7.23457 0.605357 6.98022 0.792893 6.79268C0.98043 6.60514 1.23478 6.49979 1.5 6.49979H11L8.293 3.70679C8.10553 3.51926 8.00021 3.26495 8.00021 2.99979C8.00021 2.73462 8.10553 2.48031 8.293 2.29279Z"
                  fill="url(#paint0_linear_right)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_right"
                    x1="0.5"
                    y1="12.9998"
                    x2="14.5"
                    y2="12.9998"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#765DF2" />
                    <stop offset="1" stopColor="#E06287" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
