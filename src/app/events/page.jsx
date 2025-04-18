import Link from "next/link";
import { eventsData } from "../../data/eventData.js";
import EventCard from "@/components/Events/EventCard.jsx";

export default function EventsPage() {
  return (
    <div className="p-6 md:py-20">
      <h1 className="text-5xl text-center font-bold mb-4 mt-5"
      style={{ fontFamily: "MedievalSharp",
        background: "linear-gradient(90deg, white 0%,rgb(255, 191, 0) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "2px 2px 5px rgba(255, 255, 255, 0.5)", // subtle glow/contrast
      }}>Events</h1>
      <div className="max-w-[90vw] min-h[70vh] m-auto flex justify-around flex-wrap">
        {eventsData.map((category) => (
            <EventCard
              key={category.id}
              propStyle={{ height: "200px" }}
              imgSrc={category.imgSrc}
              name={category.name}
              redirectLink={category.id}
            />
        ))}
      </div>
    </div>
  );
}
