import React, { LegacyRef, RefObject, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ImageListItem from './imageListItem'
import {
    FEATURED_VIDEO_DUMMY,
    FEATURED_VIDEO_DUMMY_lATEST,
} from '../../../data'

import NextIcon from '../../../assets/icons/nextIcon'
import PrevIcon from '../../../assets/icons/prev'

enum ArrowTypes {
    next = 'Next Icon',
    prev = 'Prev Icon',
}

enum DataTypes {
    recommended = 'Recommended',
    latest = 'Latest',
}

const ImageList = () => {
    const sliderRef = useRef<any>()
    const [isShowArrows, setIsShowArrows] = useState<ArrowTypes>(
        ArrowTypes.next
    )
    const [choseData, setChoseData] = useState<DataTypes>(DataTypes.recommended)

    const chosenData =
        choseData === DataTypes.recommended
            ? FEATURED_VIDEO_DUMMY
            : FEATURED_VIDEO_DUMMY_lATEST

    const calculatedPrevIconIndex =
        chosenData.length % 2 === 1
            ? chosenData.length - 1
            : chosenData.length - 2

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        afterChange: (i: any) => {
            console.log(i)
            if (i === 0) {
                setIsShowArrows(ArrowTypes.next)
            } else if (i === calculatedPrevIconIndex) {
                setIsShowArrows(ArrowTypes.prev)
            }
        },
    }
    return (
        <div className="relative sm:bg-[#363636] sm:p-4">
            <div className="hidden gap-5 px-4 pb-7 text-[16px] font-bold leading-4 text-white sm:flex">
                <button
                    className="decoration-2 underline-offset-[12px] focus:underline"
                    onClick={() => setChoseData(DataTypes.recommended)}
                >
                    <h3>Recommended</h3>
                </button>
                <button
                    className="decoration-2 underline-offset-[12px] focus:underline"
                    onClick={() => setChoseData(DataTypes.latest)}
                >
                    <h3>Latest</h3>
                </button>
            </div>
            <div className="absolute left-0 right-0 top-[44px] h-[1px] bg-[#ffffff7c]"></div>
            <ul className="relative flex flex-col gap-2">
                <Slider
                    {...settings}
                    className="hidden sm:block"
                    ref={sliderRef}
                >
                    {chosenData.map((item) => (
                        <ImageListItem
                            title={item.title}
                            topic={item.topic}
                            bLColor="border-l-bbcBlue"
                            src={item.src}
                            key={item.title}
                        />
                    ))}
                </Slider>
                <div className="block sm:hidden">
                    {FEATURED_VIDEO_DUMMY.map((item, index) => (
                        <ImageListItem
                            title={item.title}
                            topic={item.topic}
                            bLColor="border-l-bbcBlue"
                            src={item.src}
                            key={item.title}
                        />
                    ))}
                </div>

                {isShowArrows === ArrowTypes.prev ? (
                    <button
                        className="absolute left-0 top-1/2 hidden h-[90px] w-10 -translate-y-1/2 items-center justify-center bg-black sm:flex"
                        onClick={() => sliderRef?.current?.slickPrev()}
                    >
                        <PrevIcon className="h-6 w-6" />
                    </button>
                ) : (
                    <button
                        className="absolute right-0 top-1/2 hidden h-[90px] w-10 -translate-y-1/2 items-center justify-center bg-black sm:flex"
                        onClick={() => sliderRef?.current?.slickNext()}
                    >
                        <NextIcon className="h-6 w-6" />
                    </button>
                )}
            </ul>
        </div>
    )
}

export default ImageList
