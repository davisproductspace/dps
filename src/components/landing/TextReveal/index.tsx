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
    <div ref={containerRef} className="relative h-[300vh] sm:h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full space-y-6 px-12 md:px-[7.5rem]">
          {/* animated heading if provided */}
          {heading && (
            <motion.div
              style={{
                opacity: useTransform(scrollYProgress, [0.05, 0.15], [0.3, 1]),
              }}
              className="text-[1.5rem] md:text-[2.25rem] font-semibold leading-tight bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent transition-transform duration-300"
            >
              {heading}
            </motion.div>
          )}

          {/* animated paragraph */}
          <p className="text-[1.5rem] md:text-[2.25rem] font-semibold text-[#3a3a3a] font-sans leading-snug flex flex-wrap">
            {content.map((chunk, idx) => {
              if (typeof chunk === "string") {
                const words = chunk.split(" ");
                return words.map((word, i) => {
                  const baseStart = 0.2;
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
                return (
                  <motion.span
                    key={`jsx-${idx}`}
                    style={{
                      opacity: useTransform(scrollYProgress, [0.92, 1], [0.3, 1]),
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
    </div>
  );
}
