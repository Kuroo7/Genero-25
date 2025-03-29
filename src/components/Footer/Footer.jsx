import React from "react";
import Content from "./Content";

export default function Footer() {
  return (
    <div
      className="relative lg:h-[400px] h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative lg:h-[calc(100vh+400px)] h-[calc(100vh+600px)] -top-[100vh]">
        <div className="lg:h-[400px] h-[600px] sticky lg:top-[calc(100vh-400px)] top-[calc(100vh-600px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}
