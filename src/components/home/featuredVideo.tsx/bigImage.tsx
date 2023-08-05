import React from "react";
import { Link } from "react-router-dom";
import PlayIcon from "../../../assets/icons/play";

type BigImageGroupProps = {
  title: string;
  topic: string;
  src: string;
};

const BigImageGroup = ({ title, topic, src }: BigImageGroupProps) => {
  return (
    <div className="">
      <Link to="/news">
        <div className="relative">
          <img
            src={src}
            alt="main image"
            className="w-full shadow-img"
          />
          <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 text-white">
            <h3>
              <Link
                to={"/news"}
                className="text-2xl leading-7 font-bold w-full block"
              >
                {title}
              </Link>
            </h3>
            <Link
              to="/news"
              className="text-[12px] leading-[12px] border-l-4 border-l-red-600 pl-2 mt-2 w-full block"
            >
              {topic}
            </Link>
          </div>
          <PlayIcon className="w-8 h-8 bg-black absolute top-0 left-0" />
        </div>
      </Link>
    </div>
  );
};

export default BigImageGroup;
