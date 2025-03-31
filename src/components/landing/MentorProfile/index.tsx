interface MentorCardProps {
  imageSrc?: string;
  name: string;
  title: string;
  company: string;
  logo?: React.ReactNode;
  backImageSrc?: string;
}

export default function MentorCard({
  imageSrc,
  backImageSrc,
  name,
  title,
  company,
  logo,
}: MentorCardProps) {
  return (
    <div className="flex flex-col items-start text-left w-[140px] sm:w-[215px]">
      {/* Flipping Card Container */}
      <div
        className="relative w-[140px] sm:w-[215px] h-[140px] sm:h-[215px] mb-2 group"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full h-full transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-xl" />
            )}
          </div>

          {/* Back Side */}
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
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-full bg-gray-400 rounded-xl" />
            )}
          </div>
        </div>
      </div>

      {/* Name + Title */}
      <p className="text-[14px] sm:text-[20px] font-semibold">{name}</p>
      <p className="text-[11px] sm:text-[14px] font-normal mt-1">
        {title} @ <span className="font-semibold">{company}</span> {logo}
      </p>
    </div>
  );
}
