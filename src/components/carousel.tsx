import Image from "next/image";
import React from "react";

interface CarouselProps {
  title: string;
}

const Carousel = async ({ title }: CarouselProps) => {
  const result = await fetch("https://cdn-dev.preoday.com/challenge/venue/9");
  const data = await result.json();

  const isSelected = true;

  return (
    <div className="w-[600px] shadow-custom flex items-center justify-start h-full py-5 px-4">
      <div
        className={`cursor-pointer flex flex-col items-center p-3 gap-5 border-b-2 ${
          isSelected ? "border-black border-opacity-100" : "border-transparent"
        } hover:border-black hover:border-opacity-100`}
      >
        <Image
          src={data.webSettings.bannerImage}
          alt="img"
          width={74}
          height={74}
          className="border-2 border-white object-cover rounded-full w-[74px] h-[74px]"
          unoptimized
        />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Carousel;
