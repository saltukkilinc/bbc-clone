import React from "react";
import { Link } from "react-router-dom";

type SectionItemProps = {
  title: string;
  topic: string;
  bLColor: string;
  src: string;
  description?: string;
  titlesOnImage?:boolean
};

const SectionItem = ({
  title,
  topic,
  bLColor,
  src,
  description,
  titlesOnImage
}: SectionItemProps) => {
  return (
    <li className="relative border-b pb-3 sm:border-none sm:p-0 sm:bg-white">
      <Link to="/news">
        <div className="relative">
          <img
            src={src}
            alt="small images"
            className="hidden sm:block w-full"
          />
          <div className={`${titlesOnImage ? "sm:absolute left-0 bottom-2 right-0 sm:text-white pl-2" : "text-black"} ml-2`}>
            <h3 className="sm:my-2">
              <Link
                to="/news"
                className=" text-[16px] font-bold leading-[19px] w-full block"
              >
                {title}
              </Link>
            </h3>
            <p className="hidden text-[#4a4a4a] text-[16px] leading-[19px] sm:block sm:pb-7">
              {description}
            </p>
            <Link
              to="/news"
              className={`${titlesOnImage ? "sm:text-white" : "text-[#767676]"} text-[12px] leading-[12px] border-l-4 ${bLColor} pl-2 pb-2 mt-2 w-full block sm:absolute bottom-0 sm:text-[14px] leading-[14px]`}
            >
              {topic}
            </Link>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SectionItem;
