interface MentorCardProps {
    imageSrc?: string
    name: string
    title: string
    company: string
    logo?: React.ReactNode // optional logo like a Microsoft or Meta icon
  }
  
  export default function MentorCard({
    imageSrc,
    name,
    title,
    company,
    logo,
  }: MentorCardProps) {
    return (
      <div className="flex flex-col items-start text-left">
        {/* headshot or placeholder */}
        <div className="w-[215px] h-[215px] rounded-xl overflow-hidden bg-gray-300 mb-3">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
  
        {/* name + title */}
        <p className="text-[20px] font-semibold">{name}</p>
        <p className="text-[16px] font-normal mt-1">
          {title} @ <span className="font-semibold">{company}</span> {logo}
        </p>
      </div>
    )
  }