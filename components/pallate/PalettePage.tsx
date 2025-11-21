"use client";

import CardPreview from "@/components/ui/CardPreview";
import Link from "next/link";
import { useState } from "react";

interface PalettePageProps {
  paletteImages: string[];
  nextTone: string;
  description?: string;
  tone?: string;
  judulTone?: string;
}

const getColorFromFilename = (path: string) => {
  const name = path.split("face-bg-")[1].replace(".png", "");
  return `#${name}`;
};

const PalettePage = ({
  paletteImages,
  nextTone,
  description,
  tone,
  judulTone,
}: PalettePageProps) => {
  const [capturedImg] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("captured-image");
    }
    return null;
  });

  const [selectedPalette, setSelectedPalette] = useState<string>(
    paletteImages?.[0] ?? ""
  );

  return (
    <div
      className="flex flex-col-reverse lg:flex-row justify-center items-center px-4 gap-10 lg:gap-14 
    "
    >
      <div
        className="md:hidden w-full 
      "
      >
        <div className="backdrop-blur-3xl p-4 rounded-2xl shadow-lg w-full  flex flex-col items-center">
          <div className="w-56 h-72 overflow-hidden flex items-center justify-center  mt-2">
            <CardPreview
              capturedImg={capturedImg}
              selectedPalette={selectedPalette}
            />
          </div>

          <div className="w-full  bg-[#C36262] text-white text-center text-xs py-2 mt-4 rounded-md font-semibold">
            {description}
          </div>

          <div className="flex gap-2 mt-6">
            {paletteImages.map((img, idx) => {
              const color = getColorFromFilename(img);
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedPalette(img)}
                  className="rounded-full border-[3px] transition-all w-12 h-12"
                  style={{
                    backgroundColor: color,
                    borderColor: selectedPalette === img ? "#7C2C2C" : "white",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* tampilan dekstop */}
      <div
        className="hidden md:flex bg-component p-8 rounded-xl shadow-md w-full max-w-md flex-col items-center
      "
      >
        <div className="w-full text-white text-center font-bold text-lg bg-[#7C2C2C] py-3 rounded-lg">
          {tone}
        </div>

        <div className="flex gap-5 mt-6 place-items-center">
          {paletteImages.map((img, idx) => {
            const color = getColorFromFilename(img);
            return (
              <button
                key={idx}
                onClick={() => setSelectedPalette(img)}
                className="rounded-full border-4 transition-all cursor-pointer w-16 h-16"
                style={{
                  backgroundColor: color,
                  borderColor:
                    selectedPalette === img ? "#7C2C2C" : "transparent",
                }}
              />
            );
          })}
        </div>

        <Link href={nextTone} className="w-full mt-4 ">
          <button className="mt-8 cursor-pointer w-full bg-[#7C2C2C] text-white py-3 rounded-full font-bold shadow-md hover:opacity-90 transition">
            Next
          </button>
        </Link>
      </div>

      {/* card preview dekstop */}
      <div className="hidden md:flex w-[350px] xl:w-full justify-center">
        <CardPreview
          capturedImg={capturedImg}
          selectedPalette={selectedPalette}
        />
      </div>

      <div className="mt-10">
        <h1 className="text-[#7D4754]  font-bold">{judulTone}</h1>
        <p className="text-[#7D4754] font-semibold hidden md:block">{description}</p>
      </div>
    </div>
  );
};

export default PalettePage;
