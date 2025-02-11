import React from 'react'
import { Link } from 'react-router-dom'
import PlayIcon from '../../../assets/icons/play'

type ImageListItemProps = {
  title: string
  topic: string
  bLColor: string
  src: string
}

const ImageListItem = ({ title, topic, bLColor, src }: ImageListItemProps) => {
  return (
    <li className="relative border-b py-3 sm:border-none sm:p-0">
      <PlayIcon className="absolute left-0 top-3 h-6 w-6 bg-black sm:hidden" />
      <Link to="/news">
        <div className="sm:p1 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-2">
          {/* <video controls>
            <source src="rabbit320.mp4" type="video/mp4" />
            <source src="rabbit320.webm" type="video/webm" />
          </video> */}
          <img
            src={src}
            alt="small images"
            className="hidden h-full w-full sm:block"
          />

          <div className="pl-8 text-black sm:p-2 sm:text-white">
            <h3 className="container">
              <Link
                to="/news"
                className=" multiline-ellipsis block w-full text-[16px] font-bold leading-[19px] "
              >
                {title}
              </Link>
            </h3>
            <Link
              to="/news"
              className={`border-l-2 text-[12px] leading-[12px] text-[#767676] ${bLColor} mt-2 block w-full pl-2`}
            >
              {topic}
            </Link>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ImageListItem
