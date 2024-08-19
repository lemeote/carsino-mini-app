"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  images: StaticImageData[];
}

const Carousel: React.FC<Props> = ({ images }) => {
  const router = useRouter();
  const [slideIndex, setSlideIndex] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % length);
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  const goToPage = (index: number) => {
    switch (index) {
      case 0:
        router.push("/task")
      case 1:
        router.push("/task/daily-bonus")
      case 2:
        router.push("/task")
    }
  }

  return (
    <>
      <div className="relative w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-[calc(100vw-48px)] h-[50vw] transition-opacity duration-1000 cursor-pointer ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => goToPage(index)}
          >
            <Image src={image} alt="" fill />
          </div>
        ))}
      </div>
      <div className="mt-[55vw] text-center">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              slideIndex === index ? "bg-gray-700" : "bg-gray-400"
            } mx-1 rounded-full inline-block h-2 w-2`}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Carousel;
