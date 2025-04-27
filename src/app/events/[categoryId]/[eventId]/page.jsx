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
      <h1 className="text-red-500 lg:mt-10 text-center text-2xl">Event Not Found</h1>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col lg:pt-20 md:flex-row items-center py-10 px-4"
      style={{ backgroundColor: "#0f172a",
        fontFamily: "MedievalSharp"
       }}
    >
      <div className="flex justify-start md:w-1/3 mb-6 md:mb-0">
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
        {/* Event Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white uppercase mb-6 tracking-wide drop-shadow-lg">
          {event.name}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-4xl bg-gray-800 p-4 rounded-lg shadow-md">
          {event.description}
        </p>

        {/* Rules Section */}
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

        {(event.abes || event.nonabes) && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 uppercase mt-10">
          Registration fee
        </h2>
              <ul className="text-lg max-w-3xl text-left mt-4 space-y-3 bg-gray-800 p-5 rounded-lg shadow-md">
                {event.abes && (
                  <li className="text-gray-300">
                    ABES Students: {event.abes}
                  </li>
                )}
                {event.nonabes && (
                  <li className="text-gray-300">
                    Non-ABES Students: {event.nonabes}
                  </li>
                )}
              </ul>
            </div>
          )}

        {event.judgment && event.judgment.length > 0 && (
            <div>
             <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 uppercase mt-10">
             Judgment Criteria
        </h2>
              <ul className="text-lg max-w-3xl text-left mt-4 space-y-3 bg-gray-800 p-5 rounded-lg shadow-md">
                {event.judgment.map((criteria, index) => (
                  <li key={index} className="text-gray-300">
                   🔹 {criteria}
                  </li>
                ))}
              </ul>
            </div>
          )}

        {/* Additional Details Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 uppercase mt-10">
          Details
        </h2>
        <div className="text-lg max-w-3xl text-left mt-4 space-y-3 bg-gray-800 p-5 rounded-lg shadow-md">
          {event.venue && (
            <p className="text-gray-300">
              📍 <span className="font-semibold">Venue:</span> {event.venue}
            </p>
          )}
          {event.eventday && (
            <p className="text-gray-300">
              📅 {event.eventday}
            </p>
          )}
          {event.time && (
            <p className="text-gray-300">
              ⏰ <span className="font-semibold">Time:</span> {event.time}
            </p>
          )}
          {event.totalprize && (
            <p className="text-gray-300">
              🏆 <span className="font-semibold">Total prize:</span> {event.totalprize}
            </p>
          )}
          {event.prize && event.prize.length > 0 && (
            <div>
              <p className="text-gray-300 font-semibold">Prizes:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                {event.prize.map((prizeItem, index) => (
                  <li key={index} className="text-gray-300">
                    {prizeItem}
                  </li>
                ))}
              </ul>
            </div>
          )}
         {event.eventCoordinators && event.eventCoordinators.length > 0 && (
            <div>
              <p className="text-gray-300 font-semibold">📞 Coordinators:</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                {event.eventCoordinators.map((coord, index) => (
                  <li key={index} className="text-gray-300">
                    {coord}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
