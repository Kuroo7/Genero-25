import Link from "next/link";
import React from "react";
import EventsCard from "@/components/Events/EventsCard";

const Page = () => {
  const cards = [
    {
      id: 1,
      name: "VR Arena",
      link: "/events/egaming/vrarena",
      image: "/egaming/egamingImg/vr.jpg",
    },
    {
      id: 2,
      name: "Killzone Combat",
      link: "/events/egaming/killzonecombat",
      image: "/egaming/egamingImg/killzonecombat.jpg",
    },
    {
      id: 3,
      name: "Console Quest",
      link: "/events/egaming/consolequest",
      image: "/egaming/egamingImg/consolequest.jpg",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 px-4"
      style={{ background: "linear-gradient(135deg, #8652D1, #8153F9)" }}
    >
      <div className="w-full max-w-6xl flex justify-start mb-6">
        <Link href="/events/egaming/vrgaming">
          <span className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition cursor-pointer">
            Back
          </span>
        </Link>
      </div>

      <h1
        style={{ textAlign: "center", marginTop: "30px" }}
        className="pastHead md:text-6xl uppercase font-bold text-amber-400"
      >
        E-Gaming
      </h1>

      <div className="w-full max-w-6xl mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <EventsCard
            key={card.id}
            card={card}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
