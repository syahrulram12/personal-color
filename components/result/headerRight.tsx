"use client";

import { SparklesText } from "@/components/ui/sparkles-text";

interface ResultUndertone {
  personalColor: string;
  description: string;
}

const HeaderRight = ({ personalColor, description }: ResultUndertone) => {
  return (
    <div className="w-auto">
      <div className="bg-card-component md:min-h-[100px] shadow-lg flex flex-col items-center justify-center p-4 rounded-3xl px-2">
        <div className="w-full md:w-auto">
          <SparklesText className="text-berl font-bold font-tangerine text-4xl sm:text-5xl md:text-6xl tracking-wide text-center">
            {personalColor}
          </SparklesText>
          <p className="px-3 py-5 text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
