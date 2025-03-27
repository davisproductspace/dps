import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function TextReveal({
  heading,
  content,
}: {
  heading?: React.ReactNode;
  content: (string | React.ReactNode)[];
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center gap-6">
        {/* animated heading if provided */}
        {heading && (
          <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.05, 0.15], [0.3, 1]), // earlier animation window
          }}
          className="transition-transform duration-300"
          >
            {heading}
          </motion.div>
        )}

        {/* animated paragraph */}
        <p className="text-[2.25rem] font-semibold text-[#3a3a3a] font-sans pr-[13rem] flex flex-wrap leading-snug">
        {content.map((chunk, idx) => {
          if (typeof chunk === "string") {
            const words = chunk.split(" ");
            return words.map((word, i) => {
              // delay word-by-word animation to start after heading finishes
              const baseStart = 0.2; // delay start
              const offset = (idx + i) / 50;
              const start = baseStart + offset;
              const end = start + 1 / 50;

              const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);

              return (
                <motion.span
                  key={`${word}-${i}`}
                  style={{ opacity }}
                  className="mr-2"
                >
                  {word}
                </motion.span>
              );
            });
          } else {
            // JSX chunk (like gradient span) – reveal it later in the scroll as well
            return (
              <motion.span
                key={`jsx-${idx}`}
                style={{
                  opacity: useTransform(scrollYProgress, [0.92, 1], [0.3, 1]), // appears toward the end
                }}
              >
                {chunk}
              </motion.span>
            );
          }
        })}
        </p>
      </div>
    </div>
  );
}
