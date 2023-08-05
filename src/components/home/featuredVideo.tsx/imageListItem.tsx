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
    <li className="relative border-b pb-3 sm:border-none sm:p-0">
      <PlayIcon className="w-6 h-6 bg-black absolute top-0.5 left-0"/>
      <Link to="/news">
        <div>
          <img
            src={src}
            alt="small images"
            className="hidden sm:block w-full"
          />
          <div className="text-black pl-8">
            <h3 className="">
              <Link
                to="/news"
                className=" text-[16px] font-bold leading-[19px] w-full block"
              >
                {title}
              </Link>
            </h3>
            <Link
              to="/news"
              className={`text-[#767676] text-[12px] leading-[12px] border-l-4 ${bLColor} pl-2 mt-2 w-full block `}
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

