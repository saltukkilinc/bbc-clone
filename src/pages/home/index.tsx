import React from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";

import { Section1_DUMMY, NEWS_DUMMY, SPORT_DUMMY, WOMAN_WORLD_CUP_DUMMY } from "../../data";
import Section1Item from "./section1";
import Headline from "./headline";
import Section from "./section";
import WeatherSection from "./weatherSection";
import VideoSection from "./videoSection";

const Home = () => {
  return (
    <main>
      <Header />
      <article>
        <h2 className="hidden sm:flex justify-between px-4 pt-4 text-[22px] leading-[22px]">
          <span className="text-[#4a4a4a]  font-bold">Welcome to BBC.com</span>
          <span className="text-[#8c8c8c] font-normal">Thursday, 3 August</span>
        </h2>

        

        <section className="px-4 pt-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 cs5:grid-cols-4 cs5:grid-rows-2 gap-3">
            <Headline />

            {Section1_DUMMY.map((item) => (
              <Section1Item
                key={item.title}
                title={item.title}
                topic={item.topic}
                bLColor={item.bLColor}
                src={item.src}
              />
            ))}
          </ul>
        </section>

        <Section data={NEWS_DUMMY} title="NEWS" bColor="border-l-bbcRed"/>
        <Section data={SPORT_DUMMY} title="SPORT" bColor="border-l-bbcYellow"/>
        <Section data={WOMAN_WORLD_CUP_DUMMY} title="WOMAN WORLD CUP" bColor="border-l-bbcBlue"/>

        <WeatherSection />
        
        <VideoSection />
  
        <h1 className="mt-32">BOŞLUK İÇİN</h1>
      </article>
    </main>
  );
};

export default Home;


