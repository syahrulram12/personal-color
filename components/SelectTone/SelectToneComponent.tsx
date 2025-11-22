"use client";

import { useState } from "react";
import PalettePage from "@/components/pallate/PalettePage";
import ButtonBack from "@/components/ui/ButtonBack";
import ButtonNext from "@/components/ui/ButtonNext";

interface UndertoneProps {
  paletteImages: string[];
  urlBack: string;
  urlNext: string;
  description: string;
  tone: string;
  judulTone: string;
  mode: "undertone" | "skintone";
}

const SelectTone = ({
  paletteImages,
  urlBack,
  urlNext,
  tone,
  judulTone,
  description,
  mode,
}: UndertoneProps) => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  return (
    <div className="bg-main min-h-screen flex justify-center items-center pt-16 pb-10 px-4">
      <ButtonBack href={urlBack} label="BACK" />
      <ButtonNext
        href={urlNext}
        label="NEXT"
        color={selectedColor}
        mode={mode}
      />

      <div className="w-[80vw]">
        <PalettePage
          paletteImages={paletteImages}
          nextTone={urlNext}
          tone={tone}
          description={description}
          judulTone={judulTone}
          mode={mode}
          onNext={(color) => setSelectedColor(color)}
        />
      </div>
    </div>
  );
};

export default SelectTone;
