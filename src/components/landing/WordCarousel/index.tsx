import { useEffect, useState } from "react";
import "./styles.css"; // for fade-slide animation

const rotatingMiddleWords = ["Learn", "Teach"];
const finalPhrase = ["Are", "Product Space"];

export default function WordCarousel() {
  const [index, setIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [carouselHeight, setCarouselHeight] = useState(3); // default: mobile = 3rem

  useEffect(() => {
    // Update carousel height based on screen width
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setCarouselHeight(4.5); // desktop: 4.5rem
      } else {
        setCarouselHeight(3); // mobile: 3rem
      }
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < rotatingMiddleWords.length - 1) {
        setIndex((prev) => prev + 1);
      } else if (!showFinal) {
        setShowFinal(true);
      } else {
        setShowFinal(false);
        setIndex(0);
      }
    }, 1750);

    return () => clearInterval(interval);
  }, [index, showFinal]);

  const middleWords = [...rotatingMiddleWords, finalPhrase[0]];
  const middleIndex = showFinal ? middleWords.length - 1 : index;

  return (
    <div className="text-[2.5rem] sm:text-[4rem] font-medium leading-none flex flex-col gap-1 h-[10.5rem] sm:h-[13.5rem]">
      {/* top line */}
      <span className="text-[#3a3a3a]">We</span>

      {/* middle word scroll */}
      <div
        className="overflow-hidden"
        style={{ height: `${carouselHeight}rem` }}
      >
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${middleIndex * carouselHeight}rem)`,
          }}
        >
          {middleWords.map((word, i) => (
            <div
              key={i}
              style={{ height: `${carouselHeight}rem` }}
              className={`${
                word === "Are"
                  ? "text-[#3a3a3a]"
                  : "bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent"
              } ${rotatingMiddleWords.includes(word) ? "w-auto" : "w-full"}`}
            >
              {word}
            </div>
          ))}
        </div>
      </div>

      {/* bottom row */}
      <div className="flex items-baseline gap-2">
        <span
          className={`transition-colors duration-500 leading-none ${
            showFinal
              ? "bg-gradient-to-r from-[#E06287] to-[#AB60BD] bg-clip-text text-transparent"
              : "text-[#3a3a3a]"
          }`}
        >
          Product
        </span>
        {showFinal && (
          <span className="animate-fade-slide-delayed bg-gradient-to-r from-[#AB60BD] to-[#765DF2] bg-clip-text text-transparent leading-none">
            Space.
          </span>
        )}
      </div>
    </div>
  );
}
