import React, { useState } from "react";
import UserIcon from "../../assets/icons/userIcon";
import BbcIcon from "../../assets/icons/bbcIcon";
import TreeDotsIcon from "../../assets/icons/ThreeDotsIcon";
import HamburgerIcon from "../../assets/icons/hamburgerIcon";
import SearchIcon from "../../assets/icons/searchIcon";
import SmallSeacrhIcon from "../../assets/icons/smallSeacrhIcon";
import CloseIcon from "../../assets/icons/closeIcon";

// css module use if it is necessarry
import styles from "./header.module.css";

const NavItemShow = ({
  title,
  isShow,
  color,
}: {
  title: string;
  color: string;
  isShow?: string;
}) => {
  return (
    <li
      className={`${
        isShow && `hidden ${isShow}:block`
      } hover:underline decoration-${color} underline-offset-[12px] py-4`}
    >
      {title}
    </li>
  );
};

const NavItemHidden = ({
  title,
  isHidden,
  color,
}: {
  title: string;
  color: string;
  isHidden?: string;
}) => {
  return (
    <li
      className={`${
        isHidden && `${isHidden}:hidden`
      } hover:underline decoration-${color} underline-offset-[12px] py-4`}
    >
      {title}
    </li>
  );
};

const navList = [
  { title: "Home", color: "white" },
  { title: "News", color: "green-300" },
  { title: "Sports", color: "yellow-400" },
  { title: "Reel", color: "red-500" },
  { title: "Worklife", color: "blue-400" },
  { title: "Travel", color: "purple-400" },
  { title: "Future", color: "white" },
  { title: "Culture", color: "green-500" },
  { title: "TV", color: "red-400" },
  { title: "Weather", color: "white" },
  { title: "Sounds", color: "yellow-600" },
];

const Header = () => {
  const [expandNavbar, setExpandNavbar] = useState<boolean>(true);

  return (
    <header className="px-4 bg-[#000] flex flex-col  text-white">
      <nav className="h-[64px]  flex justify-center items-center">
        <div className="flex flex-1 items-center cs5:max-w-[976px] cs5:justify-center cs6:max-w-[1248px] py-4">
          <a
            className="flex items-center w-[65px] cs5:w-[153px] hover:border-b border-b-blue-400 py-4 "
            href="https://account.bbc.com/signin?realm=%2F&clientId=Account&context=news&ptrt=https%3A%2F%2Fwww.bbc.com%2Fnews&userOrigin=news_gnl&isCasso=false&action=sign-in&redirectUri=https%3A%2F%2Fsession.bbc.com%2Fsession%2Fcallback%3Frealm%3D%2F&service=IdSignInService&nonce=SnEoGcMb-HW50QnOnM_9HUzEqiE_gL_icmtk"
            target="_blank"
          >
            <UserIcon className="w-6 h-6 " />
            <div className="hidden cs5:block ml-[6px]">Sign In</div>
            <span className="hidden sm:block w-[1px] h-4 bg-gray-400 ml-auto my-auto"></span>
          </a>

          <ul className="hidden sm:flex flex-1 justify-around text-white">
            <NavItemShow title="Home" color="white" />
            <NavItemShow title="News" color="blue-700" />
            <NavItemShow title="Sports" color="green-400" />
            <NavItemShow title="Reel" color="red-600" isShow="cs1" />
            <NavItemShow title="Worklife" color="orange-400" isShow="cs2" />
            <NavItemShow title="Travel" color="purple-600" isShow="cs3" />
            <NavItemShow title="Future" color="red-400" isShow="cs4" />
            <NavItemShow title="Culture" color="yellow-300" isShow="cs5" />
          </ul>

          <div className="flex-1 flex justify-center items-center sm:order-[-1] sm:mr-3 sm:flex-initial py-4">
            <BbcIcon />
          </div>

          <div className="hidden sm:block mr-2 py-4 hover:border-b border-b-white">
            <TreeDotsIcon onClick={() => setExpandNavbar(!expandNavbar)} />
          </div>

          <div className="sm:hidden mx-3 py-4">
            <HamburgerIcon onClick={() => setExpandNavbar(!expandNavbar)} />
          </div>
          <div className="ml-[10px] cs6:hidden py-4 hover:border-b border-b-white">
            <SearchIcon />
          </div>
          <a
            className="w-[220px]  p-3 hidden cs6:flex items-center bg-[#202224]"
            href="https://www.bbc.co.uk/search?q=&d=HOMEPAGE_GNL"
          >
            <SmallSeacrhIcon />
            <span className="ml-2">Search BBC</span>
          </a>
        </div>
      </nav>
      {expandNavbar && (
        <nav>
          <div className="text-white bg-black flex flex-col justify-center sm:hidden">
            <div className="flex pt-3">
              <div className="flex-1">
                <ul className="grid grid-cols-2 text-[16px] leading-4 font-bold gap-y-[6px]">
                  {navList.map((nav) => (
                    <NavItemShow
                      title={nav.title}
                      color={nav.color}
                      key={nav.title}
                    />
                  ))}
                </ul>
              </div>
              <div className="py-4" onClick={() => setExpandNavbar(false)}>
                <CloseIcon />
              </div>
            </div>
          </div>

          <div className="text-white bg-black hidden sm:flex justify-between items-center gap-8">
            <div className="flex-1  flex justify-center items-center">
              <div className="flex flex-1 items-center cs5:max-w-[976px] cs5:justify-center cs6:max-w-[1248px] ">
                <ul className="flex text-[16px] leading-4 font-bold justify-between gap-4">
                  <NavItemHidden title="Reel" color="red-600" isHidden="cs1" />
                  <NavItemHidden
                    title="Worklife"
                    color="orange-400"
                    isHidden="cs2"
                  />
                  <NavItemHidden
                    title="Travel"
                    color="yellow-600"
                    isHidden="cs3"
                  />
                  <NavItemHidden
                    title="Future"
                    color="white-400"
                    isHidden="cs4"
                  />
                  <NavItemHidden
                    title="Culture"
                    color="purple-400"
                    isHidden="cs6"
                  />
                  <NavItemHidden title="Tv" color="green-400" />
                  <NavItemHidden title="Weather" color="blue-400" />
                  <NavItemHidden title="Sounds" color="orange-400" />
                </ul>
                <div
                  className="py-4 ml-auto"
                  onClick={() => setExpandNavbar(false)}
                >
                  <CloseIcon />
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
