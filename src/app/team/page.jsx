const Page = () => {
  const teamMembers = [
    { name: "Naman Goel", role: "General Secretary", image: "/profile2.jpg" },
    { name: "Jamie Lee", role: "Joint Secretary", image: "/profile2.jpg" },
    { name: "Taylor Chen", role: "Joint Secretary", image: "/profile2.jpg" },
    { name: "Morgan Ray", role: "Joint Secretary", image: "/profile2.jpg" },
    { name: "Casey Kim", role: "Joint Secretary", image: "/profile2.jpg" },
    { name: "Jordan Patel", role: "Joint Secretary", image: "/profile2.jpg" },
    { name: "Sam Wilson", role: "Treasurer", image: "/profile2.jpg" },
    { name: "Robin Garcia", role: "Treasurer", image: "/profile2.jpg" },
    { name: "Chris Nguyen", role: "Treasurer", image: "/profile2.jpg" },
    { name: "Peyton Brooks", role: "Treasurer", image: "/profile2.jpg" },
  ];

  const gsMember = teamMembers.filter(
    (member) => member.role === "General Secretary"
  )[0];
  const otherMembers = teamMembers.filter(
    (member) => member.role !== "General Secretary"
  );

  return (
    <div className="min-h-screen bg-[#0a0410] py-10 px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0525] via-[#0a0410] to-[#1a0525]" />
      <div className="absolute inset-0 opacity-20 bg-[url('/17.png')]" />

      {/* Floating dots */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-float"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            animationDuration: `${Math.random() * 20 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <h1 className="text-5xl font-bold text-center text-amber-200 mb-16 font-[Cinzel] tracking-wider drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]  relative">
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-500">
          Core Team
        </span>
        <div className="w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4 opacity-80" />
      </h1>

      {/* General Secretary Card - Reduced size */}
      <div className="max-w-7xl mx-auto mb-16 relative ">
        <div className="group h-[450px] mx-auto w-full sm:w-80 lg:w-80">
          {" "}
          {/* Reduced from 540px */}
          <div className="relative h-full w-full transition-all duration-500 ease-out group-hover:translate-y-[-10px] group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.6)]">
            <div className="absolute inset-0 bg-[url('/Card1.png')] bg-cover bg-center rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.7)] border-2 border-amber-700/70 overflow-hidden p-1">
              <div className="relative h-full w-full bg-[#1a0525]/40 flex flex-col items-center p-6">
                {" "}
                {/* Reduced padding */}
                <div className="relative w-40 h-40 mt-8 mb-4">
                  {" "}
                  {/* Reduced size */}
                  <div className="absolute inset-0 rounded-full border-4 border-amber-700/50 animate-pulse-slow" />
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-amber-600/20 via-transparent to-amber-600/20 animate-spin-slow [animation-duration:15s]" />
                  <img
                    src={gsMember.image}
                    alt={gsMember.name}
                    className="relative w-full h-full rounded-full object-cover border-2 border-amber-600/80 "
                  />
                </div>
                <h3 className="text-2xl font-bold text-amber-100 mt-4 font-[Cinzel] tracking-wide text-center">
                  {gsMember.name}
                </h3>
                <p className="text-amber-200 italic text-lg mt-2 font-serif">
                  {gsMember.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Members - Increased gap */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 relative ">
        {" "}
        {/* Increased gap */}
        {otherMembers.map((member, index) => (
          <div key={index} className="group h-[380px]">
            {" "}
            {/* Slightly reduced height */}
            <div className="relative h-full w-full transition-all duration-500 ease-out group-hover:translate-y-[-8px] group-hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)]">
              <div className="absolute inset-0 bg-[url('/Card.png')] bg-cover bg-center rounded-xl shadow-[0_5px_25px_rgba(212,175,55,0.4)] border-2 border-amber-800/60 overflow-hidden p-1">
                <div className="relative h-full w-full bg-[#1a0525]/30 flex flex-col items-center p-4">
                  {" "}
                  {/* Reduced padding */}
                  <div className="relative w-32 h-32 mt-6 mb-4">
                    {" "}
                    {/* Reduced size */}
                    <div className="absolute -inset-3 rounded-full border border-amber-700/40 animate-spin-slow [animation-duration:20s]" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-full rounded-full object-cover border border-amber-700/60 "
                    />
                    <div className="absolute -top-3 -left-3 text-amber-600/70 text-xl">
                      ⌖
                    </div>
                    <div className="absolute -top-3 -right-3 text-amber-600/70 text-xl">
                      ⌖
                    </div>
                    <div className="absolute -bottom-3 -left-3 text-amber-600/70 text-xl">
                      ⌖
                    </div>
                    <div className="absolute -bottom-3 -right-3 text-amber-600/70 text-xl">
                      ⌖
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-amber-100 mt-4 font-[Cinzel] tracking-wide text-center">
                    {member.name}
                  </h3>
                  <p className="text-amber-200 italic mt-2 font-serif">
                    {member.role}
                  </p>
                  <div className="absolute bottom-4 w-12 h-12 rounded-full border border-amber-700/60 flex items-center justify-center text-amber-500/90 text-2xl">
                    {index % 2 === 0 ? "✧" : "✦"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

// const Page = () => {
//   const teamMembers = [
//     { name: "Alex Smith", role: "General Secretary", image: "gs-image.jpg" },
//     { name: "Jamie Lee", role: "Joint Secretary", image: "js1-image.jpg" },
//     { name: "Taylor Chen", role: "Joint Secretary", image: "js2-image.jpg" },
//     { name: "Morgan Ray", role: "Joint Secretary", image: "js3-image.jpg" },
//     { name: "Casey Kim", role: "Joint Secretary", image: "js4-image.jpg" },
//     { name: "Jordan Patel", role: "Joint Secretary", image: "js5-image.jpg" },
//     { name: "Sam Wilson", role: "Treasurer", image: "t1-image.jpg" },
//     { name: "Robin Garcia", role: "Treasurer", image: "t2-image.jpg" },
//     { name: "Chris Nguyen", role: "Treasurer", image: "t3-image.jpg" },
//     { name: "Peyton Brooks", role: "Treasurer", image: "t4-image.jpg" },
//   ];

//   const gsMember = teamMembers.filter(
//     (member) => member.role === "General Secretary"
//   )[0];
//   const otherMembers = teamMembers.filter(
//     (member) => member.role !== "General Secretary"
//   );

//   return (
//     <div className="min-h-screen bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b7b1b1b-1b1b-4b1b-9b1b-1b1b1b1b1b1b/df1b1b1-1b1b1b1b-1b1b-4b1b-9b1b-1b1b1b1b1b1b.jpg')] bg-cover bg-center py-10 px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden relative">
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-indigo-900/50 to-transparent pointer-events-none animate-glow" />
//       <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_#ff99cc_0%,_transparent_70%)]" />
//       {/* Floating Lights Effect */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute w-4 h-4 bg-pink-400 rounded-full top-20 left-10 animate-float opacity-60 shadow-[0_0_10px_rgba(255,153,204,0.8)]" />
//         <div className="absolute w-3 h-3 bg-purple-400 rounded-full top-40 right-20 animate-float-delay opacity-60 shadow-[0_0_8px_rgba(147,51,234,0.8)]" />
//         <div className="absolute w-5 h-5 bg-blue-400 rounded-full bottom-30 left-30 animate-float opacity-50 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
//       </div>

//       <h1 className="text-5xl font-bold text-center text-pink-100 mb-16 animate-glow-in font-[Cinzel] drop-shadow-[0_2px_6px_rgba(255,153,204,0.8)] z-10 relative">
//         Sacred Legacy Council
//       </h1>

//       {/* GS Row */}
//       <div className="max-w-7xl mx-auto mb-16 relative z-10">
//         <div
//           className="group h-[420px] animate-float-in mx-auto w-full sm:w-80 lg:w-80"
//           style={{ animationDelay: "0s" }}
//         >
//           <div className="relative h-full w-full transition-all duration-600 transform group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(255,153,204,0.7)]">
//             {/* GS Card - Ornate Framed Tome */}
//             <div className="relative h-full bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b7b1b1b-1b1b-4b1b-9b1b-1b1b1b1b1b1b/df1b1b2-1b1b1b1b-1b1b-4b1b-9b1b-1b1b1b1b1b1b.jpg')] bg-cover bg-center rounded-3xl shadow-[0_0_30px_rgba(255,153,204,0.5)] overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-indigo-900/50 opacity-70" />
//               <div className="relative h-full flex flex-col items-center p-8">
//                 <div className="relative w-44 h-44 mt-6">
//                   <div className="absolute inset-0 rounded-full border-4 border-amber-500/70 bg-gradient-to-br from-amber-400/40 to-purple-600/40 shadow-[0_0_20px_rgba(255,215,0,0.9)] animate-glow" />
//                   <img
//                     src={gsMember.image}
//                     alt={gsMember.name}
//                     className="w-full h-full rounded-full object-cover border-2 border-amber-300/70"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold text-amber-100 mt-6 font-[Cinzel] tracking-wide drop-shadow-[0_1px_3px_rgba(255,215,0,0.6)]">
//                   {gsMember.name}
//                 </h3>
//                 <p className="text-amber-200 italic text-lg mt-2 font-serif">
//                   {gsMember.role}
//                 </p>
//                 <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <a
//                     href="#"
//                     className="text-amber-300 hover:text-amber-100 transition-colors duration-300 font-serif"
//                   >
//                     LinkedIn
//                   </a>
//                   <a
//                     href="#"
//                     className="text-amber-300 hover:text-amber-100 transition-colors duration-300 font-serif"
//                   >
//                     Twitter
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Other Members Row */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
//         {otherMembers.map((member, index) => (
//           <div
//             key={index}
//             className="group h-[360px] animate-float-in"
//             style={{ animationDelay: `${(index + 1) * 0.1}s` }}
//           >
//             <div className="relative h-full w-full transition-all duration-600 transform group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]">
//               {/* Card - Ornate Framed Relic */}
//               <div className="relative h-full bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b7b1b1b-1b1b-4b1b-9b1b-1b1b1b1b1b1b/df1b1b2-1b1b1b1b-1b1b-4b1b-9b1b-1b1b1b1b1b1b.jpg')] bg-cover bg-center rounded-2xl shadow-[0_0_20px_rgba(147,51,234,0.4)] overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 to-purple-900/60 opacity-70" />
//                 <div className="relative h-full flex flex-col items-center p-6">
//                   <div className="relative w-36 h-36 mt-6">
//                     <div className="absolute inset-0 rounded-full border-2 border-amber-400/70 bg-gradient-to-br from-amber-400/30 to-indigo-600/30 shadow-[0_0_15px_rgba(255,215,0,0.8)] animate-glow" />
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full rounded-full object-cover border-2 border-amber-300/70"
//                     />
//                   </div>
//                   <h3 className="text-xl font-semibold text-amber-100 mt-6 font-[Cinzel] tracking-wide drop-shadow-[0_1px_2px_rgba(255,215,0,0.5)]">
//                     {member.name}
//                   </h3>
//                   <p className="text-amber-200 italic mt-2 font-serif">
//                     {member.role}
//                   </p>
//                   <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <a
//                       href="#"
//                       className="text-amber-300 hover:text-amber-100 transition-colors duration-300 font-serif"
//                     >
//                       LinkedIn
//                     </a>
//                     <a
//                       href="#"
//                       className="text-amber-300 hover:text-amber-100 transition-colors duration-300 font-serif"
//                     >
//                       Twitter
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Page;
