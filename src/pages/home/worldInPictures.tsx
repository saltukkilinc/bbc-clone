import React, { useEffect, useState } from 'react'
import Headline from '../../components/home/headline'
import PlayIcon from '../../assets/icons/play'
import SectionItem from '../../components/home/sectionItem'
import { SPORT_DUMMY } from '../../data'
import Subtitle from '../../components/home/subtitle'

const WorldInPictures = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="bg-white p-4 sm:bg-[#f2f2f2] min-[1248px]:pb-8">
      <div className="max-w-[1248px] mx-auto">
        <Subtitle title={'World in Pictures'} bgColor="border-l-bbcBlue" />
      </div>
      <div className="mx-auto  grid max-w-[1248px]">
        <ul className="grid-col-1 grid gap-y-2 sm:grid-cols-2 sm:gap-2 cs5:grid-cols-6">
          <div className="cs5:col-span-3 cs5:col-start-1">
            <Headline
              title={'In pictures: Supermoon lights up night sky'}
              topic={'WORLD'}
              src={
                'https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/D549/production/_130610645_sturgeon.png'
              }
              isTopLeftIcon={<PlayIcon className="h-8 w-8 bg-black" />}
              isNotCover
              titlesBottomOfImage={
                600 < screenWidth && screenWidth < 1008 ? true : false
              }
            />
          </div>

          <div className="cs5:col-span-3 cs5:col-start-4">
            <SectionItem
              title={'Lorem ipsum dolor sit amet consectetur adipisicing.'}
              topic={'Lorem'}
              bLColor={'border-l-bbcBlue'}
              src={
                'https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/D549/production/_130610645_sturgeon.png'
              }
              titlesOnImage={screenWidth > 1008 ? true : false}
            />
          </div>

          <div className="cs5:col-span-2">
            <SectionItem
              title={'Lorem ipsum dolor sit amet consectetur adipisicing.'}
              topic={'Lorem'}
              bLColor={'border-l-bbcBlue'}
              src={
                'https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/D549/production/_130610645_sturgeon.png'
              }
            />
          </div>
          <div className="cs5:col-span-2">
            <SectionItem
              title={'Lorem ipsum dolor sit amet consectetur adipisicing.'}
              topic={'Lorem'}
              bLColor={'border-l-bbcBlue'}
              src={
                'https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/D549/production/_130610645_sturgeon.png'
              }
            />
          </div>
          <div className="hidden cs5:col-span-2 cs5:block">
            <SectionItem
              title={'Lorem ipsum dolor sit amet consectetur adipisicing.'}
              topic={'Lorem'}
              bLColor={'border-l-bbcBlue'}
              src={
                'https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/D549/production/_130610645_sturgeon.png'
              }
            />
          </div>
        </ul>
      </div>
    </section>
  )
}

export default WorldInPictures
