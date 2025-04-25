"use client";
import Image from "next/image.js";
import { eventsData } from "../../../../data/eventData.js";

import { useParams } from "next/navigation";

export default function EventDetailsPage() {
  const { categoryId, eventId } = useParams();
  const category = eventsData.find((cat) => cat.id === categoryId);
  const event = category?.events.find((ev) => ev.id === eventId);

  if (!event) {
    return (
      <h1 className="text-red-500 text-center text-2xl">Event Not Found</h1>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center py-10 px-4"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="flex justify-center md:w-1/3 mb-6 md:mb-0">
        <Image
          src="/logo.png"
          alt="VR Arena Logo"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-2/3 text-center md:text-left">
        {/* Event Name - More Prominent */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white uppercase mb-6 tracking-wide drop-shadow-lg">
          {event.name}
        </h1>

        {/* Description - Better Readability */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-4xl bg-gray-800 p-4 rounded-lg shadow-md">
          {event.description}
        </p>

        {/* Rules Section - Stylish & Readable */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 uppercase mt-10">
          Rules
        </h2>
        <div className="text-lg max-w-3xl text-left mt-4 space-y-3 bg-gray-800 p-5 rounded-lg shadow-md">
          {event.rules.map((rule, index) => (
            <p
              key={index}
              className="text-gray-300 hover:text-white transition-all duration-300"
            >
              🔹 {rule}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
