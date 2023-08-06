import React from 'react'
import Headline from '../../components/home/headline'
import PlayIcon from '../../assets/icons/play'

const SpecialFeatures = () => {
  return (
    <section className="bg-white p-4 min-[1248px]:py-8">
      <div className="m-auto max-w-[1248px] flex flex-col gap-4 sm:flex-row">
        <div>
          <h2 className="text-[22px] font-bold leading-[22px] text-[#4a4a4a] pb-2 uppercase">
            CEO Secrets
          </h2>
          <Headline
            title={'We hand-ice millions of biscuits'}
            topic={'Business'}
            src={
              'https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/BFEF/production/_130553194_ballonbiscuitsbeingiced.jpg'
            }
            isTopLeftIcon={<PlayIcon className="h-8 w-8 bg-black" />}
          />
        </div>

        <div>
          <h2 className="text-[22px] font-bold leading-[22px] text-[#4a4a4a] pb-2 uppercase">
            Technology of Business
          </h2>
          <Headline
            title={'New AI systems collide with law'}
            topic={'Business'}
            src={
              'https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/17304/production/_130408949_kellycopy.jpg'
            }
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialFeatures
