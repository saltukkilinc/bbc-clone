import React from 'react'
import { Link } from 'react-router-dom'
import SectionItem from '../../components/home/sectionItem'
import Subtitle from '../../components/home/subtitle'

type DataItem = {
  title: string
  topic: string
  src: string
  description: string
}

type SectionType = {
  data: DataItem[]
  title: string
  bColor: string
}

const Section = ({ data, title, bColor }: SectionType) => {
  return (
    <section className="px-4 py-4">
      <Subtitle title={title} bgColor={bColor} />

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {data.map((item) => (
          <SectionItem
            key={item.title}
            title={item.title}
            topic={item.topic}
            bLColor={bColor}
            src={item.src}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default Section
