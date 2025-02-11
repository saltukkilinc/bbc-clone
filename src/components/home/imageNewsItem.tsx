import React from "react";
import { Link } from "react-router-dom";

type ImageNewsItemProps = {
  title: string;
  topic: string;
  bLColor: string;
  src: string;
};

const ImageNewsItem = ({ title, topic, bLColor, src }: ImageNewsItemProps) => {
  return (
    <li className="border-b pb-3 sm:border-none sm:p-0">
      <Link to="/news">
        <div className="relative ">
          <img src={src} alt="small images" className="hidden sm:block w-full brightness-75 shadow-img" />
          <div className="sm:absolute bottom-0 left-0 right-0 sm:pb-3 sm:px-3 text-white">
            <h3>
              <Link
                to="/news"
                className="text-black  text-[16px] font-bold leading-[19px] w-full block sm:text-white sm:text-[20px] sm:leading-[24px]"
              >
                {title}
              </Link>
            </h3>
            <Link
              to="/news"
              className={`text-black sm:text-[#d3d3d3] text-[12px] leading-[12px] border-l-4 ${bLColor} pl-2 mt-2 w-full block`}
            >
              {topic}
            </Link>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ImageNewsItem;
