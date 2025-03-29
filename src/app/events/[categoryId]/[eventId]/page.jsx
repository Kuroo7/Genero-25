"use client";
import Image from "next/image.js";
import { eventsData } from "../../../../data/eventData.js";

import { useParams } from "next/navigation";


export default function EventDetailsPage() {
  const { categoryId, eventId } = useParams();
  const category = eventsData.find((cat) => cat.id === categoryId);
  const event = category?.events.find((ev) => ev.id === eventId);

  if (!event) {
    return <h1 className="text-red-500 text-center text-2xl">Event Not Found</h1>;
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
            <h1 className="text-5xl md:text-6xl font-bold text-white uppercase mb-6">
             {event.name}
            </h1>
            <p className="text-white text-lg max-w-4xl">
              {event.description}
            </p>
    
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mt-10">
              Rules
            </h2>
            <ul className="text-white text-lg max-w-3xl text-left mt-4 list-decimal list-inside space-y-2">
       {event.rules.map((rule, index) => (
          <li key={index} className="text-gray-700">{rule}</li>
        ))}
       </ul>
          </div>
        </div>
  );
}

