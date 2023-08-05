import React from "react";
import { Link } from "react-router-dom";
import PlayIcon from "../../../assets/icons/play";

type ImageListItemProps = {
  title: string;
  topic: string;
  bLColor: string;
  src: string;
};

const ImageListItem = ({
  title,
  topic,
  bLColor,
  src,
}: ImageListItemProps) => {
  return (
    <li className="relative border-b py-3 sm:border-none sm:p-0">
      <PlayIcon className="w-6 h-6 bg-black absolute top-3 left-0 sm:hidden"/>
      <Link to="/news">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-2 sm:p1">
          <img
            src={src}
            alt="small images"
            className="hidden sm:block w-full h-full"
          />
          <div className="text-black pl-8 sm:p-2 sm:text-white">
            <h3 className="container">
              <Link
                to="/news"
                className=" text-[16px] font-bold leading-[19px] w-full block multiline-ellipsis "
              >
                {title}
              </Link>
            </h3>
            <Link
              to="/news"
              className={`text-[#767676] text-[12px] leading-[12px] border-l-2 ${bLColor} pl-2 mt-2 w-full block`}
            >
              {topic}
            </Link>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ImageListItem;

