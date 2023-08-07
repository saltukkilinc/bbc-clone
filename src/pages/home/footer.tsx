import React from 'react'
import { Link } from 'react-router-dom'

const pages = [
  'Home',
  'News',
  'Sport',
  'Reel',
  'Worklife',
  'Travel',
  'Future',
  'Culture',
  'TV',
  'Weather',
  'Sounds',
]

const contacts = [
  'Terms of Use',
  'About the BBC',
  'Privacy Policy',
  'Cookies',
  'Accessibility Help',
  'Parental Guidance',
  'Contact the BBC',
  'BBC emails for you',
  'Advertise with us',
  'Do not share or sell my info',
]

const Footer = () => {
  return (
    <footer className="bg-[#4c4c4c] p-4 text-white">
      <div className="mx-auto cs5:max-w-[976px] cs6:max-w-[1280px]">
        <h2 className="py-5 text-[22px] font-bold leading-[22px]">
          Explore the BBC
        </h2>
        <nav>
          <ul className="grid grid-cols-2 gap-x-2 pb-5 min-[400px]:grid-cols-3 sm:grid-cols-4 cs5:grid-cols-6 [&>*:last-child]:pb-0 [&>*:nth-child(10)]:pb-0">
            {pages.map((item, index) => (
              <li
                className="border-r pb-4 text-[13px] font-bold leading-4"
                key={index}
              >
                <Link to="/news">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul className="grid grid-cols-2 gap-x-2 border-t pb-[26px] pt-5 min-[400px]:grid-cols-3 sm:grid-cols-4 cs5:grid-cols-6">
            {contacts.map((item, index) => (
              <li key={index} className=" pb-4 text-[13px] leading-4">
                <Link to="/news">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <small className="pb-[13px] pt-[26px] text-[13px] leading-tight">
          <em className="font-bold">Copyright © 2023 BBC.</em>&nbsp;The BBC is
          not responsible for the content of external sites.&nbsp;
          <a href="https://www.google.com" className="font-bold">
            Read about our approach to external linking.
          </a>
        </small>
      </div>
    </footer>
  )
}

export default Footer
