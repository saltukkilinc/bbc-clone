import React from "react";
import Subtitle from "./subtitle";
import Headline from "./headline";
import SectionItem from "./sectionItem";
import { NEWS_DUMMY, SPORT_DUMMY } from "../../data";
import LatestNews from "./latestNews";

const MERGED_DUMMY_DATA = [...NEWS_DUMMY, ...SPORT_DUMMY];

const EditorFavourite = () => {
  return (
    <section className="p-4 list-none">
      <div className="max-w-[1248px] mx-auto">
      <Subtitle title="Editor's Pick" bgColor="border-l-[#47a1d8]" />
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-col gap-3">
          <Headline
            title="2023's most stylish football kits "
            desc="How women's football strips are more fashionable and functional than ever"
            topic="CULTURE"
            src="https://ychef.files.bbci.co.uk/width/790/p0g4wlb9.jpg"
          />

          <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 cs5:grid-cols-3">
            {MERGED_DUMMY_DATA.map((item) => (
              <SectionItem
                title={item.title}
                topic={item.topic}
                bLColor={"border-l-bbcBlue"}
                src={item.src}
                description={item.description}
              />
            ))}
          </ul>
        </div>

        <LatestNews />
      </div>
      </div>
    </section>
  );
};

export default EditorFavourite;
