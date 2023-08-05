import React from 'react'
import ForwardIcon from '../../assets/icons/forwardIcon'

type VideoSectionTypes = {
  title: JSX.Element
  subtitle: string
  buttonText: string
  titleList: { src: string; title: string }[]
}

const VideoSection = ({
  videoSectionData,
}: {
  videoSectionData: VideoSectionTypes
}) => {
  return (
    <section className="mt-4 bg-[url('https://ychef.files.bbci.co.uk/1200x675/p08h02kk.jpg')] bg-cover ">
      <div className="flex justify-center bg-videoSBg">
        <div className="max-w-[1280px] p-4 cs5:py-8">
          <div className="mt-2 flex items-center justify-between text-white">
            {videoSectionData.title}
            <button className="flex items-center  gap-1 rounded-full border-[1.5px] border-white px-2 py-[6px]">
              {videoSectionData.buttonText}
              <ForwardIcon />
            </button>
          </div>
          <p className="mb-4 mt-[6px] text-[15px] leading-[15px] text-white">
            {videoSectionData.subtitle}
          </p>
          <ul className="flex flex-col gap-3 sm:flex-row">
            {videoSectionData.titleList.map((item) => (
              <li>
                <img src={item.src} alt="siberian image" />
                <div className="bg-white pb-4 pt-2">
                  <h3 className="px-2 text-[17px] font-bold leading-5">
                    {item.title}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
