"use client";

import { SparklesText } from "@/components/ui/sparkles-text";

interface ResultUndertone {
  undertone: string;
}

const HeaderRight = ({ undertone }: ResultUndertone) => {
  return (
    <div className="md:min-w-[30vw]">
      <div className="bg-card-component md:min-h-[100px] shadow-lg flex flex-col items-center justify-center p-8 rounded-4xl">
        <div className="w-full md:w-auto">
          <SparklesText className="text-berl font-bold font-tangerine text-5xl md:text-7xl tracking-wide">
            {undertone}
          </SparklesText>
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
