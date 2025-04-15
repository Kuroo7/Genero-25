// components/SplineViewer.jsx
"use client";
import Script from "next/script";

export default function SplineViewer() {
  return (
    <>
      {/* Load the Spline viewer script */}
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.81/build/spline-viewer.js"
        strategy="beforeInteractive" // ensures script loads early
      />
      {/* Add the Spline viewer element */}
      <spline-viewer
        url="https://prod.spline.design/gLeEKfUeKOvlkARH/scene.splinecode"
         className="w-full h-screen"
      />
    </>
  );
}
