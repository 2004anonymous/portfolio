"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../widgets/buttons/Button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import LargeWorkCard from "../widgets/LargeWorkCard";

const WorkCard = [
  {
    id: 1,
    title: "Project One",
    description: "Description for project one.",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for project two.",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description for project three.",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description for project four.",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const slideLeft = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const slideRight = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  useEffect(() => {
    const resize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardW = containerWidth * 0.4 + 20; // 40% + gap
        setCardWidth(cardW);
        setVisibleCards(Math.floor(containerWidth / cardW)); // Assuming each card is at least 300px wide
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const maxIndex = Math.max(WorkCard.length - visibleCards, 0);

  return (
    <div className=" relative min-h-screen w-full py-20 bg-[#A6A09B] overflow-x-hidden">
      <div className=" px-20">
        <div>
          <span className=" text-sm text-white capitalize font-ms">
            Since - 2004
          </span>
          <div className=" flex items-start justify-between">
            <div className=" mt-5 text-4xl text-black md:text-5xl lg:text-5xl leading-[60px] font-zlbold uppercase">
              <span className=" text-[#F54927]">Highlights</span> of <br /> my
              works and experiences
            </div>
            <div className=" w-[40%] ms-10">
              <p className=" text-black text-sm leading-5 font-ms">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur pariatur voluptatem, architecto maiores debitis
                deserunt sequi dolorem dolor quo amet soluta quis atque ipsam
                veritatis natus aperiam, magni odit eaque.
              </p>
              <Button
                icon={<ArrowUpRight size={24} />}
                iconPosition="right"
                className=" rounded-full py-3.5 mt-5 px-6 bg-black transition-all duration-300 hover:text-black hover:bg-white text-white text-sm"
              >
                check out all projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden w-full">
        <div
          className=" pt-10 flex space-x-10 transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
          }}
        >
          <LargeWorkCard />
          <LargeWorkCard />
          <LargeWorkCard />
          <LargeWorkCard />
        </div>
        {/* Arrows */}
        <div className="flex space-x-4 w-full justify-center items-center mt-5">
          <button
            onClick={slideLeft}
            disabled={currentIndex === 0}
            className="p-4 bg-black rounded-full disabled:opacity-40"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={slideRight}
            disabled={currentIndex === maxIndex}
            className="p-4 bg-black rounded-full disabled:opacity-40"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
