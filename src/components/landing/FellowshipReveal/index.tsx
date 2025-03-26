"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

import FellowshipCard from "@/components/landing/FellowshipCard";
import ScrollBar from "@/components/landing/ScrollBar";

interface FellowshipRevealProps {
  targetRef: React.RefObject<HTMLElement>;
}

export default function FellowshipReveal({ targetRef }: FellowshipRevealProps) {
  const localRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  useMotionValueEvent(springProgress, "change", (latest) => {
    // first time user enters the section
    if (!hasEntered && latest > 0) {
      setHasEntered(true);
    }

    // Update index thresholds
    if (latest < 0.6) setActiveIndex(0);
    else if (latest < 0.8) setActiveIndex(1);
    else setActiveIndex(2);
  });

  const cards = [
    {
      key: "weekly",
      props: {
        title: "Weekly Workshops",
        description:
          "Our Fellowship consists of eight activity-based workshops led by industry product leaders.",
        subtext1:
          "Each workshop covers a stage of the product development life-cycle – idea, research, design, test, launch, and iteration. They take place every Tuesday, from 7-9 PM.",
        subtext2:
          "They take place every Tuesday, from 7-9PM.",
        middleContent: (
          <div className="grid grid-cols-4 gap-4">
            {[
              "Uber",
              "MSFT",
              "Meta",
              "Tesla",
              "GM",
              "Tesla",
              "MSFT",
              "Uber",
            ].map((name, i) => (
              <div
                key={i}
                className="bg-black rounded-lg h-12 w-12 flex items-center justify-center text-xs"
              >
                {name}
              </div>
            ))}
          </div>
        ),
      },
    },
    {
      key: "capstone",
      props: {
        title: "The Capstone",
        description:
          "To apply workshop knowledge, our Fellowship also includes a Capstone.",
        subtext:
          "Build a product in a team of four, with expert guidance from an industry mentor focused on your team’s success. No coding skills required.",
        buttonText: "View Our Past Projects",
        middleContent: (
          <div className="flex gap-4">
            <img
              src="/capstone1.png"
              alt="Capstone 1"
              className="w-1/2 rounded-lg"
            />
            <img
              src="/capstone2.png"
              alt="Capstone 2"
              className="w-1/2 rounded-lg"
            />
          </div>
        ),
      },
    },
    {
      key: "alumni",
      props: {
        title: "Alumni Support",
        description:
          "Fellowship doesn’t end after 8 weeks — our alumni community stays active through mentorship and events.",
        subtext:
          "You'll gain access to a network of product leaders across industries who continue to support one another beyond the program.",
        buttonText: "See Alumni Stories",
        middleContent: (
          <div className="flex gap-4 justify-start">
            <div className="bg-white/10 p-2 rounded-lg text-sm">Figma</div>
            <div className="bg-white/10 p-2 rounded-lg text-sm">Slack</div>
            <div className="bg-white/10 p-2 rounded-lg text-sm">LinkedIn</div>
          </div>
        ),
      },
    },
  ];

  return (
    <div
      ref={localRef}
      className="relative w-[31.25rem] h-[28rem] overflow-hidden"
    >
      {/* If scroll hasn't started, lock in the first card */}
      {!hasEntered && <FellowshipCard {...cards[0].props} />}

      {/* Animate only once scroll has started */}
      <AnimatePresence initial={false} mode="wait">
        {hasEntered && (
          <motion.div
            key={cards[activeIndex].key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full"
          >
            <FellowshipCard {...cards[activeIndex].props} />
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollBar targetRef={targetRef} />
    </div>
  );
}
