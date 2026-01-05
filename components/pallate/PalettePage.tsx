"use client";

import CardPreview from "@/components/ui/CardPreview";
import { saveSkinTone, setUnderToneByPage } from "@/lib/utils/cookies";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

interface PalettePageProps {
  paletteImages: string[];
  nextTone: string;
  description?: string;
  tone?: string;
  judulTone?: string;
  urlBack: string;
  pageIndex: number;
  mode: "undertone" | "skintone";
  onNext?: (color: string) => void;
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
  mode,
  urlBack,
  pageIndex,
  onNext,
}: PalettePageProps) => {
  const [capturedImg, setCapturedImg] = useState<string | null>(null);

  useEffect(() => {
    const captured = localStorage.getItem("captured-image");
    setCapturedImg(captured);
  }, []);

  const [selectedPalette, setSelectedPalette] = useState<string>(
    paletteImages?.[0] ?? ""
  );

  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [isButtonNextLoading, setIsButtonNextLoading] = useState(false);
  const [isButtonBackLoading, setIsButtonBackLoading] = useState(false);

  const paletteColors = useMemo(
    () =>
      paletteImages.map((img) => ({
        img,
        color: getColorFromFilename(img),
      })),
    [paletteImages]
  );

  const handleSelect = useCallback(
    (img: string) => {
      // setIsLoadingPreview(true);
      setSelectedPalette(img);
      const color = getColorFromFilename(img);
      onNext?.(color);
    },
    [onNext]
  );

  useEffect(() => {
    if (paletteImages.length > 0) {
      const defaultColor = getColorFromFilename(paletteImages[0]);
      onNext?.(defaultColor);
    }
  }, [paletteImages, onNext]);

  const persistColor = useCallback(() => {
    const color = getColorFromFilename(selectedPalette);
    if (mode === "skintone") {
      saveSkinTone(color);
    } else {
      setUnderToneByPage(color, pageIndex);
    }
    onNext?.(color);
  }, [selectedPalette, mode, pageIndex, onNext]);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col-reverse justify-center items-center px-5 py-5 md:px-0 md:py-5 w-full min-h-[80vh]  md:min-h-[75vh] gap-10 lg:gap-7 bg-card-component md:shadow-lg rounded-r-full rounded-l-full">
        {/* tampilan mobile */}
        <div className="md:hidden w-full h-full">
          <div className="flex flex-col items-center">
            <CardPreview
              isLoading={isLoadingPreview}
              onLoaded={() => setIsLoadingPreview(false)}
              capturedImg={capturedImg}
              selectedPalette={selectedPalette}
            />

            <div className="w-full  bg-[#C36262] text-white text-center text-xs py-2 mt-4 rounded-md font-semibold">
              {description}
            </div>

            <div className="flex gap-2 mt-6">
              {paletteColors.map(({ img, color }, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(img)}
                  className="rounded-full border-[3px] transition-all min-w-12 min-h-12"
                  style={{
                    backgroundColor: color,
                    borderColor: selectedPalette === img ? "#7C2C2C" : "white",
                  }}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <Link href={urlBack} className="mt-4">
                <button
                  onClick={() => setIsButtonBackLoading(true)}
                  className="mt-8 cursor-pointer w-[100px] bg-[#7C2C2C] text-white py-3 rounded-full font-bold shadow-md hover:opacity-90 transition flex items-center justify-center gap-2"
                  disabled={isButtonBackLoading}
                >
                  {isButtonBackLoading ? (
                    <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Back"
                  )}
                </button>
              </Link>

              <Link href={nextTone} className="mt-4">
                <button
                  onClick={() => {
                    setIsButtonNextLoading(true);
                    persistColor();
                  }}
                  className="mt-8 cursor-pointer w-[100px] bg-[#7C2C2C] text-white py-3 rounded-full font-bold shadow-md hover:opacity-90 transition flex items-center justify-center gap-2"
                  disabled={isButtonNextLoading}
                >
                  {isButtonNextLoading ? (
                    <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Next"
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* tampilan dekstop */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="flex flex-col items-center w-1/2">
            <div className="flex gap-5 mt-6 place-items-center">
              {paletteColors.map(({ img, color }, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(img)}
                  className="rounded-full border-4 transition-all cursor-pointer w-12 h-12"
                  style={{
                    backgroundColor: color,
                    borderColor:
                      selectedPalette === img ? "#7C2C2C" : "transparent",
                  }}
                />
              ))}
            </div>

            <div className="py-2">
              {mode === "undertone" && (
                <>
                  <h1 className="text-[#7D4754]  font-bold">{judulTone}</h1>
                </>
              )}
              <p className="text-[#7D4754] font-semibold hidden md:block">
                {description}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Link href={urlBack} className="mt-4">
              <button
                onClick={() => setIsButtonBackLoading(true)}
                className="mt-8 cursor-pointer w-[100px] bg-[#7C2C2C] text-white py-3 rounded-full font-bold shadow-md hover:opacity-90 transition flex items-center justify-center gap-2"
                disabled={isButtonBackLoading}
              >
                {isButtonBackLoading ? (
                  <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Back"
                )}
              </button>
            </Link>

            <Link href={nextTone} className="mt-4">
              <button
                onClick={() => {
                  setIsButtonNextLoading(true);
                  persistColor();
                }}
                className="mt-8 cursor-pointer w-[100px] bg-[#7C2C2C] text-white py-3 rounded-full font-bold shadow-md hover:opacity-90 transition flex items-center justify-center gap-2"
                disabled={isButtonNextLoading}
              >
                {isButtonNextLoading ? (
                  <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Next"
                )}
              </button>
            </Link>
          </div>
        </div>

        {/* card preview dekstop */}
        <div className="hidden md:flex min-h-[40vh] w-[250px] xl:w-full justify-center">
          <CardPreview
            isLoading={isLoadingPreview}
            onLoaded={() => setIsLoadingPreview(false)}
            capturedImg={capturedImg}
            selectedPalette={selectedPalette}
          />
        </div>

        <h1 className="text-[#7D4754] text-3xl font-baloo font-bold">{tone}</h1>
      </div>
    </div>
  );
};

export default PalettePage;
