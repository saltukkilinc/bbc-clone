import React, { useState } from "react";
import SmallSeacrhIcon from "../../assets/icons/smallSeacrhIcon";
import { Link } from "react-router-dom";

import { DUMMY_WEATHERS } from "../../data";

const WeatherSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="p-4">
      <div className="mt-6 mb-[30px]">
        <div className="flex items-center">
          <h2 className="text-heading text-[20px] leading-5 font-bold">
            LONDON WEATHER
          </h2>
          <button
            className="bg-[#f2f2f2] p-2 ml-4 text-[10px] leading-[10px] text-[#8c8c8c]"
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            {isFormOpen ? "Close" : "Edit"}
          </button>
        </div>
        {isFormOpen && (
          <form className="border border-[#d3d3d3] relative h-9 mt-1 cs5:max-w-[18rem]">
            <input
              type="text"
              placeholder="Enter city, town or region"
              className="w-full h-full text-[14px] leading-[14px] text-[#8c8c8c] pl-2"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2">
              <SmallSeacrhIcon className="fill-[#8c8c8c]" />
            </button>
          </form>
        )}
      </div>
      <div>
        <WeatherItems data={DUMMY_WEATHERS} />
      </div>
    </section>
  );
};

export default WeatherSection;

type WeatherItemtype = {
  day: string;
  topTemp: string;
  lowTemp: string;
  src: string;
};

const WeatherItems = ({ data }: { data: WeatherItemtype[] }) => {
  return (
    <ul className="flex items-center gap-2">
      {data.map((item: any) => (
        <li>
          <Link to="/news" className="flex gap-2 items-center">
            <img src={item.src} alt="weather image" />
            <div className="text-[#212121]">
              <h3 className="text-[12px] leading-3 font-bold uppercase">
                {item.day}
              </h3>
              <p className="text-[18px] leading-[18px] font-bold ">
                {item.topTemp}
              </p>
              <p className="text-[12px] leading-3 text-[#4a4a4a] ">
                {item.lowTemp}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
