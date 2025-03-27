interface WorkshopCardProps {
    week: number;
    title: string;
  }
  
  export default function WorkshopCard({ week, title }: WorkshopCardProps) {
    return (
      <div className="w-[174px] h-[80px] shrink-0 shadow-[0px_2px_4px_rgba(0,0,0,0.25)] rounded-[10px] bg-[#fdfaff] p-4">
        <p className="text-[10px] font-semibold mb-[4px]">{`Week ${week}`}</p>
        <p className="text-[12px] leading-snug">{title}</p>
      </div>
    );
  }