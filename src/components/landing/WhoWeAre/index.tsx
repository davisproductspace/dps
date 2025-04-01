import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#FDFAFF] text-[#3a3a3a] px-[120px] py-12">
      <div className="hidden lg:flex flex-col gap-y-[32px]">
        {/* Top row of images */}
        <div className="flex gap-x-[30px]">
          <div className="w-[224px] h-[216px] rounded-xl overflow-hidden">
            <Image
              src="/images/WhoWeAre/social-pic1.png"
              alt="social group picture"
              width={224}
              height={216}
            />
          </div>
          <div className="w-[384px] h-[216px] rounded-xl overflow-hidden">
            <Image
              src="/images/WhoWeAre/group-headshot.png"
              alt="group headshot"
              width={384}
              height={216}
            />
          </div>
          <div className="w-[224px] h-[216px] rounded-xl overflow-hidden">
            <Image
              src="/images/WhoWeAre/social-pic4.png"
              alt="social group picture"
              width={224}
              height={216}
            />
          </div>
          <div className="w-[310px] h-[216px] rounded-xl overflow-hidden">
            <Image
              src="/images/WhoWeAre/social-pic2.png"
              alt="another image"
              width={310}
              height={216}
            />
          </div>
        </div>

        {/* Bottom row with text + image blocks */}
        <div className="flex gap-x-[32px]">
          <div className="w-[224px] h-[216px] flex flex-col justify-center gap-y-[16px]">
            <h3 className="text-[2rem] font-bold text-left leading-snug bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent">
              Who We Are
            </h3>
            <p className="text-[clamp(0.65rem, 2.5vw, 0.875rem)] font-normal font-sans leading-snug">
              We’re a national community of students with a mission to become the
              world’s next generation of product leaders.
            </p>
          </div>

          <div className="w-[216px] h-[216px] rounded-xl overflow-hidden">
            <Image
              src="/images/WhoWeAre/social-pic3.png"
              alt="another image"
              width={216}
              height={216}
            />
          </div>

          <div className="w-[480px] h-[216px] rounded-xl overflow-hidden">
            <Image
              src="/images/WhoWeAre/capstone-pres.png"
              alt="capstone presentation"
              width={480}
              height={216}
            />
          </div>
          <div className="w-[216px] h-[216px] rounded-xl overflow-hidden">
            <Image
              src="/images/WhoWeAre/social-pic5.png"
              alt="another image"
              width={216}
              height={216}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
