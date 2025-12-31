"use client";

import { SparklesText } from "@/components/ui/sparkles-text";

interface ResultUndertone {
  undertone: string;
}

const HeaderRight = ({ undertone }: ResultUndertone) => {
  return (
    <div className="w-auto">
      <div className="bg-card-component md:min-h-[100px] shadow-lg flex flex-col items-center justify-center p-4 rounded-4xl px-2">
        <div className="w-full md:w-auto">
          <SparklesText className="text-berl font-bold font-tangerine text-5xl md:text-6xl tracking-wide text-center">
            {undertone}
          </SparklesText>
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
