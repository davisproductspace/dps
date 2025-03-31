import React from "react";

const events = [
  {
    date: "Mon, 3/31 @ 12am",
    title: "Applications Open",
    description:
      "Two short written questions to gauge your interest in product management and your fit for Product Space.",
  },
  {
    date: "Tues, 4/1 @ 7-8pm in TLC 2215",
    title: "Info Session",
    description:
      "Come learn more about what the Spring Fellowship has to offer and if Product Space is the club for you!",
  },
  {
    date: "Wed, 4/2 @ 6-7pm in TLC 3218",
    title: "Intro to PM",
    description:
      "Discover if product management (PM) is the right path for you by building a product with your friends. Led by four product leaders at Uber.",
  },
  {
    date: "Thurs, 4/3 @ 11:59pm",
    title: "Application Close",
    description: "Wish you luck :)",
  },
  {
    date: "Sat, 4/5 by invite",
    title: "Product Pitch",
    description:
      "Collaboratively ideate a software product in response to a prompt and present a short pitch. Think ProdCon, but in an hour :)",
  },
  {
    date: "Sun, 4/6 by invite",
    title: "Interviews",
    description:
      "Engage in a conversation about your interests, career goals, and personal values. This is our opportunity to get to know you beyond your application.",
  },
  {
    date: "Mon, 4/7",
    title: "Offers",
    description:
      "If we find that Product Space is right for you and your career goals, and that you’d be a good fit for our community, we’d love to welcome you to our club.",
  },
  {
    date: "Wed, 4/9 @ 7-9pm*",
    title: "Fellowship Begins!",
    description:
      "The Spring Fellowship kicks off with a workshop on user research led by Sarit Arora, Senior Director of UX Design at Oracle. *Normally, our workshops take place every Tuesday from 7-9pm. The first week is an exception.",
  },
];

export default function EventSchedule() {
  return (
    <div className="min-h-screen flex justify-center items-center py-12">
      <div className="w-full px-[120px]">
        <h2 className="text-3xl font-semibold text-left text-[#3a3a3a] mb-8">
          Spring 2025 Fellowship Recruitment
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col items-start relative"
            >
              <div className="flex flex-col items-start text-left w-full">
                {/* Left-aligned Date */}
                <span
                  className="text-[#7F7F7F] text-sm font-normal"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28px", // 200% line-height
                  }}
                >
                  {event.date}
                </span>

                {/* Left-aligned Heading with gradient text */}
                <h3
                  className="text-transparent bg-clip-text"
                  style={{
                    background: "linear-gradient(90deg, #E06287 0%, #765DF2 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Inter",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "28px",
                  }}
                >
                  {event.title}
                </h3>

                {/* Left-aligned Description with specified styling */}
                <p
                  className="text-[#000] text-sm mt-2"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "23px", // 164.286% line-height
                  }}
                >
                  {event.description.includes('*') ? (
                    <>
                    {event.description.split('*')[0]}
                    <br />
                    <span>{`*${event.description.split('*')[1]}`}</span>
                    </>
                ) : (
                    event.description
                )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
