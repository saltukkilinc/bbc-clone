import React from 'react'
import Volume from '../../assets/icons/volume'

const WorldService = () => {
  return (
    <section className="bg-white p-8">
      <div className="flex max-w-[1248px] mx-auto">
        <h2 className="bg-bbcRed px-3 py-2 text-[14px] font-bold leading-6 text-white">
          BBC World Service
        </h2>
        <p className="flex-1 items-center bg-black py-2 pl-8 pr-10">
          <Volume className="mr-2 inline h-6 w-6" />
          <span className="text-[14px]leading-6 font-normal text-[#e5e5e5]">
            On Air:
          </span>
          <span className="text-[14px] font-bold leading-6 text-[#e5e5e5]">
            {' '}
            Weekend
          </span>
        </p>
      </div>
    </section>
  )
}

export default WorldService
