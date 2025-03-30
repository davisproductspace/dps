import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#FDFAFF] text-[#3a3a3a]">
      <div className="flex flex-col gap-y-[2rem]">
        {/* top row of images */}
        <div className="flex justify-between gap-[3.75rem]">
          <div className="w-[224px] h-[216px] rounded-xl overflow-hidden">
            <Image src="/images/WhoWeAre/social-pic1.png" alt="social group picture" width={224} height={216} />
          </div>
          <div className="w-[24rem] h-[13.5rem] rounded-xl overflow-hidden">
            <Image src="/images/WhoWeAre/group-headshot.png" alt="group headshot" width={384} height={216} />
          </div>
          <div className="w-[310px] h-[216px] rounded-xl overflow-hidden">
            <Image src="/images/WhoWeAre/social-pic2.png" alt="another image" width={310} height={216} />
          </div>
        </div>

        {/* bottom row with text + image blocks */}
        <div className="flex justify-between gap-[3.75rem]">
        <div className="w-[14rem] h-[13.5rem] flex flex-col justify-center gap-[1rem]">
          <h3 className="text-[1.5rem] max-[1160px]:text-[1.25rem] md:text-[2rem] font-bold text-left leading-snug bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent break-words">
            Who We Are
          </h3>
          <p className="text-[clamp(0.65rem, 2.5vw, 0.875rem)] font-normal font-sans leading-snug break-words">
            We’re a national community of students with a mission to become the world’s next generation of product leaders.
          </p>
        </div>

          <div className="w-[30rem] h-[13.5rem] rounded-xl overflow-hidden">
            <Image src="/images/WhoWeAre/capstone-pres.png" alt="image 2" width={480} height={216} />
          </div>
          <div className="w-[13.5rem] h-[13.5rem] rounded-xl overflow-hidden">
            <Image src="/images/WhoWeAre/social-pic3.png" alt="image 3" width={216} height={216} />
          </div>
        </div>
      </div>
    </section>
  );
}
