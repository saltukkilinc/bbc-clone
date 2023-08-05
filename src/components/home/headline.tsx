import React from 'react'
import { Link } from 'react-router-dom'

type HeadlineProps = {
    title: string
    desc?: string
    topic: string
    src: string
}

const Headline = ({ title, desc, topic, src }: HeadlineProps) => {
    return (
        <li className="sm:col-span-2 sm:col-start-1 cs5:row-span-2 cs5:row-start-1">
            <Link to="/news">
                <div className="relative">
                    <img
                        src={src}
                        alt="main image"
                        className="w-full shadow-img"
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 text-white">
                        <h3>
                            <Link
                                to={'/news'}
                                className="block w-full text-2xl font-bold leading-7"
                            >
                                {title}
                            </Link>
                        </h3>
                        <p className="mt-2 hidden leading-[19.2px] text-[#d3d3d3;] sm:block">
                            {desc}
                        </p>
                        <Link
                            to="/news"
                            className="mt-2 block w-full border-l-4 border-l-red-600 pl-2 text-[12px] leading-[12px]"
                        >
                            {topic}
                        </Link>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Headline
