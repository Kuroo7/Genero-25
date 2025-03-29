import Link from "next/link";
import { eventsData } from "../../data/eventData.js";
import EventCard from "@/components/Events/EventCard.jsx";

export default function EventsPage() {
  return (
    <div className="p-6 md:py-20">
      <h1 className="text-5xl text-center font-bold mb-4">Events</h1>
      <div className="max-w-[80vw] min-h[70vh] m-auto flex justify-around p-2.5 flex-wrap">
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
