"use client"
import { Marquee } from "./marquee"
import { useEffect, useState } from "react"

interface ImageItem {
  id: number
  width: number
  height: number
  alt: string
  src: string
}

// First row with the provided image sizes
const firstRowImages: ImageItem[] = [
  {
    id: 1,
    width: 288,
    height: 160,
    alt: "Image 1",
    src: "images/Marquee/Row1/Picutre6.png",
  },
  {
    id: 2,
    width: 168,
    height: 160,
    alt: "Image 2",
    src: "images/Marquee/Row1/Picture4.png",
  },
  {
    id: 3,
    width: 228,
    height: 160,
    alt: "Image 3",
    src: "images/Marquee/Row1/Picture5.png",
  },
  {
    id: 4,
    width: 228,
    height: 160,
    alt: "Image 4",
    src: "images/Marquee/Row1/Picture2.png",
  },
  {
    id: 5,
    width: 228,
    height: 160,
    alt: "Image 5",
    src: "images/Marquee/Row1/Picture3.png",
  },
  {
    id: 6,
    width: 168,
    height: 160,
    alt: "Image 6",
    src: "images/Marquee/Row1/Picture1.png",
  },
]

// Second row with the provided image sizes
const secondRowImages: ImageItem[] = [
  {
    id: 7,
    width: 228,
    height: 160,
    alt: "Image 7",
    src: "images/Marquee/Row2/Picture1.png",
  },
  {
    id: 8,
    width: 228,
    height: 160,
    alt: "Image 8",
    src: "images/Marquee/Row2/Picture2.png",
  },
  {
    id: 9,
    width: 168,
    height: 160,
    alt: "Image 9",
    src: "images/Marquee/Row2/Picture6.png",
  },
  {
    id: 10,
    width: 288,
    height: 160,
    alt: "Image 10",
    src: "images/Marquee/Row2/Picture5.png",
  },
  {
    id: 11,
    width: 168,
    height: 160,
    alt: "Image 11",
    src: "images/Marquee/Row2/Picture3.png",
  },
  {
    id: 12,
    width: 228,
    height: 160,
    alt: "Image 12",
    src: "images/Marquee/Row2/Picture4.png",
  },
]

function MarqueeImage({ image }: { image: ImageItem }) {
  return (
    <div
      style={{ width: `${image.width}px`, height: `${image.height}px` }}
      className="relative overflow-hidden rounded-lg mx-3"
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function ImageMarqueeDemo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const reorderImages = (images: ImageItem[]) => {
    const middleIndex = Math.floor(images.length / 2);
    return [...images.slice(middleIndex), ...images.slice(0, middleIndex)];
  };

  return (
    <div className="relative flex w-full flex-col justify-center overflow-hidden gap-6 px-0">
      <Marquee pauseOnHover speed={15} className="py-2">
        {reorderImages(firstRowImages).map((image) => (
          <MarqueeImage key={image.id} image={image} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover speed={15} className="py-2">
        {reorderImages(secondRowImages).map((image) => (
          <MarqueeImage key={image.id} image={image} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 md:w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 md:w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}