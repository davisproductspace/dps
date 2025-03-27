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

interface FellowshipRevealProps {
  targetRef: React.RefObject<HTMLElement | null>;
  cards: {
    key: string;
    props: React.ComponentProps<typeof FellowshipCard>;
  }[];
}

export default function FellowshipReveal({ targetRef, cards }: FellowshipRevealProps) {
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

    // update index thresholds to show cards
    if (latest < 0.6) setActiveIndex(0);
    else if (latest < 0.8) setActiveIndex(1);
    else setActiveIndex(2);
  });

  if (cards.length === 0) return null;

  return (
    <div
      ref={localRef}
      className="relative flex items-center h-[31.25rem] w-[28rem] overflow-hidden"
    >
      {/* if scroll hasn't started, lock in the first card */}
      {!hasEntered && <FellowshipCard {...cards[0].props} />}

      {/* animate only once scroll starts */}
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
    </div>
  );
}
