"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../widgets/buttons/Button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import LargeWorkCard from "../widgets/LargeWorkCard";

const WorkCard = [
  { id: 1, projectImage: "/img_pone.webp", title: "Project One", description: "Description for project one." },
  { id: 2, projectImage: "/img_ptwo.webp", title: "Project Two", description: "Description for project two." },
  { id: 3, projectImage: "/img_pthree.webp", title: "Project Three", description: "Description for project three." },
  { id: 4, projectImage: "/img_pone.webp", title: "Project Four", description: "Description for project four." },
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

        let cardW;
        if (window.innerWidth < 640) {
          cardW = containerWidth * 0.9; // mobile = 1 card
        } else if (window.innerWidth < 1024) {
          cardW = containerWidth * 0.6; // tablet = 1–2 cards
        } else {
          cardW = containerWidth * 0.4 + 40; // desktop
        }

        setCardWidth(cardW);
        setVisibleCards(Math.floor(containerWidth / cardW));
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const maxIndex = Math.max(WorkCard.length - visibleCards, 0);

  return (
    <div className="relative min-h-screen w-full py-16 sm:py-20 bg-[#A6A09B] overflow-x-hidden">
      
      {/* Header Section */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20">
        <span className="text-xs sm:text-sm text-white capitalize font-ms">
          Since - 2004
        </span>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mt-4">

          {/* Left Heading */}
          <div className="text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-[60px] font-zlbold uppercase">
            <span className="text-red-primary">Highlights</span> of <br />
            my works and experiences
          </div>

          {/* Right Description */}
          <div className="w-full lg:w-[40%]">
            <p className="text-black text-sm leading-5 font-ms">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur pariatur voluptatem, architecto maiores debitis
              deserunt sequi dolorem dolor quo amet soluta quis atque ipsam
              veritatis natus aperiam, magni odit eaque.
            </p>

            <Button
              icon={<ArrowUpRight size={20} />}
              iconPosition="right"
              className="rounded-full py-3 mt-5 px-5 bg-black transition-all duration-300 hover:text-black hover:bg-white text-white text-sm"
            >
              check out all projects
            </Button>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div ref={containerRef} className="overflow-hidden w-full mt-10">
        <div
          className="px-4 sm:px-6 lg:px-10 flex gap-6 sm:gap-8 lg:gap-10 transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
          }}
        >
          {WorkCard.map((card) => (
            <LargeWorkCard poster={card.projectImage} key={card.id} />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex space-x-4 w-full justify-center items-center mt-8">
          <button
            onClick={slideLeft}
            disabled={currentIndex === 0}
            className="p-3 sm:p-4 bg-black rounded-full disabled:opacity-40"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={slideRight}
            disabled={currentIndex === maxIndex}
            className="p-3 sm:p-4 bg-black rounded-full disabled:opacity-40"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
