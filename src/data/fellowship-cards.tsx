import UberLogo from "@/assets/icons/uber.svg";
import MicrosoftLogo from "@/assets/icons/microsoft.svg";
import MetaLogo from "@/assets/icons/meta.svg";
import TeslaLogo from "@/assets/icons/tesla.svg";
import GMLogo from "@/assets/icons/gm.svg";
import LogoBox from "@/components/landing/LogoBox";
import LogosMarquee from "@/components/landing/LogosMarquee";
import WorkshopBox from "@/components/landing/WorkshopBox";
import Image from "next/image";

const workshops = [
  { week: 1, title: "User Research & Problem Definition" },
  { week: 2, title: "Product Ideation & Feasibility Analysis" },
  { week: 3, title: "Documentation in Product Management" },
  { week: 4, title: "User Flow Mapping & Product Design" },
  { week: 5, title: "Agile Methodologies & Collaboration" },
  { week: 6, title: "Product Testing & Iteration" },
  { week: 7, title: "Go-to-Market Strategy & Marketing" },
  { week: 8, title: "Landing a Job in Product Management" },
];

const logoData = [
  { id: "uber", Icon: UberLogo },
  { id: "microsoft", Icon: MicrosoftLogo },
  { id: "meta", Icon: MetaLogo },
  { id: "tesla", Icon: TeslaLogo },
  { id: "gm", Icon: GMLogo },
];

const logoRow = logoData.map(({ id, Icon }) => (
  <LogoBox key={id}>
    <Icon className="w-full h-full text-white" />
  </LogoBox>
));

export const fellowshipCards = [
  {
    key: "weekly",
    props: {
      title: "Weekly Workshops",
      description:
        "Our Fellowship consists of eight activity-based workshops led by industry product leaders.",
      subtext1:
        "Each workshop covers a stage of the product development life-cycle – idea, research, design, test, launch, and iteration.",
      subtext2: "They take place every Tuesday, from 7-9PM.",
      middleContent: (
        <div>
          <LogosMarquee logos={logoRow} speed={25} />
          <LogosMarquee
            logos={logoData
              .slice() // avoid mutating original
              .reverse()
              .map(({ id, Icon }) => (
                <LogoBox key={`reversed-${id}`}>
                  <Icon className="w-full h-full text-white" />
                </LogoBox>
              ))}
            speed={30}
            reverse
          />
        </div>
      ),
    },
  },  
  {
    key: "workshops",
    props: {
      title: "Weekly Workshops",
      middleContent: (
        <div className="grid grid-cols-2 gap-x-[28px] gap-y-4 mt-[29px] justify-center">
          {workshops.map((w) => (
            <div key={w.week} className="w-full max-w-[174px]">
              <WorkshopBox {...w} />
            </div>
          ))}
        </div>
      ),
    },
  },  
  {
    key: "capstone",
    props: {
      title: "The Capstone",
      description:
        "To apply workshop knowledge, our Fellowship also includes a Capstone.",
      subtext1:
        "Build a product in a team of four, with expert guidance from an industry mentor focused on your team’s success. No coding skills required.",
      buttonText: "View Our Past Projects",
      buttonLink: "/about#projects",
      middleContent: (
        <div className="w-[376px] h-[156px] flex-shrink-0 overflow-hidden">
          <Image
            src="/images/FellowshipCards/capstone-preview.png"
            alt="Capstone preview"
            width={376}
            height={156}
            className="object-cover w-full h-full"
          />
        </div>
      ),
    },
  },
];
