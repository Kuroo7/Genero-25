"use client";
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
    <div className="p-6">
      <h1 className="text-3xl font-bold">{event.name}</h1>
      <p className="text-gray-600 mt-2">{event.description}</p>
      <h2 className="text-2xl font-semibold mt-4">Rules:</h2>
      <ul className="list-disc pl-6 mt-2">
        {event.rules.map((rule, index) => (
          <li key={index} className="text-gray-700">{rule}</li>
        ))}
      </ul>
    </div>
  );
}

