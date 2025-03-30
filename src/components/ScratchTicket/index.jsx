"use client";
import Image from 'next/image';
import { useState } from 'react';
import qr1 from '../../../public/Registration/qr-abes.png';
import qr2 from '../../../public/Registration/qr-nonabes.png';
import { ScratchToReveal } from './ScratchToReveal';

export default function TicketSection() {
  const [section, setSection] = useState(0);
  const [isScratched, setIsScratched] = useState(false);

  return (
    <div id="ticket" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 py-12 px-4">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/sacred-pattern.png')] bg-repeat opacity-30" />
        <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-radial-gradient(from-center, #2c1b0f00 0%, #0a0a0a 70%)" />
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-around mx-auto max-w-xs w-full mb-8">
          <button
            onClick={() => setSection(0)}
            className={`${section === 0 ? 'bg-amber-600 text-white' : 'border border-amber-600 text-amber-400'} rounded px-4 py-2 cursor-pointer transition-colors font-medium`}
          >
            Ticket
          </button>
          <button
            onClick={() => setSection(1)}
            className={`${section === 1 ? 'bg-amber-600 text-white' : 'border border-amber-600 text-amber-400'} rounded px-4 py-2 cursor-pointer transition-colors font-medium`}
          >
            Rules
          </button>
        </div>

        {!isScratched && section === 0 && (
          <div className="text-center mb-6">
            <p className="hidden md:block text-amber-300 italic text-lg">
              Scratch to reveal your sacred ticket
            </p>
          </div>
        )}

        <div className="flex items-center justify-center w-full">
          {section === 0 ? (
            <ScratchToReveal
              width={900}
              height={300}
              minScratchPercentage={15}
              className="mx-auto hidden md:block w-full max-w-4xl"
              gradientColors={["#d4af37", "#f1e5ac", "#d4af37"]}
              onScratchComplete={() => setIsScratched(true)}
            >
              <div className="ticket w-full flex flex-col md:flex-row bg-gradient-to-r from-amber-900/70 to-amber-800/80 shadow-lg">
                {/* Stub Section - Hidden on mobile */}
                <div className="stub hidden md:block bg-gradient-to-b from-amber-800 to-amber-900 w-full md:w-[250px] h-[300px] p-5 relative">
                  <div className="absolute inset-0 bg-[url('/sacred-pattern.png')] opacity-10" />
                  <div className="top flex items-center h-10 relative z-10">
                    <span className="admit text-amber-100 font-medium">Admit</span>
                    <span className="line bg-amber-500 h-10 w-[3px] mx-5"></span>
                    <span className="num text-xs text-amber-200">Invitation</span>
                  </div>
                  <div className="number absolute left-10 text-[150px] text-amber-700/60 font-serif">1</div>
                  <div className="invite absolute left-[150px] bottom-[45px] text-amber-200 w-1/5">
                    <div className="h-[3px] w-10 bg-amber-500 mb-2"></div>
                    <p className="text-sm font-medium">Invite for you</p>
                  </div>
                </div>

                {/* Main Ticket Section */}
                <div className="check bg-gradient-to-b from-amber-900/40 to-amber-800/50 w-full md:w-[600px] h-[300px] p-4 md:p-10 flex flex-col md:flex-row items-center justify-around">
                  <div className="flex-1">
                    <div className="big text-4xl md:text-7xl font-serif font-bold text-amber-100 mb-4 md:mb-8">
                      You're <br /> Invited
                    </div>
                    <div className="info flex flex-col md:flex-row gap-4 md:gap-10 text-amber-100">
                      <section>
                        <div className="h-[3px] w-10 bg-amber-500 mb-2"></div>
                        <div className="title text-xs uppercase text-amber-300 font-bold">Date</div>
                        <div className="font-medium">DD/MM/YYYY</div>
                      </section>
                      <section>
                        <div className="h-[3px] w-10 bg-amber-500 mb-2"></div>
                        <div className="title text-xs uppercase text-amber-300 font-bold">Issued By</div>
                        <div className="font-medium">GENERO'25</div>
                      </section>
                      <section>
                        <div className="h-[3px] w-10 bg-amber-500 mb-2"></div>
                        <div className="title text-xs uppercase text-amber-300 font-bold">Invite Number</div>
                        <div className="font-medium">XYXXZERO</div>
                      </section>
                    </div>
                  </div>
                  <div className="qr-box-contain flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 h-full md:h-auto mt-4 md:mt-0">
                    <div className="qr-box flex flex-col items-center bg-amber-900/30 p-3 rounded-lg">
                      <Image 
                        src={qr1} 
                        width={120} 
                        height={120} 
                        alt="ABES Students QR" 
                        className="w-20 h-20 md:w-[120px] md:h-[120px]"
                      />
                      <a 
                        href="https://rzp.io/l/OLuKyJ3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-amber-100 hover:text-amber-50 text-xs md:text-sm flex items-center mt-2 font-medium"
                      >
                        #ABESEC <span className="ml-1 text-xs">↗</span>
                      </a>
                    </div>
                    <div className="qr-box flex flex-col items-center bg-amber-900/30 p-3 rounded-lg">
                      <Image 
                        src={qr2} 
                        width={120} 
                        height={120} 
                        alt="Non-ABES Students QR" 
                        className="w-20 h-20 md:w-[120px] md:h-[120px]"
                      />
                      <a 
                        href="https://rzp.io/l/9ELBp2Vi1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-amber-100 hover:text-amber-50 text-xs md:text-sm flex items-center mt-2 font-medium"
                      >
                        #NONABESEC <span className="ml-1 text-xs">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScratchToReveal>
          ) : (
            <div className="w-full max-w-2xl mx-auto bg-gradient-to-b from-amber-900/20 to-amber-800/30 backdrop-blur-sm border border-amber-700/30 rounded-xl p-6 md:p-8 shadow-xl shadow-amber-900/20">
              <p className="text-amber-200 mb-4 font-medium">Following are the rules to be followed by all the participants:</p>
              <ol className="text-amber-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Treat the campus with respect and care, and avoid littering or damaging property.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Arrive on time for the event to avoid missing out on any activities or performances.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Follow safety instructions provided by the organizers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Show respect and courtesy towards fellow attendees, organizers, and performers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Alcohol and drugs are strictly prohibited at the event.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Dispose of waste properly and help keep the venue clean.</span>
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

      {/* Mobile-specific styles */}
      <style jsx global>{`
        @media screen and (max-width: 768px) {
          .ticket {
            width: 90vw;
            border-radius: 10px;
            overflow: hidden;
          }
          .check {
            flex-direction: column;
            height: auto;
            padding: 20px;
          }
          .qr-box-contain {
            flex-direction: row;
            width: 100%;
            margin-top: 20px;
          }
          .info {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
          }
          .info section {
            margin: 10px 0;
          }
          .info section:before {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}