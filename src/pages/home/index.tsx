import React from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";

import { Section1_DUMMY } from "../../data";
import Section1Item from "./section1";

const Home = () => {
  return (
    <main>
      <Header />
      <section>
        <h2 className="hidden sm:flex justify-between px-4 pt-4 text-[22px] leading-[22px]">
          <span className="text-[#4a4a4a]  font-bold">Welcome to BBC.com</span>
          <span className="text-[#8c8c8c] font-normal">Thursday, 3 August</span>
        </h2>

        <article className="px-4 pt-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="sm:col-start-1 sm:col-span-2">
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
                      Travis King dashed across the border to North Korea from
                      the South in July.
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

            {Section1_DUMMY.map((item) => (
              <Section1Item
                title={item.title}
                topic={item.topic}
                bLColor={item.bLColor}
                key={item.title}
                src={item.src}
              />
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default Home;
