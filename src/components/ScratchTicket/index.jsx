"use client";

import Image from "next/image";
import { ScratchToReveal } from "./ScratchToReveal";

export default function ScratchText() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/ticket2.png" 
          alt="Background"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        {/* Optional dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <h1 className="text-4xl font-bold text-amber-400 mb-8 text-center drop-shadow-lg">
        Get Your Ticket
      </h1>

      <div className="w-full flex justify-center">
        <ScratchToReveal
          width={816}
          height={268.8}
          minScratchPercentage={70}
          className="overflow-hidden rounded-xl border-4 border-yellow-200 shadow-2xl shadow-yellow-950"
        >
          <div className="relative w-[816px] h-[268.8px]">
            <Image
              src="/ticket.jpg"
              alt="Scratch Ticket"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </ScratchToReveal>
      </div>

      <p className="mt-8 text-center text-2xl font-bold text-white drop-shadow-lg animate-pulse">
        Scratch Here To Reveal
      </p>

      <style jsx global>{`
        .cursor-scratch {
          cursor: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg=='), auto;
        }
      `}</style>
    </div>
  );
}