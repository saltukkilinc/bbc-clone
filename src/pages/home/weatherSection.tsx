import React, { useState } from "react";
import SmallSeacrhIcon from "../../assets/icons/smallSeacrhIcon";
import { Link } from "react-router-dom";

const WeatherSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="p-4">
      <div className="mt-6 mb-3">
        <div className="flex items-center">
          <h2 className="text-heading text-[20px] leading-5 font-bold">
            LONDON WEATHER
          </h2>
          <button className="bg-[#f2f2f2] p-2 ml-4 text-[10px] leading-[10px] text-[#8c8c8c]"
          onClick={() => setIsFormOpen(!isFormOpen)}
          >
            {isFormOpen ? "Close" : "Edit"}
          </button>
        </div>
        {isFormOpen && (
          <form className="border border-[#d3d3d3] flex">
            <input type="text" placeholder="Enter city, town or region" className="w-full"/>
            <button>
              <SmallSeacrhIcon />
            </button>
          </form>
        )}
      </div>
      <div>
        <ul className="flex">
          <li>
            <Link to="/news" className="flex">
              <img
                src="https://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/29.gif"
                alt="weather image"
              />
            </Link>
            <h3>Fri</h3>
            <p>20°C</p>
            <p>13°C</p>
          </li>

          <li>
            <Link to="/news" className="flex">
              <img
                src="https://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/29.gif"
                alt="weather image"
              />
            </Link>
            <h3>Fri</h3>
            <p>20°C</p>
            <p>13°C</p>
          </li>

          <li>
            <Link to="/news" className="flex">
              <img
                src="https://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/29.gif"
                alt="weather image"
              />
            </Link>
            <h3>Fri</h3>
            <p>20°C</p>
            <p>13°C</p>
          </li>

          <li>
            <Link to="/news" className="flex">
              <img
                src="https://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/29.gif"
                alt="weather image"
              />
            </Link>
            <h3>Fri</h3>
            <p>20°C</p>
            <p>13°C</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WeatherSection;
