import CoffeeIcon from "@/assets/icons/Coffee.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";

interface ScrapsCardProps {
  imageSrc?: string;
  backImageSrc?: string;
  name: string;
  title: string;
  linkedinLink?: string;
  coffeechatLink?: string;
}

export default function ScrapsCard({
  imageSrc,
  backImageSrc,
  name,
  title,
  linkedinLink,
  coffeechatLink,
}: ScrapsCardProps) {
  return (
    <div className="flex flex-col items-start text-left w-[160px] sm:w-[215px]">
      {/* Flipping Card Container */}
      <div
        className="relative w-[160px] sm:w-[215px] h-[160px] sm:h-[215px] mb-3 group"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full h-full transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front side */}
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden" }}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover rounded-xl sm:rounded-3xl"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
              />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-xl sm:rounded-3xl"></div>
            )}
          </div>
          {/* Back side */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {backImageSrc ? (
              <img
                src={backImageSrc}
                alt={`${name} back`}
                className="w-full h-full object-cover rounded-xl sm:rounded-3xl"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
              />
            ) : (
              <div className="w-full h-full bg-gray-400 rounded-xl sm:rounded-3xl"></div>
            )}
          </div>
        </div>
      </div>

      {/* Name and Icons */}
      <div className="flex justify-between w-full items-center mb-1">
        <p className="text-[16px] sm:text-[18px] font-medium text-[#3A3A3A] mr-auto">
          {name}
        </p>
        <a
          href={linkedinLink || "https://linkedin.com"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24.4px] text-[#3A3A3A] relative pl-[4px]" />
        </a>
      </div>
      <div className="flex justify-between w-full items-center mb-1">
        <p className="text-[12px] sm:text-[14px] font-normal mt-1 text-[#3A3A3A] leading-[24px] sm:leading-[30px]">
          {title}
        </p>
        <a
          href={coffeechatLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Coffee"
        >
          <CoffeeIcon className="w-[20px] sm:w-[24.3px] h-[20px] sm:h-[24.8px] text-[#3A3A3A] relative pl-[4px]" />
        </a>
      </div>
    </div>
  );
}
