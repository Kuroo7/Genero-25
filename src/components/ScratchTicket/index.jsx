"use client";
import Image from "next/image";
import { ScratchToReveal } from "./ScratchToReveal";

export default function TicketSection() {
  return (
    <div id="ticket" className="min-h-screen bg-black text-gold-100 overflow-hidden">
      {/* Sacred Legacy Background Elements */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/sacred-pattern.png')] bg-repeat opacity-30" />
        <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-radial-gradient(from-center, #2c1b0f00 0%, #0a0a0a 70%)" />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex flex-col items-center">
        {/* Ticket Reveal Section */}
        <div className="max-w-4xl w-full bg-black/50 backdrop-blur-sm border border-gold-700/30 rounded-xl p-8 mb-16 shadow-xl shadow-black/50">
          <h3 className="text-3xl font-serif text-gold-200 mb-6 text-center">
            Your Sacred Pass
          </h3>
          <p className="text-gold-300 text-center mb-8 max-w-2xl mx-auto">
            Scratch to reveal your unique festival ticket and unlock the mysteries of Genero25
          </p>

          {/* Scratch Ticket Container */}
          <div className="relative group">
            <ScratchToReveal
              width={816}
              height={268.8}
              minScratchPercentage={10}
              className="mx-auto overflow-hidden rounded-lg border-2 border-gold-500/50 shadow-lg shadow-gold-900/20"
              gradientColors={["#d4af37", "#f1e5ac", "#d4af37"]} // Gold gradient
            >
              <div className="relative w-full h-full">
                <Image
                  src="/ticket.jpg"
                  alt="Genero25 Festival Ticket"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScratchToReveal>
            <p className="text-center text-gold-300 mt-4 text-sm italic">
              Gently scratch the surface to reveal your destiny
            </p>
          </div>
        </div>

      </main>

      

      {/* Global Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background: linear-gradient(to bottom, #0a0a0a 0%, #1a120b 100%);
          color: #e5d8b0;
        }
        .cursor-scratch {
          cursor: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNSIgZmlsbD0iI2Q0YWYzNyIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4='), auto;
        }
        @keyframes pulse-gold {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-gold {
          animation: pulse-gold 2s infinite;
        }
      `}</style>
    </div>
  );
}