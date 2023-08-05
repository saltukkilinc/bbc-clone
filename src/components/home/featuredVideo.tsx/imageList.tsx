import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageListItem from "./imageListItem";
import { FEATURED_VIDEO_DUMMY } from "../../../data";

import NextIcon from "../../../assets/icons/nextIcon";
import PrevIcon from "../../../assets/icons/prev";

const ImageList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:false,
  };
  return (
    <div className="sm:p-4 sm:bg-[#363636] relative">
      <div className="hidden px-4 pb-7 sm:flex gap-5 text-white text-[16px] leading-4 font-bold">
        <button className="focus:underline underline-offset-[12px] decoration-2"><h3>Recommended</h3></button>
        <button className="focus:underline underline-offset-[12px] decoration-2"><h3>Latest</h3></button>

      </div>
      <div className="h-[1px] bg-[#ffffff7c] absolute top-[44px] left-0 right-0"></div>
      <ul className="flex flex-col gap-2">
      <Slider {...settings} className="hidden sm:block">
        {FEATURED_VIDEO_DUMMY.map((item) => (
          <ImageListItem
            title={item.title}
            topic={item.topic}
            bLColor="border-l-bbcBlue"
            src={item.src}
          />
        ))}
      </Slider>
      <div className="block sm:hidden">
        {FEATURED_VIDEO_DUMMY.map((item) => (
          <ImageListItem
            title={item.title}
            topic={item.topic}
            bLColor="border-l-bbcBlue"
            src={item.src}
          />
        ))}
      </div>
    </ul>
    </div>
  );
};

export default ImageList;
