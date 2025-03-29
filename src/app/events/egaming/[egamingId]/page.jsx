"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const Page = () => {
  const { egamingId } = useParams();
  console.log(egamingId); // This will log the dynamic segment of the URL
  const egamingEvents = [
    {
      id: 1,
      name: "vrarena",
      description:
        "Step into a whole new world of immersive gaming at our VR Gaming Event! Experience the latest and greatest in virtual reality technology as you battle foes, explore new worlds, and challenge your skills in a thrilling, one-of-a-kind gaming experience.",
      rules: [
        "Follow all game and VR platform instructions.",
        "Ensure your VR equipment is clean and well-maintained.",
        "Play in a safe environment, avoiding crowded or cluttered areas.",
        "Any damage to the equipment must be covered by the player.",
      ],
    },
    {
      id: 2,
      name: "Killzone Combat",
      description:
        "Prepare for an adrenaline-fueled battle in Killzone Combat! Take on opponents in an intense first-person shooter experience, featuring high-stakes missions and tactical gameplay that will test your reflexes and strategy.",
      rules: [
        "No unauthorized modifications to game settings.",
        "Players must maintain sportsmanship and avoid toxic behavior.",
        "Headshots are allowed, but no spawn camping.",
        "Breaking game rules may lead to disqualification.",
      ],
    },
    {
      id: 3,
      name: "Console Quest",
      description:
        "Compete in the ultimate Console Quest, featuring a mix of popular console games! Show off your skills in a variety of challenges, from racing to fighting games, and prove you’re the champion of the console world.",
      rules: [
        "Players must use provided controllers or bring their own (if allowed).",
        "No pausing the game mid-match unless allowed by the referee.",
        "Each match will have a time limit; exceeding it results in a forfeit.",
        "Winner advances in a bracket-style tournament.",
      ],
    },
  ];
  // const event = egamingEvents.find((event) => event.name === egamingId); 
  // console.log(event); 

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center py-10 px-4"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="flex justify-center md:w-1/2 mb-6 md:mb-0">
        <Image
          src="/logo.png"
          alt="VR Arena Logo"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-white uppercase mb-6">
          VR Arena
        </h1>
        <p className="text-white text-lg max-w-4xl">
          Step into a whole new world of immersive gaming at our VR Gaming
          Event! Get ready to experience the latest and greatest in virtual
          reality technology as you battle foes, explore new worlds, and
          challenge your skills in a thrilling, one-of-a-kind gaming experience.
          With a variety of games to choose from, there's something for every
          gamer, from beginners to experts. Don't miss out on this unforgettable
          adventure – come join us for a day of virtual reality gaming that will
          leave you wanting more! (Day 1: 9:30AM–4:00PM)
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mt-10">
          Rules
        </h2>
        <ul className="text-white text-lg max-w-3xl text-left mt-4 list-decimal list-inside space-y-2">
          <li>
            Always follow the instructions and guidelines provided by the game
            or VR platform.
          </li>
          <li>
            Keep your VR equipment clean and well-maintained. Check regularly
            for any damage or wear and tear that may affect your experience.
          </li>
          <li>
            Ensure that you have enough space to move around and play safely.
            Avoid playing in crowded or cluttered areas, as you may accidentally
            bump into objects or people.
          </li>
          <li>
            In case of any damage to the equipment, the player will have to pay
            for the damage.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
