import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

import LipMatte1 from "@/public/produk/LM/01 Nude Brown.png";
import LipMatte2 from "@/public/produk/LM/02 Nude Pink.png";
import LipMatte3 from "@/public/produk/LM/03 Soft Pink.png";
import LipMatte4 from "@/public/produk/LM/04 Red Chill.png";
import LipMatte5 from "@/public/produk/LM/05 Nude Purple.png";
import LipMatte6 from "@/public/produk/LM/06 Mochacinno.png";

const LipImages = [
  { src: LipMatte1 },
  { src: LipMatte2 },
  { src: LipMatte3 },
  { src: LipMatte4 },
  { src: LipMatte5 },
  { src: LipMatte6 },
];

const CarouselLips = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {LipImages.map((item, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
            <div className="p-3 flex justify-center">
              <div className="w-full   flex justify-center items-center">
                <Image
                  src={item.src}
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselLips;
