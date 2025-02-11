import React from 'react'
import { Link } from 'react-router-dom'
import { OTHER_COUNTRIES_DUMMY } from '../../data'

const OtherLanguages = () => {
  return (
    <section className="bg-[#f2f2f2] p-4 min-[1248px]:py-8">
      <div className="mx-auto max-w-[1248px]">
        <h2 className="mb-4 text-[24px] font-bold leading-[24px]">
          BBC in other languages
        </h2>

        <div>
          <h2 className="mb-4 text-[18px] font-bold leading-[18px]">
            More Languages
          </h2>
          <ul className="grid max-w-[800px] grid-cols-2 sm:grid-cols-3 cs3:grid-cols-4">
            {OTHER_COUNTRIES_DUMMY.map((item, index) => (
              <CountryItem
                name={item.name}
                originalName={item.originalName}
                key={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OtherLanguages

const CountryItem = ({
  name,
  originalName,
}: {
  name: string
  originalName: string
}) => {
  return (
    <li className="mb-4">
      <Link to={'/news'} className="item flex gap-2">
        <span className="text-[14px] leading-[14px]">{name}</span>
        <span className="text-[14px] leading-[14px] text-[#1d6293]">
          {originalName}
        </span>
      </Link>
    </li>
  )
}
