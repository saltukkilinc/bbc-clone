import React from 'react'
import Subtitle from '../../components/home/subtitle'
import Headline from '../../components/home/headline'
import SectionItem from '../../components/home/sectionItem'
import { NEWS_DUMMY, SPORT_DUMMY } from '../../data'
import LatestNews from '../../components/home/latestNews'

const MERGED_DUMMY_DATA = [...NEWS_DUMMY, ...SPORT_DUMMY]

const MoreBBC = () => {
  return (
    <section className="list-none p-4 sm:bg-[#f6f6f6]">
      <div className="mx-auto max-w-[1248px]">
        <Subtitle title="More Around BBC" bgColor="border-l-[#47a1d8]" />
        <div className="flex flex-col gap-3 sm:flex-row ">
          <div className="flex flex-col gap-3 w-2/3">
            <Headline
              title="Wannabe rapper guilty of $4.5bn Bitcoin laundering"
              desc="Heather Morgan and husband Ilya Lichtenstein plead guilty to money laundering and defrauding the US."
              topic="CULTURE"
              src="https://ichef.bbc.co.uk/wwhp/999/cpsprodpb/11EBB/production/_130630437_3b05fe1d-48e9-40d6-a82c-4e555308aa5d.jpg"
              titlesBottomOfImage
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

          <div className='w-1/3 cs5:-order-1'><LatestNews /></div>
        </div>
      </div>
    </section>
  )
}

export default MoreBBC
