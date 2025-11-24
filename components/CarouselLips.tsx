import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const CarouselLips = ({ images }: { images: { src: string }[] }) => {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/2 lg:basis-1/3"
          >
            <div className="p-3 flex justify-center">
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
