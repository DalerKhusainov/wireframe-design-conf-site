import { useState } from "react";

import speaker1 from "../assets/speakers/speaker1.jpg";
import speaker2 from "../assets/speakers/speaker2.jpg";
import speaker3 from "../assets/speakers/speaker3.jpg";
import speaker4 from "../assets/speakers/speaker4.jpg";
import speaker5 from "../assets/speakers/speaker5.jpg";
import speaker6 from "../assets/speakers/speaker6.jpg";
import speaker7 from "../assets/speakers/speaker7.jpg";
import speaker8 from "../assets/speakers/speaker8.jpg";
import speaker9 from "../assets/speakers/speaker9.jpg";
import speaker10 from "../assets/speakers/speaker10.jpg";
import speaker11 from "../assets/speakers/speaker11.jpg";
import speaker12 from "../assets/speakers/speaker12.jpg";
import speaker13 from "../assets/speakers/speaker13.jpg";
import speaker14 from "../assets/speakers/speaker14.jpg";
import speaker15 from "../assets/speakers/speaker15.jpg";
import speaker16 from "../assets/speakers/speaker16.jpg";
import speaker17 from "../assets/speakers/speaker17.jpg";
import speaker18 from "../assets/speakers/speaker18.jpg";

const daysOfSpeakers = {
  "1": [
    {
      imageUrl: speaker1,
      profi: "Interior Designer",
      fullName: "David Brooks",
    },
    {
      imageUrl: speaker2,
      profi: "UX/UI Designer",
      fullName: "Lina Speraldio",
    },
    {
      imageUrl: speaker3,
      profi: "Backend Engeener",
      fullName: "Geraldo Lam",
    },
    {
      imageUrl: speaker4,
      profi: "Backend Engeener",
      fullName: "Rebecca Ahrenstoff",
    },
    {
      imageUrl: speaker5,
      profi: "Backend Engeener",
      fullName: "Dimitri Koczera",
    },
    {
      imageUrl: speaker6,
      profi: "Frontend Developer",
      fullName: "Osbourne Speight",
    },
  ],
  "2": [
    {
      imageUrl: speaker7,
      profi: "Cybersecurity Analyst",
      fullName: "Sophia Martinez",
    },
    {
      imageUrl: speaker8,
      profi: "Network Engineer",
      fullName: "Mason Rodriguez",
    },
    {
      imageUrl: speaker9,
      profi: "Product Manager",
      fullName: "Mia Hernandez",
    },
    {
      imageUrl: speaker10,
      profi: "Mobile Application Developer",
      fullName: "James Lopez",
    },
    {
      imageUrl: speaker11,
      profi: "AI Researcher",
      fullName: "Elijah Gonzalez",
    },
    {
      imageUrl: speaker12,
      profi: "DevOps Engineer",
      fullName: "Charlotte Wilson",
    },
  ],
  "3": [
    {
      imageUrl: speaker13,
      profi: "Chief Technology Officer",
      fullName: "Emma Johnson",
    },
    {
      imageUrl: speaker14,
      profi: "Software Engineer",
      fullName: "Liam Smith",
    },
    {
      imageUrl: speaker15,
      profi: "Data Scientist",
      fullName: "Olivia Brown",
    },
    {
      imageUrl: speaker16,
      profi: "Systems Architect",
      fullName: "Noah Williams",
    },
    {
      imageUrl: speaker17,
      profi: "UX Designer",
      fullName: "Ava Jones",
    },
    {
      imageUrl: speaker18,
      profi: "Frontend Developer",
      fullName: "Isabella Garcia",
    },
  ],
};

function Speakers() {
  const [day, setDay] = useState<"1" | "2" | "3">("1");

  return (
    <section className="mb-[130px]">
      <div>
        <h2 className="mb-6 text-2xl font-bold mobile:text-3xl text-purple font-roboto">
          Speakers
        </h2>
        <p className="mobile:text-xl text-lg font-medium mb-[92px] font-inter text-slate text-pretty">
          We’re inviting the top creatives in the tech industry from all the
          world to come learn, grow, scrape their knees, try new things, to be
          vulnerable, and to have epic adventures together, this time both
          in-person and via a livestream.
        </p>
      </div>
      {/* Speakers and Days of Event */}
      <div className="flex flex-col tablet:flex-row mobile:justify-between">
        {/* Days */}
        <div className="grid grid-cols-3 gap-4 mb-12 tablet:gap-0 tablet:flex tablet:flex-col tablet:w-[22%] tablet:space-y-6">
          <button
            onClick={() => setDay("1")}
            className={`flex flex-col items-center mobile:items-start w-full border-b-2 ${
              day === "1" ? "border-b-purple" : "border-b-purple/10"
            }`}
          >
            <span
              className={`mobile:text-sm text-xs font-semibold ${
                day === "1" ? "text-purple" : "text-slate"
              } font-inter`}
            >
              Day 1
            </span>
            <span
              className={`mb-4 text-sm mobile:text-xl ${
                day === "1" ? "text-purple" : "text-slate"
              } font-inter`}
            >
              September 5
            </span>
          </button>
          <button
            onClick={() => setDay("2")}
            className={`flex flex-col items-center mobile:items-start w-full border-b-2 ${
              day === "2" ? "border-b-purple" : "border-b-purple/10"
            }`}
          >
            <span
              className={`mobile:text-sm text-xs font-semibold ${
                day === "2" ? "text-purple" : "text-slate"
              } font-inter`}
            >
              Day 2
            </span>
            <span
              className={`mb-4 text-sm mobile:text-xl ${
                day === "2" ? "text-purple" : "text-slate"
              } font-inter`}
            >
              September 6
            </span>
          </button>
          <button
            onClick={() => setDay("3")}
            className={`flex flex-col items-center mobile:items-start w-full border-b-2 ${
              day === "3" ? "border-b-purple" : "border-b-purple/10"
            }`}
          >
            <span
              className={`mobile:text-sm text-xs font-semibold ${
                day === "3" ? "text-purple" : "text-slate"
              } font-inter`}
            >
              Day 3
            </span>
            <span
              className={`mb-4 text-sm mobile:text-xl ${
                day === "3" ? "text-purple" : "text-slate"
              } font-inter`}
            >
              September 7
            </span>
          </button>
        </div>
        {/* Speakers */}
        <div className="grid grid-cols-2 mobile:grid-cols-3 w-full gap-x-4 gap-y-10 tablet:w-[75%]">
          {daysOfSpeakers[day].map((speaker) => (
            <div>
              <div className="mb-2 aspect-w-3 aspect-h-3">
                <img
                  src={speaker.imageUrl}
                  className="object-cover w-full h-full saturate-0"
                />
              </div>
              <p className="text-xs font-medium text-seafoamGreen font-inter">
                {speaker.profi}
              </p>
              <p className="text-sm font-medium text-slate font-inter">
                {speaker.fullName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
