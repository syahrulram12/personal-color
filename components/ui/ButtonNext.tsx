"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { appendUnderTone, saveSkinTone } from "@/lib/cookies";

type ButtonNextProps = {
  href?: string;
  label?: string;
  color?: string; // ← penting
  mode?: "undertone" | "skintone"; // ← penting
  onClick?: () => void;
};

const ButtonNext = ({
  href = "/",
  label = "NEXT",
  color,
  mode = "undertone",
  onClick,
}: ButtonNextProps) => {
  const handleClick = () => {
    if (color) {
      // sama seperti desktop
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      mode === "skintone" ? saveSkinTone(color) : appendUnderTone(color);
    }

    if (onClick) onClick();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="fixed top-10 right-10 flex items-center gap-3"
    >
      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
        <ArrowRight size={20} />
      </div>
      <span>{label}</span>
    </Link>
  );
};

export default ButtonNext;
