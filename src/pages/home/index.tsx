import React from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";


import {
  Section1_DUMMY,
  NEWS_DUMMY,
  SPORT_DUMMY,
  WOMAN_WORLD_CUP_DUMMY,
  DUMMY_VSDATA1,
  DUMMY_VSDATA2
} from "../../data";
import Section1Item from "./section1";
import Headline from "./headline";
import Section from "./section";
import WeatherSection from "./weatherSection";
import VideoSection from "./videoSection";
import EditorFavourite from "./editorFavourite";

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
            <Headline
              title="North Korea confirms custody of US soldier"
              desc="Travis King dashed across the border to North Korea from the South in July."
              topic=" ASIA"
              src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/5DD6/production/_130622042_capture.png"
            />

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

        <Section data={NEWS_DUMMY} title="NEWS" bColor="border-l-bbcRed" />
        <Section data={SPORT_DUMMY} title="SPORT" bColor="border-l-bbcYellow" />
        <Section
          data={WOMAN_WORLD_CUP_DUMMY}
          title="WOMAN WORLD CUP"
          bColor="border-l-bbcBlue"
        />

        <WeatherSection />

        <VideoSection videoSectionData={DUMMY_VSDATA1}/>

        <EditorFavourite />

        <VideoSection videoSectionData={DUMMY_VSDATA2}/>

        <h1 className="mt-32">BOŞLUK İÇİN</h1>
      </article>
    </main>
  );
};

export default Home;

