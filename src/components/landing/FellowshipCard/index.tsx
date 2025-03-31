"use client"
import { motion, MotionProps } from "framer-motion"

interface CardSectionProps {
  title: string
  description?: string
  subtext1?: string
  subtext2?: string
  buttonText?: string
  buttonLink?: string
  middleContent?: React.ReactNode
}

export default function CardSection({
    title,
    description,
    subtext1,
    subtext2,
    buttonText,
    buttonLink = "#",
    middleContent,
    ...motionProps
  }: CardSectionProps) {
    return (
      <motion.div
        {...motionProps}
        className="scale-[0.75] sm:scale-100 bg-[#F7EDFF] text-[#3a3a3a] rounded-2xl pt-[28px] px-[36px] pb-[36px] h-[500px] w-[448px] flex-shrink-0"
      >
        {/* title */}
        <h3 className="text-[2rem] font-semibold font-sans leading-none bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent mb-[2rem]">
          {title}
        </h3>
  
        {/* middle content optional. logos, images, etc. */}
        {middleContent && <div className="mb-6 min-h-[5.5rem]">{middleContent}</div>}
  
        {/* description and subtext */}
        <p className="text-sm leading-relaxed mb-4">{description}</p>
        <p className="text-sm leading-relaxed mb-4">{subtext1}</p>
        <p className="text-sm leading-relaxed mb-4">{subtext2}</p>
  
        {/* button */}
        {buttonText && (
          <a href={buttonLink}>
            <button className="bg-white shadow-md text-sm cursor-pointer hover:opacity-90 hover:font-bold transition-all font-medium px-4 py-2 rounded-lg">
              <span className="bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent">
                {buttonText}
              </span>
            </button>
          </a>
        )}
      </motion.div>
    )
  }