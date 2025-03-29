import Link from "next/link";
import { eventsData } from "../../data/eventData.js";
import EventCard from "@/components/Events/EventCard.jsx";

export default function EventsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <ul className="grid grid-cols-2 gap-4">
        {eventsData.map((category) => (
            <EventCard
              key={category.id}
              propStyle={{ height: "200px" }}
              imgSrc={category.imgSrc}
              name={category.name}
              redirectLink={category.id}
            />
        ))}
      </ul>
    </div>
  );
}
