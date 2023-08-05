import React from 'react'
import Subtitle from '../../components/home/subtitle'
import { Link } from 'react-router-dom'

const DoubleImageNews = () => {
  return (
    <section className="p-4  cs6:py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 sm:flex-row ">
        <div>
          <Subtitle title="TECH DECODED" />
          <img
            src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/14EFC/production/_129965758_thumbnail976x549.png"
            alt="tech decoded"
            className="w-full"
          />
          <div className="flex flex-col gap-3 py-3">
            <Link
              to="/news"
              className={`mt-2 w-full border-l-4 border-l-bbcBlue pl-2 text-[12px] leading-[12px] text-[#767676]`}
            >
              TECHNOLOGY
            </Link>
            <p className="text-[22px] font-bold leading-[26px]">
              Tech Decoded: The latest news direct to your inbox
            </p>
          </div>
        </div>

        <div>
          <Subtitle title="TECHNOLOGY OF BUSINESS" />
          <img
            src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/450D/production/_130477671_gettyimages-1518872859.jpg"
            alt="technology of businesses"
            className="w-full"
          />
          <div className="flex flex-col gap-3 py-3">
            <Link
              to="/news"
              className={`mt-2 block w-full border-l-4 border-l-bbcBlue pl-2 text-[12px] leading-[12px] text-[#767676]`}
            >
              BUSINESS
            </Link>
            <p className="text-[22px] font-bold leading-[26px]">
              Devastating wildfires spur detection systems
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoubleImageNews
