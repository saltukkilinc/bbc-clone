import React from 'react'
import PlayIcon from '../../assets/icons/play'
import Subtitle from '../../components/home/subtitle'

import BigImageGroup from '../../components/home/featuredVideo.tsx/bigImage'
import ImageList from '../../components/home/featuredVideo.tsx/imageList'

const FeaturedVideo = () => {
  return (
    <section className="p-4 py-8 sm:bg-[#f6f6f6]">
      <div className="mx-auto max-w-[1248px]">
        <Subtitle title="Featured Video" bgColor="border-l-bbcBlue" />
        <div className="relative flex flex-col">
          <BigImageGroup
            title="Watch: Ukrainian sea drone Russian..."
            topic="EUROPE"
            src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/6D8E/production/_130664082_p0g4zt14.jpg"
          />

          <ImageList />
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideo
