import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

interface CarouselProps {
  images: { src: string }[];
  layout?: string;
}

const CarouselLips = ({ images, layout }: CarouselProps) => {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem
            key={index}
            className={`sm:basis-1/2 lg:basis-1/${layout}`}
          >
            <div className="flex justify-center">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={item.src}
                  alt=""
                  width={300}
                  height={300}
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
