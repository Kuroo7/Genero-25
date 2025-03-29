import Link from "next/link";
import { eventsData } from "../../data/eventData.js";
import EventCard from "@/components/Events/EventCard.jsx";

export default function EventsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <ul className="grid grid-cols-2 gap-4">
        {eventsData.map((category) => (
          <>
            <EventCard
              propStyle={{ height: "200px" }}
              imgSrc={category.imgSrc}
              name={category.name}
              redirectLink={category.id}
              key={category.id}
            />
            {/* <li key={category.id} className="p-4 border rounded-md">
            <Link href={`/events/${category.id}`} className="text-blue-600 text-lg font-semibold">
              {category.name}
            </Link>
            <p className="text-gray-600">{category.description}</p>
          </li> */}
          </>
        ))}
      </ul>
    </div>
  );
}
