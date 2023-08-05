import React from 'react'
import Subtitle from '../../components/home/subtitle'
import Headline from '../../components/home/headline'
import SectionItem from '../../components/home/sectionItem'
import { NEWS_DUMMY, SPORT_DUMMY } from '../../data'
import LatestNews from './latestNews'

const MERGED_DUMMY_DATA = [...NEWS_DUMMY, ...SPORT_DUMMY]

const EditorFavourite = () => {
  return (
    <section className="list-none p-4">
      <div className="mx-auto max-w-[1248px]">
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
              {MERGED_DUMMY_DATA.map((item, index) => (
                <SectionItem
                  title={item.title}
                  topic={item.topic}
                  bLColor={'border-l-bbcBlue'}
                  src={item.src}
                  description={item.description}
                  key={index}
                />
              ))}
            </ul>
          </div>

          <LatestNews />
        </div>
      </div>
    </section>
  )
}

export default EditorFavourite
