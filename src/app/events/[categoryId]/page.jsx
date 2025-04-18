"use client";
import { useParams } from "next/navigation";
import { eventsData } from "../../../data/eventData.js";
import Link from "next/link";
import EventsCard from "@/components/Events/EventsCard.jsx";
import "../../../components/Events/EventCard.css";

export default function EventCategoryPage() {
  const { categoryId } = useParams();
  const category = eventsData.find((cat) => cat.id === categoryId);

  // console.log(category);

  if (!category) {
    return (
      <h1 className="text-red-500 text-center text-2xl">Category Not Found</h1>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 px-4 pt-20"
      style={{backgroundImage: "url('/event.jpg')", backgroundSize: "cover" }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontFamily: "MedievalSharp",
          background: "linear-gradient(90deg, white 0%,rgb(255, 191, 0) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 5px rgba(255, 255, 255, 0.5)", // subtle glow/contrast
        }}
        className="pastHead text-4xl md:text-6xl uppercase font-bold text-amber-400"
      >
        {category.name}
      </h1>
      <div 
        className="flex w-full max-w-6xl mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6"
        style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
        {category.events.map((card, index) => (
          <EventsCard
            className="innerCard"
            key={card.id}
            card={card}
            index={index}
            id={category.id}
          />
        ))}
      </div>
    </div>
    // <div className="p-6">
    //   <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
    //   <p className="text-gray-600">{category.description}</p>
    //   <ul className="mt-4 grid grid-cols-2 gap-4">
    //     {category.events.map((event) => (
    //       <li key={event.id} className="p-4 border rounded-md">
    //         <Link href={`/events/${categoryId}/${event.id}`} className="text-blue-600 text-lg font-semibold">
    //           {event.name}
    //         </Link>
    //         <p className="text-gray-600">{event.description}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
