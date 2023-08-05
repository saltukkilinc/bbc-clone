import React from 'react'
import { Link } from 'react-router-dom'

const news = [
  'US jobs market holds steady despite rate rises',
  'China drops Australia barley tariffs after three years',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'China drops Australia barley tariffs after three years',
  'China drops Australia barley tariffs after three years',
]

const LatestNews = () => {
  return (
    <div className="border border-bbcRed sm:border-none">
      <div className="bg-bbcRed p-3">
        <h2 className="text-[16px] font-bold leading-4 text-white">
          LATEST BUSINESS NEWS
        </h2>
      </div>
      <ul className="flex flex-col">
        {news.map((item, index) => (
          <NewsItem title={item} order={index + 1} key={item} />
        ))}
      </ul>
    </div>
  )
}

export default LatestNews

const NewsItem = ({ title, order }: { title: string; order: number }) => {
  return (
    <li
      className={`${
        order % 2 === 1
          ? 'bg-[#f2f2f2] sm:bg-[#363636]'
          : 'bg-white sm:bg-black'
      }`}
    >
      <Link
        to="/news"
        className={`flex items-center gap-6 p-8 sm:flex-col sm:items-center sm:px-4`}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bbcRed text-white">
          {order}
        </span>
        <h3 className="text-center text-[16px] font-bold leading-[19px] sm:text-white">
          {title}
        </h3>
      </Link>
    </li>
  )
}
