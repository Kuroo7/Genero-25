"use client";
import { useParams } from "next/navigation";
import { eventsData } from "../../../data/eventData.js";
import Link from "next/link";

export default function EventCategoryPage() {
  const { categoryId } = useParams();
  const category = eventsData.find((cat) => cat.id === categoryId);

  if (!category) {
    return <h1 className="text-red-500 text-center text-2xl">Category Not Found</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
      <p className="text-gray-600">{category.description}</p>
      <ul className="mt-4 grid grid-cols-2 gap-4">
        {category.events.map((event) => (
          <li key={event.id} className="p-4 border rounded-md">
            <Link href={`/events/${categoryId}/${event.id}`} className="text-blue-600 text-lg font-semibold">
              {event.name}
            </Link>
            <p className="text-gray-600">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
