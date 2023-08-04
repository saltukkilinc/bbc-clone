import React from "react";
import { Link } from "react-router-dom";

const Headline = () => {
  return (
    <li className="sm:col-start-1 sm:col-span-2 cs5:row-start-1 cs5:row-span-2">
      <Link to="/news">
        <div className="relative">
          <img
            src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/5DD6/production/_130622042_capture.png"
            alt="main image"
            className="w-full shadow-img"
          />
          <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 text-white">
            <h3>
              <Link
                to={"/news"}
                className="text-2xl leading-7 font-bold w-full block"
              >
                North Korea confirms custody of US soldier
              </Link>
            </h3>
            <p className="hidden sm:block mt-2 leading-[19.2px] text-[#d3d3d3;]">
              Travis King dashed across the border to North Korea from the South
              in July.
            </p>
            <Link
              to="/news"
              className="text-[12px] leading-[12px] border-l-4 border-l-red-600 pl-2 mt-2 w-full block"
            >
              ASIA
            </Link>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Headline;
