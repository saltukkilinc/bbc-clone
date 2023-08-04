import React from "react";
import { Link } from "react-router-dom";
import SectionItem from "./sectionItem";

type DataItem = {
  title: string;
  topic: string;
  src: string;
  description: string;
};

type SectionType = {
  data: DataItem[];
  title: string;
  bColor: string;
};

const Section = ({ data, title, bColor }: SectionType) => {
  return (
    <section className="px-4 py-4">
      <Subtitle title={title} bgColor={bColor} />

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {data.map((item) => (
          <SectionItem
            key={item.title}
            title={item.title}
            topic={item.topic}
            bLColor={bColor}
            src={item.src}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

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

export default Section;
