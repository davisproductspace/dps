import CoffeeIcon from "@/assets/icons/Coffee.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";

interface AdvisorCardProps {
  imageSrc?: string;
  backImageSrc?: string; // New prop for the back image
  name: string;
  title: string;
}

export default function AdvisorCard({
  imageSrc,
  backImageSrc,
  name,
  title,
}: AdvisorCardProps) {
  return (
    <div className="flex flex-col items-start text-left w-[215px]">
      {/* Flipping Card Container */}
      <div
        className="relative w-[215px] h-[215px] mb-3 group"
        style={{ perspective: "1000px" }} // sets the 3D perspective
      >
        {/* Inner container that flips on hover */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]"
          style={{ transformStyle: "preserve-3d" }} // enables 3D child transforms
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
                className="w-full h-full object-cover rounded-3xl"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
              />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-3xl"></div>
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
                className="w-full h-full object-cover rounded-3xl"
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
              />
            ) : (
              <div className="w-full h-full bg-gray-400 rounded-3xl"></div>
            )}
          </div>
        </div>
      </div>

      {/* Name and Icons */}
      <div className="flex justify-between w-full items-center mb-1">
        <p className="text-[18px] font-medium text-[#3A3A3A] mr-auto">
          {name}
        </p>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <LinkedInIcon className="w-[24px] h-[24.4px] text-[#3A3A3A] relative pl-[4px]" />
        </a>
      </div>
      <div className="flex justify-between w-full items-center mb-1">
        <p className="text-[14px] font-normal mt-1 text-[#3A3A3A] leading-[30px]">
          {title}
        </p>
        <a href="#" target="_blank" aria-label="Coffee">
          <CoffeeIcon className="w-[24.3px] h-[24.8px] text-[#3A3A3A] relative pl-[4px]" />
        </a>
      </div>
    </div>
  );
}
