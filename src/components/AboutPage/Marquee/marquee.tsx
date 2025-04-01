"use client"

import type * as React from "react"
import { cn } from "@/components/AboutPage/Marquee/utils"

interface MarqueeProps {
  className?: string
  children: React.ReactNode
  pauseOnHover?: boolean
  reverse?: boolean
  speed?: number
}

export function Marquee({ children, className, pauseOnHover = false, reverse = false, speed = 20 }: MarqueeProps) {
  // Define the keyframe animations as CSS strings
  const keyframes = `
    @keyframes marquee-ltr {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    
    @keyframes marquee-rtl {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(0); }
    }
  `

  // Create animation style based on direction and speed
  const getAnimationStyle = (isClone = false) => {
    const animationName = reverse ? "marquee-rtl" : "marquee-ltr"
    // For the first element, don't apply any initial transform
    const initialTransform = !isClone ? "translateX(0)" : reverse ? "translateX(-100%)" : "translateX(0)"

    return {
      animation: `${animationName} ${speed}s linear infinite`,
      animationPlayState: "running",
      transform: initialTransform,
    }
  }

  return (
    <>
      {/* Inject the keyframe animations */}
      <style jsx global>
        {keyframes}
      </style>

      <div className={cn("group flex overflow-hidden relative", className)}>
        <div
          className="flex min-w-full shrink-0 py-4"
          style={getAnimationStyle(false)}
          onMouseEnter={
            pauseOnHover
              ? (e) => {
                  e.currentTarget.style.animationPlayState = "paused"
                  if (e.currentTarget.nextElementSibling) {
                    ;(e.currentTarget.nextElementSibling as HTMLElement).style.animationPlayState = "paused"
                  }
                }
              : undefined
          }
          onMouseLeave={
            pauseOnHover
              ? (e) => {
                  e.currentTarget.style.animationPlayState = "running"
                  if (e.currentTarget.nextElementSibling) {
                    ;(e.currentTarget.nextElementSibling as HTMLElement).style.animationPlayState = "running"
                  }
                }
              : undefined
          }
        >
          {children}
        </div>
        <div
          className="flex min-w-full shrink-0 py-4"
          style={getAnimationStyle(true)}
          onMouseEnter={
            pauseOnHover
              ? (e) => {
                  e.currentTarget.style.animationPlayState = "paused"
                  if (e.currentTarget.previousElementSibling) {
                    ;(e.currentTarget.previousElementSibling as HTMLElement).style.animationPlayState = "paused"
                  }
                }
              : undefined
          }
          onMouseLeave={
            pauseOnHover
              ? (e) => {
                  e.currentTarget.style.animationPlayState = "running"
                  if (e.currentTarget.previousElementSibling) {
                    ;(e.currentTarget.previousElementSibling as HTMLElement).style.animationPlayState = "running"
                  }
                }
              : undefined
          }
        >
          {children}
        </div>
      </div>
    </>
  )
}
