import React, { LegacyRef, RefObject, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageListItem from "./imageListItem";
import {
  FEATURED_VIDEO_DUMMY,
  FEATURED_VIDEO_DUMMY_lATEST,
} from "../../../data";

import NextIcon from "../../../assets/icons/nextIcon";
import PrevIcon from "../../../assets/icons/prev";

enum ArrowTypes {
  next = "Next Icon",
  prev = "Prev Icon",
}

enum DataTypes {
  recommended = "Recommended",
  latest = "Latest",
}

const ImageList = () => {
  const sliderRef = useRef<any>();
  const [isShowArrows, setIsShowArrows] = useState<ArrowTypes>(ArrowTypes.next);
  const [choseData, setChoseData] = useState<DataTypes>(DataTypes.recommended);

  

  const chosenData =
    choseData === DataTypes.recommended
      ? FEATURED_VIDEO_DUMMY
      : FEATURED_VIDEO_DUMMY_lATEST;

  

  const calculatedPrevIconIndex =
    chosenData.length % 2 === 1 ? chosenData.length - 1 : chosenData.length - 2;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    afterChange: (i: any) => {
      console.log(i);
      if (i === 0) {
        setIsShowArrows(ArrowTypes.next);
      } else if (i === calculatedPrevIconIndex) {
        setIsShowArrows(ArrowTypes.prev);
      }
    },
  };
  return (
    <div className="sm:p-4 sm:bg-[#363636] relative">
      <div className="hidden px-4 pb-7 sm:flex gap-5 text-white text-[16px] leading-4 font-bold">
        <button
          className="focus:underline underline-offset-[12px] decoration-2"
          onClick={() => setChoseData(DataTypes.recommended)}
        >
          <h3>Recommended</h3>
        </button>
        <button
          className="focus:underline underline-offset-[12px] decoration-2"
          onClick={() => setChoseData(DataTypes.latest)}
        >
          <h3>Latest</h3>
        </button>
      </div>
      <div className="h-[1px] bg-[#ffffff7c] absolute top-[44px] left-0 right-0"></div>
      <ul className="flex flex-col gap-2 relative">
        <Slider {...settings} className="hidden sm:block" ref={sliderRef}>
          {chosenData.map((item) => (
            <ImageListItem
              title={item.title}
              topic={item.topic}
              bLColor="border-l-bbcBlue"
              src={item.src}
              key={item.title}
            />
          ))}
        </Slider>
        <div className="block sm:hidden">
          {FEATURED_VIDEO_DUMMY.map((item, index) => (
            <ImageListItem
              title={item.title}
              topic={item.topic}
              bLColor="border-l-bbcBlue"
              src={item.src}
              key={item.title}
            />
          ))}
        </div>

        {isShowArrows === ArrowTypes.prev ? (
          <button
            className="hidden w-10 h-[90px] bg-black sm:flex justify-center items-center absolute left-0 top-1/2 -translate-y-1/2"
            onClick={() => sliderRef?.current?.slickPrev()}
          >
            <PrevIcon className="w-6 h-6" />
          </button>
        ) : (
          <button
            className="hidden w-10 h-[90px] bg-black sm:flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2"
            onClick={() => sliderRef?.current?.slickNext()}
          >
            <NextIcon className="w-6 h-6" />
          </button>
        )}
      </ul>
    </div>
  );
};

export default ImageList;
