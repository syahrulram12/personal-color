"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import OutlineFace from "@/public/face-outline.png";

interface PreviewProps {
  image: string;
  onRetake: () => void;
  nextHref?: string;
}

const PreviewComponent = ({ image, onRetake, nextHref }: PreviewProps) => {
  return (
    <div className="relative w-[420px] md:w-[520px] aspect-3/4 rounded-xl overflow-hidden shadow-xl">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Preview"
          fill
          className="object-cover scale-x-[-1]"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src={OutlineFace}
          alt="outline"
          width={900}
          height={900}
          className="scale-75"
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
        <Button
          variant="default"
          onClick={onRetake}
          className="
            px-6 py-3 bg-white text-[#7D4754]
            rounded-full border border-white/40
            hover:bg-white/30 transition berl-btn
          "
        >
          Retake
        </Button>

        {nextHref && (
          <Link href={nextHref}>
            <Button
              className="
                px-6 py-3 bg-white text-[#7D4754]
                rounded-full border border-white/40
                hover:bg-white/90 transition berl-btn
              "
            >
              Next
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PreviewComponent;
