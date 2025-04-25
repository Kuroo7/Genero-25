"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on page load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample past sponsors data (replace with your actual data)
  const pastSponsors = [
    { name: "Realme", logo: "/realme.jpg" },
    { name: "Amarujala", logo: "/amarujala.jpg" },
    { name: "Appwars", logo: "/appwars.webp" },
    { name: "lensflix", logo: "/lensfilx.png" },
    { name: "grog", logo: "/grog1.jpeg" },
    { name: "Ktm", logo: "/ktm.png" },
    { name: "Jodo", logo: "/jodo.jpg" },
    { name: "Bingo", logo: "/bingo.jpg" },
    { name: "Decathlon", logo: "/decathlon.png" },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Head>
        <title>Sponsorship - EventX</title>
        <meta
          name="description"
          content="Join our event as a sponsor and gain visibility!"
        />
      </Head>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        {/* Past Sponsors Section */}
        <section
          className={`mb-16 transition-transform duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 uppercase mb-10 animate-slideIn">
            Our Past Sponsors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pastSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group bg-transparent bg-opacity-10 backdrop-blur-lg rounded-2xl p-3 text-center transform transition-all duration-300 hover:-translate-y-2  hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full h-32 mb-4">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Sponsors Section (Placeholder) */}
        <section
          className={`mb-16 transition-transform duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 uppercase mb-10 animate-slideIn">
            Current Sponsors
          </h2>
          <p className="text-center text-lg text-white">
            Be the next big name here! Contact us to sponsor EventX.
          </p>
        </section>

        {/* Call to Action */}
        <section
          className={`text-center py-16  bg-opacity-70 rounded-3xl transition-transform duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
            Become a Sponsor Today!
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto mb-8 px-4">
            Get unparalleled exposure and connect with thousands of attendees.
            Let’s make waves together!
          </p>
          <Link href="/contact">
            <div className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,215,0,0.7)] transition-all duration-300">
              Contact Us
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
