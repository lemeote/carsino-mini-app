import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  images: StaticImageData[]
}

const Carousel: React.FC<Props> = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const length = images.length;

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, length]);

  return (
    <div
      className="mx-auto mt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full flex items-center justify-center">
        {images.map((image, index) => (
          <div key={index} className={`absolute w-[calc(100vw-48px)] transition-opacity duration-1000 ${slideIndex === index ? 'opacity-100' : 'opacity-0'}`}>
            <img src={image.src} alt='' className='object-cover w-full h-full' />
          </div>
        ))}
      </div>
      <div className="mt-24 text-center">
        {images.map((_, index) => (
          <span key={index} className={`dot ${slideIndex === index ? 'bg-gray-700' : 'bg-gray-400'} mx-1 rounded-full inline-block h-2 w-2`}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;