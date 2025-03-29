import Image from "next/image";
import SocialPic1 from "@/assets/images/social-pic1.jpg";

export default function WhoWeAre() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#FDFAFF] text-[#3a3a3a]">
      <div className="flex flex-col gap-y-[2rem]">
        {/* top row of images */}
        <div className="flex justify-between gap-[3.75rem]">
          <div className="w-[224px] h-[216px] rounded-xl overflow-hidden">
            <Image
              src={SocialPic1}
              alt="social group picture"
              width={224}
              height={216}
              className="object-cover object-bottom"
            />
          </div>
          <div className="bg-black w-[24rem] h-[13.5rem] rounded-xl" />
          <div className="bg-black w-[24rem] h-[13.5rem] rounded-xl" />
        </div>

        {/* bottom row with text + image blocks */}
        <div className="flex justify-between gap-[3.75rem]">
          <div className="w-[14rem] h-[13.5rem] flex flex-col justify-center gap-[1rem]">
            <h3 className="text-[2rem] font-bold text-left leading-snug bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent">
              Who We Are
            </h3>
            <p className="text-base font-normal font-sans max-w-[30rem]">
              We’re a national community of students with a mission to become the world’s next generation of product leaders.
            </p>
          </div>

          <div className="bg-black w-[30rem] h-[13.5rem] rounded-xl" />
          <div className="bg-black w-[13.5rem] h-[13.5rem] rounded-xl" />
        </div>
      </div>
    </section>
  );
}
