import UberLogo from "@/assets/icons/uber.svg";
import MicrosoftLogo from "@/assets/icons/microsoft.svg";
import MetaLogo from "@/assets/icons/meta.svg";
import TeslaLogo from "@/assets/icons/tesla.svg";
import GMLogo from "@/assets/icons/gm.svg";
import LogoBox from "@/components/landing/LogoBox";
import LogosMarquee from "@/components/landing/LogosMarquee";

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
  {
    key: "alumni",
    props: {
      title: "Alumni Support",
      description:
        "Fellowship doesn’t end after 8 weeks — our alumni community stays active through mentorship and events.",
      subtext:
        "You'll gain access to a network of product leaders across industries who continue to support one another beyond the program.",
      buttonText: "See Alumni Stories",
      middleContent: (
        <div className="flex gap-4 justify-start">
          <div className="bg-white/10 p-2 rounded-lg text-sm">Figma</div>
          <div className="bg-white/10 p-2 rounded-lg text-sm">Slack</div>
          <div className="bg-white/10 p-2 rounded-lg text-sm">LinkedIn</div>
        </div>
      ),
    },
  },
];
