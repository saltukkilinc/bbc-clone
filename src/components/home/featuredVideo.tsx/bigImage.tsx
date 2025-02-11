import React from 'react'
import { Link } from 'react-router-dom'
import PlayIcon from '../../../assets/icons/play'

type BigImageGroupProps = {
  title: string
  topic: string
  src: string
}

const BigImageGroup = ({ title, topic, src }: BigImageGroupProps) => {
  return (
    <div className="">
      <Link to="/news">
        <div className="relative">
          <img src={src} alt="main image" className="w-full shadow-img" />
          <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 text-white">
            <h3>
              <Link
                to={'/news'}
                className="block w-full text-2xl font-bold leading-7"
              >
                {title}
              </Link>
            </h3>
            <Link
              to="/news"
              className="mt-2 block w-full border-l-4 border-l-red-600 pl-2 text-[12px] leading-[12px]"
            >
              {topic}
            </Link>
          </div>
          <PlayIcon className="absolute left-0 top-0 h-8 w-8 bg-black" />
        </div>
      </Link>
    </div>
  )
}

export default BigImageGroup
