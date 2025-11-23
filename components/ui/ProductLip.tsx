"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface LipImage {
  src: StaticImageData;
}

const ProductLip = ({ LipImages }: { LipImages: LipImage[] }) => {
  const ITEMS_PER_SLIDE = 3;
  const totalSlides = Math.ceil(LipImages.length / ITEMS_PER_SLIDE);

  const [slideIndex, setSlideIndex] = useState(0);

  const prev = () => {
    setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const next = () => {
    setSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const start = slideIndex * ITEMS_PER_SLIDE;
  const currentItems = LipImages.slice(start, start + ITEMS_PER_SLIDE);

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-lg w-full max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-center text-[#7D4754] font-bold text-xl mb-6">
        B ERL Lip Matte
      </h1>

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition"
      >
        <ChevronLeft className="text-rose-400" />
      </button>

      {/* SLIDE CONTENT */}
      <div className="flex gap-4 justify-center">
        {currentItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E6CFD4] rounded-xl p-2 w-32 shadow-sm text-center"
          >
            <div className="relative">
              <div className="relative w-full h-24 rounded-lg overflow-hidden">
                <Image
                  src={item.src}
                  alt="produk lip"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition"
      >
        <ChevronRight className="text-rose-400" />
      </button>
    </div>
  );
};

export default ProductLip;
