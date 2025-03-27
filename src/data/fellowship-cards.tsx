import UberLogo from "@/assets/icons/uber.svg";
import MicrosoftLogo from "@/assets/icons/microsoft.svg";
import MetaLogo from "@/assets/icons/meta.svg";
import TeslaLogo from "@/assets/icons/tesla.svg";
import GMLogo from "@/assets/icons/gm.svg";
import LogoBox from "@/components/landing/LogoBox";
import LogosMarquee from "@/components/landing/LogosMarquee";
import WorkshopBox from "@/components/landing/WorkshopBox";

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

export const fellowshipCards = [
  {
    key: "weekly",
    props: {
      title: "Weekly Workshops",
      description:
        "Our Fellowship consists of eight activity-based workshops led by industry product leaders.",
      subtext1:
        "Each workshop covers a stage of the product development life-cycle – idea, research, design, test, launch, and iteration. They take place every Tuesday, from 7-9 PM.",
      subtext2: "They take place every Tuesday, from 7-9PM.",
      middleContent: (
        <LogosMarquee
          logos={[
            <LogoBox><UberLogo className="w-full h-full text-white" /></LogoBox>,
            <LogoBox><MicrosoftLogo className="w-full h-full text-white" /></LogoBox>,
            <LogoBox><MetaLogo className="w-full h-full text-white" /></LogoBox>,
            <LogoBox><TeslaLogo className="w-full h-full text-white" /></LogoBox>,
            <LogoBox><GMLogo className="w-full h-full text-white" /></LogoBox>,
          ]}
        />
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
            <div className="w-full max-w-[174px]">
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
      subtext:
        "Build a product in a team of four, with expert guidance from an industry mentor focused on your team’s success. No coding skills required.",
      buttonText: "View Our Past Projects",
      middleContent: (
        <div className="flex gap-4">
          <img src="/capstone1.png" alt="Capstone 1" className="w-1/2 rounded-lg" />
          <img src="/capstone2.png" alt="Capstone 2" className="w-1/2 rounded-lg" />
        </div>
      ),
    },
  },
];
