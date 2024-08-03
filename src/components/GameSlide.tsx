import * as React from "react"
import Image, { StaticImageData } from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Props {
  images: StaticImageData[]
  prevRef?: React.ForwardedRef<HTMLButtonElement>
  nextRef?: React.LegacyRef<HTMLButtonElement>
}

const GameSlide: React.FC<Props> = ({ images, prevRef, nextRef }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem key={index} className="basis-1/2 sm:basis-1/3">
            <div className="p-1">
              <Image src={item} alt="" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious ref={prevRef} className="hidden" />
      <CarouselNext ref={nextRef} className="hidden" />
    </Carousel>
  )
}

export default GameSlide;