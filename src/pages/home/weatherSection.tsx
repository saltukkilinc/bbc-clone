import React, { useState } from 'react'
import SmallSeacrhIcon from '../../assets/icons/smallSeacrhIcon'
import { Link } from 'react-router-dom'

import { DUMMY_WEATHERS } from '../../data'

const WeatherSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section className="p-4">
      <div className="mb-[30px] mt-6">
        <div className="flex items-center">
          <h2 className="text-[20px] font-bold leading-5 text-heading">
            LONDON WEATHER
          </h2>
          <button
            className="ml-4 bg-[#f2f2f2] p-2 text-[10px] leading-[10px] text-[#8c8c8c]"
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            {isFormOpen ? 'Close' : 'Edit'}
          </button>
        </div>
        {isFormOpen && (
          <form className="relative mt-1 h-9 border border-[#d3d3d3] cs5:max-w-[18rem]">
            <input
              type="text"
              placeholder="Enter city, town or region"
              className="h-full w-full pl-2 text-[14px] leading-[14px] text-[#8c8c8c]"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2">
              <SmallSeacrhIcon className="fill-[#8c8c8c]" />
            </button>
          </form>
        )}
      </div>
      <div>
        <WeatherItems data={DUMMY_WEATHERS} />
      </div>
    </section>
  )
}

export default WeatherSection

type WeatherItemtype = {
  day: string
  topTemp: string
  lowTemp: string
  src: string
}

const WeatherItems = ({ data }: { data: WeatherItemtype[] }) => {
  return (
    <ul className="flex items-center gap-2">
      {data.map((item: any) => (
        <li key={item.title}>
          <Link to="/news" className="flex items-center gap-2">
            <img src={item.src} alt="weather image" />
            <div className="text-[#212121]">
              <h3 className="text-[12px] font-bold uppercase leading-3">
                {item.day}
              </h3>
              <p className="text-[18px] font-bold leading-[18px] ">
                {item.topTemp}
              </p>
              <p className="text-[12px] leading-3 text-[#4a4a4a] ">
                {item.lowTemp}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
