"use client";

import Heading from "@/components/ui/Heading";
import { SparklesText } from "@/components/ui/sparkles-text";
import { useMemo } from "react";

const HeaderLeft = () => {
  const userName = useMemo(() => {
    if (typeof document === "undefined") return "";

    try {
      const raw = document.cookie
        .split("; ")
        .find((row) => row.startsWith("contact-data="));

      if (!raw) return "";

      const value = decodeURIComponent(raw.split("=")[1]);
      const parsed = JSON.parse(value);

      return parsed.name ?? "";
    } catch {
      return "";
    }
  }, []);

  return (
    <div className="w-full">
      <div className="bg-card-component md:min-h-[100px] shadow-lg flex flex-col p-8 rounded-4xl items-center">
        <h1 className="text-BERL text-xl font-baloo font-semibold mb-2">
          Hi {userName} !
        </h1>
        <div className="flex justify-between gap-4 w-full md:w-auto">
          <SparklesText className="text-berl font-bold font-tangerine text-4xl sm:text-5xl md:text-6xl tracking-wide">
            This is your personal color
          </SparklesText>
          {/* <Heading size="lg" /> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
