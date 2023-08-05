import React from 'react'
import Header from '../../components/header'
import { Link } from 'react-router-dom'

import {
  NEWS_DUMMY,
  SPORT_DUMMY,
  WOMAN_WORLD_CUP_DUMMY,
  DUMMY_VSDATA1,
  DUMMY_VSDATA2,
} from '../../data'

import Section from './section'
import WeatherSection from './weatherSection'
import VideoSection from './videoSection'
import EditorFavourite from './editorFavourite'
import FirstSection from './firstSection'
import DoubleImageNews from './doubleImageNews'
import FeaturedVideo from './featuredVideo'
import NextIcon from '../../assets/icons/nextIcon'

const Home = () => {
  return (
    <main>
      <Header />
      <article>
        <h2 className="hidden justify-between px-4 pt-4 text-[22px] leading-[22px] sm:flex">
          <span className="font-bold  text-[#4a4a4a]">Welcome to BBC.com</span>
          <span className="font-normal text-[#8c8c8c]">Thursday, 3 August</span>
        </h2>

        <FirstSection />

        <Section data={NEWS_DUMMY} title="NEWS" bColor="border-l-bbcRed" />
        <Section data={SPORT_DUMMY} title="SPORT" bColor="border-l-bbcYellow" />
        <Section
          data={WOMAN_WORLD_CUP_DUMMY}
          title="WOMAN WORLD CUP"
          bColor="border-l-bbcBlue"
        />

        <WeatherSection />

        <VideoSection videoSectionData={DUMMY_VSDATA1} />

        <EditorFavourite />

        <VideoSection videoSectionData={DUMMY_VSDATA2} />

        <DoubleImageNews />

        <FeaturedVideo />

        <h1 className="mt-32">BOŞLUK İÇİN</h1>
      </article>
    </main>
  )
}

export default Home
