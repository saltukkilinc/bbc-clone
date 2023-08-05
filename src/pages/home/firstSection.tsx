import React from "react";
import Headline from "../../components/home/headline";
import ImageNewsItem from "../../components/home/imageNewsItem";
import { Section1_DUMMY } from "../../data";

const FirstSection = () => {
  return (
    <section className="px-4 pt-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 cs5:grid-cols-4 cs5:grid-rows-2 gap-3">
        <Headline
          title="North Korea confirms custody of US soldier"
          desc="Travis King dashed across the border to North Korea from the South in July."
          topic=" ASIA"
          src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/5DD6/production/_130622042_capture.png"
        />

        {Section1_DUMMY.map((item) => (
          <ImageNewsItem
            key={item.title}
            title={item.title}
            topic={item.topic}
            bLColor={item.bLColor}
            src={item.src}
          />
        ))}
      </ul>
    </section>
  );
};

export default FirstSection;
