import React from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";

import { Section1_DUMMY, Section2_DUMMY } from "../../data";
import Section1Item from "./section1";
import Headline from "./headline";
import SectionItem from "./sectionItem";

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

        <section className="px-4 pt-4">
          <Subtitle title="News" bgColor="border-l-bbcRed" />

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {Section2_DUMMY.map((item) => (
              <SectionItem
                key={item.title}
                title={item.title}
                topic={item.topic}
                bLColor="border-l-bbcRed"
                src={item.src}
                description={item.description}
              />
            ))}
          </ul>
        </section>

        <h1 className="mt-32">BOŞLUK İÇİN</h1>
      </article>
    </main>
  );
};

export default Home;

function Subtitle({ title, bgColor }: { title: string; bgColor: string }) {
  return (
    <h2
      className={`mb-4 text-[24px] leading-6 font-bold border-l-4 ${bgColor}`}
    >
      <Link to="/news" className="w-full pl-2">
        {title}
      </Link>
    </h2>
  );
}
