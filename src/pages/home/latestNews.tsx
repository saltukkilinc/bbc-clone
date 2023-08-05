import React from 'react'
import { Link } from 'react-router-dom';

const news = [
  "US jobs market holds steady despite rate rises",
  "China drops Australia barley tariffs after three years",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "China drops Australia barley tariffs after three years",
  "China drops Australia barley tariffs after three years",
]

const LatestNews = () => {
  return (
    <div className='border border-bbcRed sm:border-none'>
      <div className='p-3 bg-bbcRed'>
        <h2 className='text-[16px] font-bold leading-4 text-white'>LATEST BUSINESS NEWS</h2>
      </div>
      <ul className='flex flex-col'>
          {news.map((item, index) => (
            <NewsItem title={item} order={index + 1}/>
          ))}

        </ul>
    </div>
  )
}

export default LatestNews


const NewsItem = ({title, order}: {title: string, order: number}) => {
  return (
    <li className={`${order % 2 === 1 ? 'bg-[#f2f2f2] sm:bg-[#363636]' : "bg-white sm:bg-black"}`}>
      <Link to="/news" className={`flex items-center gap-6 p-8 sm:px-4 sm:flex-col sm:items-center`}>
        <span className='w-10 h-10 rounded-full bg-bbcRed text-white flex justify-center items-center shrink-0'>
          {order}
        </span>
        <h3 className='text-[16px] leading-[19px] font-bold sm:text-white text-center'>{title}</h3>
      </Link>
    </li>
  )
}
