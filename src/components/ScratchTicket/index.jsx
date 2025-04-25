"use client";
import Image from "next/image";
import { useState } from "react";
import qr1 from "../../../public/Registration/qr-abes.jpeg";
import qr2 from "../../../public/Registration/qr-nonabes.jpeg";
import { ScratchToReveal } from "./ScratchToReveal";

export default function TicketSection() {
  const [section, setSection] = useState(0);
  const [isScratched, setIsScratched] = useState(false);

  return (
    <div
      id="ticket"
      className="min-h-screen flex items-center justify-center bg-black py-12 px-4"
    >
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/sacred-pattern.png')] bg-repeat opacity-30" />
        <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-radial-gradient(from-center, #2c1b0f00 0%, #0a0a0a 70%)" />
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-around mx-auto max-w-xs w-full mb-8">
          <button
            onClick={() => setSection(0)}
            className={`${
              section === 0
                ? "bg-amber-500 text-black"
                : "border border-amber-500 text-amber-500"
            } rounded px-3 py-1 cursor-pointer transition-colors font-medium`}
          >
            Ticket
          </button>
          <button
            onClick={() => setSection(1)}
            className={`${
              section === 1
                ? "bg-amber-500 text-black"
                : "border border-amber-500 text-amber-500"
            } rounded px-3 py-1 cursor-pointer transition-colors font-medium`}
          >
            Rules
          </button>
        </div>

        {!isScratched && section === 0 && (
          <div className="hidden md:block text-center mb-8">
            <p className="text-amber-400 italic text-lg font-serif animate-pulse">
              Scratch to reveal your sacred ticket
            </p>
          </div>
        )}

        <div className="flex items-center justify-center w-full">
          {section === 0 ? (
            <>
              {/* Desktop view with scratch effect */}
              <div className="hidden md:block">
                <ScratchToReveal
                  width={900}
                  height={300}
                  minScratchPercentage={15}
                  className="mx-auto w-full max-w-[900px]"
                  gradientColors={["#B88A5D", "#FFCA28", "#B88A5D"]} // Brown/gold gradient for sacred theme
                  onScratchComplete={() => setIsScratched(true)}
                >
                  <TicketContent qr1={qr1} qr2={qr2} />
                </ScratchToReveal>
              </div>

              {/* Mobile view without scratch effect */}
              <div className="md:hidden w-full">
                <TicketContent qr1={qr1} qr2={qr2} />
              </div>
            </>
          ) : (
            <div className="w-full max-w-2xl mx-auto bg-gray-800/30 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 md:p-8 shadow-xl shadow-amber-900/20">
              <p className="text-amber-200 mb-4 font-medium">
                Following are the rules to be followed by all the participants:
              </p>
              <ol className="text-amber-100 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    Treat the campus with respect and care, and avoid littering
                    or damaging property.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    Arrive on time for the event to avoid missing out on any
                    activities or performances.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    Follow safety instructions provided by the organizers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    Show respect and courtesy towards fellow attendees,
                    organizers, and performers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    Alcohol and drugs are strictly prohibited at the event.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>
                    Dispose of waste properly and help keep the venue clean.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Have fun and enjoy the event responsibly.</span>
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TicketContent({ qr1, qr2 }) {
  return (
    <div className="ticket flex flex-col md:flex-row bg-white shadow-lg">
      {/* Stub Section - Hidden on mobile */}
      <div className="stub hidden md:block bg-[#8B5A2B] w-[250px] h-[300px] p-5 relative text-white">
        <div className="absolute inset-0 bg-[url('/sacred-pattern.png')] opacity-10" />
        <div className="top flex items-center h-10 uppercase">
          <span className="admit font-medium">Admit</span>
          <span className="line bg-white h-10 w-[3px] mx-5"></span>
          <span className="num text-xs">Invitation</span>
        </div>
        <div className="number absolute left-10 text-[150px] text-white/60 font-serif">
          1
        </div>
        <div className="invite absolute left-[150px] bottom-[45px] text-white w-1/5">
          <div className="h-[3px] w-10 bg-white mb-2"></div>
          <p className="text-sm font-medium">Invite for you</p>
        </div>
        {/* Triangles for stub edges */}
        <div className="absolute top-0 right-0 border-t-[20px] border-t-[#d49f00] border-l-[20px] border-l-[#FFCA28]"></div>
        <div className="absolute bottom-0 right-0 border-b-[20px] border-b-[#d49f00] border-l-[20px] border-l-[#FFCA28]"></div>
      </div>

      {/* Main Ticket Section */}
      <div className="check bg-white w-full md:w-[600px] h-[300px] p-10 flex flex-col md:flex-row items-center justify-around relative">
        <div className="flex-1">
          <div className="big text-5xl md:text-7xl font-bold text-black mb-4 md:mb-8 leading-tight">
            You're <br /> Invited
          </div>
          <div className="info flex flex-col md:flex-row gap-4 md:gap-10 text-black">
            <section>
              <div className="h-[3px] w-10 bg-[#8B5A2B] mb-2"></div>
              <div className="title text-xs uppercase font-bold">Date</div>
              <div className="font-medium">DD/MM/YYYY</div>
            </section>
            <section>
              <div className="h-[3px] w-10 bg-[#8B5A2B] mb-2"></div>
              <div className="title text-xs uppercase font-bold">Issued By</div>
              <div className="font-medium">SACRED LEGACY</div>
            </section>
            <section>
              <div className="h-[3px] w-10 bg-[#8B5A2B] mb-2"></div>
              <div className="title text-xs uppercase font-bold">
                Invite Number
              </div>
              <div className="font-medium">XYXXZERO</div>
            </section>
          </div>
        </div>
        <div className="qr-box-contain flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 h-full">
          <div className="qr-box flex flex-col items-center justify-center h-[120px] md:h-[150px] w-[120px] md:w-[150px] bg-transparent">
            <Image
              src={qr1}
              width={100}
              height={100}
              alt="ABES Students QR"
              className="w-[100px] h-[100px] md:w-[100px] md:h-[100px]"
            />
            <a
              href="https://pay.jodo.in/pages/PXnFu2ixjMaTGTuB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xs md:text-sm font-bold mt-2 flex items-center"
            >
              #ABESEC <span className="ml-1 md:ml-2 text-xs md:text-sm">↗</span>
            </a>
          </div>
          <div className="qr-box flex flex-col items-center justify-center h-[120px] md:h-[150px] w-[120px] md:w-[150px] bg-transparent">
            <Image
              src={qr2}
              width={100}
              height={100}
              alt="Non-ABES Students QR"
              className="w-[100px] h-[100px] md:w-[100px] md:h-[100px]"
            />
            <a
              href="https://pay.jodo.in/pages/327WhYZtuzfgiSrY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xs md:text-sm font-bold mt-2 flex items-center"
            >
              #NONABESEC{" "}
              <span className="ml-1 md:ml-2 text-xs md:text-sm">↗</span>
            </a>
          </div>
        </div>
        {/* Triangles for check edges */}
        <div className="absolute top-0 left-0 border-t-[20px] border-t-[#d49f00] border-r-[20px] border-r-white"></div>
        <div className="absolute bottom-0 left-0 border-b-[20px] border-b-[#d49f00] border-r-[20px] border-r-white"></div>
      </div>

      {/* Global styles including mobile-specific adjustments */}
      <style jsx>{`
        .ticket {
          font-family: "Montserrat", sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          color: #000 !important;
          border-radius: 0;
        }

        .stub {
          background: #FFCA28; /* Brown color for sacred theme*/
          height: 300px;
          width: 250px;
          color: white;
          padding: 20px;
          position: relative;
        }

        .stub .top {
          display: flex;
          align-items: center;
          height: 40px;
          text-transform: uppercase;
          position: relative;
          z-index: 2;
        }

        .stub .top .line {
          display: block;
          background: #fff;
          height: 40px;
          width: 3px;
          margin: 0 20px;
        }

        .stub .number {
          position: absolute;
          left: 40px;
          font-size: 150px;
          color: rgb(255, 255, 255);
          font-family: serif;
          z-index: 1;
        }

        .check {
          background: #fff;
          height: auto;
          min-height: 300px;
          width: 100%;
          padding: 20px;
          position: relative;
        }

        .big {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1em;
          color: black !important;
        }

        .info {
          display: flex;
          justify-content: flex-start;
          font-size: 12px;
          margin-top: 20px;
          width: 100%;
          color: #000 !important;
        }

        .info section {
          margin-right: 0;
        }

        .qr-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 120px;
          width: 120px;
        }

        .qr-box a {
          font-size: 12px;
          text-align: center;
          color: black !important;
          font-weight: 700;
          margin-top: 10px;
        }

        .qr-box-contain {
          display: flex;
          flex-direction: row;
          height: auto;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        @media (min-width: 768px) {
          .ticket {
            border-radius: 0;
          }

          .check {
            height: 300px;
            padding: 40px;
          }

          .big {
            font-size: 80px;
          }

          .info {
            flex-direction: row;
            gap: 50px;
          }

          .qr-box-contain {
            flex-direction: column;
            height: 300px;
            margin-top: 0;
          }

          .qr-box {
            height: 150px;
            width: 150px;
          }
        }

        @media (max-width: 767px) {
          .ticket {
            flex-direction: column;
            border-radius: 10px;
            overflow: hidden;
          }

          .check {
            padding: 20px;
          }

          .big {
            text-align: center;
            margin-bottom: 20px;
          }

          .info {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .info section {
            margin-bottom: 20px;
          }

          .info section:before {
            margin-left: auto;
            margin-right: auto;
          }

          .qr-box-contain {
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
}
