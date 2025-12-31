"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getFromCookies } from "@/lib/utils/cookies";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cushion = ({ CushionImage }: { CushionImage: any[] }) => {
  const [index, setIndex] = useState(0);

  // const prev = () => {
  //   setIndex((prev) => (prev === 0 ? CushionImage.length - 1 : prev - 1));
  // };

  // const next = () => {
  //   setIndex((prev) => (prev === CushionImage.length - 1 ? 0 : prev + 1));
  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getColor: any = getFromCookies("selectedColorSkinTone");
  // console.log(getColor);

  const current = CushionImage[index];

  return (
    <div className="flex flex-col items-center">
      <div className="berl-btn p-4 w-[60vw] md:w-full text-center">
        <h1 className="text-white font-baloo">Complexion</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-2 items-center mt-5">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center">
          {/* <button
            onClick={prev}
            className="bg-white cursor-pointer shadow-md w-10 h-10 rounded-full flex items-center justify-center mx-4 hover:scale-105 transition"
          >
            <ChevronLeft className="text-rose-300" />
          </button> */}

          {CushionImage.map((item, idx) => (
            <div className="" key={idx}>
              <Image
                src={CushionImage[idx].image}
                alt={CushionImage[idx].product}
                width={200}
                height={200}
                className="md:w-[300px] md:min-h-[300px] object-cover "
              />
            </div>
          ))}

          {/* <button
            onClick={next}
            className="bg-white cursor-pointer shadow-md w-10 h-10 rounded-full flex items-center justify-center mx-4 hover:scale-105 transition"
          >
            <ChevronRight className="text-rose-300" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Cushion;
