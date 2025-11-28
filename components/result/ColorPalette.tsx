"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ColorPalette = ({ colors = [] }: { colors?: any[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };

  // Prevent error: colors.map is not a function / undefined
  if (!Array.isArray(colors)) return null;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="berl-btn p-3">
        <h1 className="">Color Palette</h1>
      </div>

      <div className="relative w-[90vw] md:w-[20vw]">
        <div className="bg-berl-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center px-18 py-4 relative">
          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {colors.map((hex, i) => (
              <div key={i} className="shrink-0">
                <div
                  className="w-10 h-10 rounded-full shadow-sm hover:scale-110 transition-transform"
                  style={{ backgroundColor: hex }}
                />
              </div>
            ))}
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={() => scroll("left")}
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition mx-4"
          >
            <ChevronLeft className="text-rose-300" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => scroll("right")}
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition mx-4"
          >
            <ChevronRight className="text-rose-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
