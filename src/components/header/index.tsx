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

const Header = () => {
  const [expandNavbar, setExpandNavbar] = useState<boolean>(true);

  return (
    <div className="px-4 bg-[#000] flex flex-col  text-white">
      <div className="h-[64px]  flex justify-center items-center">
        <div className="flex flex-1 items-center cs5:max-w-[976px] cs5:justify-center cs6:max-w-[1248px] py-4">
          <a
            className="flex items-center w-[65px] cs5:w-[153px] hover:border-b border-b-white py-4"
            href="https://account.bbc.com/signin?realm=%2F&clientId=Account&context=news&ptrt=https%3A%2F%2Fwww.bbc.com%2Fnews&userOrigin=news_gnl&isCasso=false&action=sign-in&redirectUri=https%3A%2F%2Fsession.bbc.com%2Fsession%2Fcallback%3Frealm%3D%2F&service=IdSignInService&nonce=SnEoGcMb-HW50QnOnM_9HUzEqiE_gL_icmtk"
            target="_blank"
          >
            <UserIcon className="w-6 h-6 " />
            <div className="hidden cs5:block ml-[6px]">Sign In</div>
            <div className="hidden sm:block w-[1px] h-4 bg-gray-400 ml-auto my-auto"></div>
          </a>

          <ul className="hidden sm:flex flex-1 justify-around text-white">
            <li className="hover:underline decoration-white underline-offset-[12px] py-4">
              Home
            </li>
            <li className="hover:underline decoration-blue-700 underline-offset-[12px] py-4">
              News
            </li>
            <li className="hover:underline decoration-red-600 underline-offset-[12px] py-4">
              Sports
            </li>
            <li className="hidden cs1:block hover:underline decoration-green-400 underline-offset-[12px] py-4">
              Reel
            </li>
            <li className="hidden cs2:block hover:underline decoration-orange-400 underline-offset-[12px] py-4">
              Worklife
            </li>
            <li className="hidden cs3:block hover:underline decoration-purple-600 underline-offset-[12px] py-4">
              Travel
            </li>
            <li className="hidden cs4:block hover:underline decoration-orange-600 underline-offset-[12px] py-4">
              Future
            </li>
            <li className="hidden cs6:block hover:underline decoration-red-600 underline-offset-[12px] py-4">
              Culture
            </li>
          </ul>

          <div className="flex-1 flex justify-center items-center sm:order-[-1] sm:mr-3 sm:flex-initial py-4">
            <BbcIcon />
          </div>

          <div className="hidden sm:block mr-2 py-4">
            <TreeDotsIcon onClick={() => setExpandNavbar(!expandNavbar)} />
          </div>

          <div className="sm:hidden mx-3 py-4">
            <HamburgerIcon onClick={() => setExpandNavbar(!expandNavbar)} />
          </div>
          <div className="ml-[10px] cs6:hidden py-4">
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
      </div>
      {expandNavbar && (
        <>
          <div className="text-white bg-black flex flex-col justify-center sm:hidden">
            <div className="flex pt-3">
              <div className="flex-1">
                <ul className="grid grid-cols-2 text-[16px] leading-4 font-bold gap-y-[6px]">
                  <li className="py-4 hover:underline decoration-white underline-offset-[12px]">
                    Home
                  </li>
                  <li className="py-4 hover:underline decoration-green-300 underline-offset-[12px]">
                    News
                  </li>
                  <li className="py-4 hover:underline decoration-yellow-400 underline-offset-[12px]">
                    Sports
                  </li>
                  <li className="py-4 hover:underline decoration-purple-400 underline-offset-[12px]">
                    Reel
                  </li>
                  <li className="py-4 hover:underline decoration-red-500 underline-offset-[12px]">
                    Worklife
                  </li>
                  <li className="py-4 hover:underline decoration-blue-600 underline-offset-[12px]">
                    Travel
                  </li>

                  <li className="py-4 hover:underline decoration-orange-400 underline-offset-[12px]">
                    Future
                  </li>
                  <li className="py-4 hover:underline decoration-blue-700 underline-offset-[12px]">
                    Culture
                  </li>
                  <li className="py-4 hover:underline decoration-white underline-offset-[12px]">
                    TV
                  </li>
                  <li className="py-4 hover:underline decoration-red-600 underline-offset-[12px]">
                    Weather
                  </li>
                  <li className="py-4 hover:underline decoration-green-500 underline-offset-[12px]">
                    Sounds
                  </li>
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
                  <li className="py-4 cs1:hidden hover:underline decoration-purple-400 underline-offset-[12px]">
                    Reel
                  </li>
                  <li className="py-4 cs2:hidden hover:underline decoration-red-500 underline-offset-[12px]">
                    Worklife
                  </li>
                  <li className="py-4 cs3:hidden hover:underline decoration-blue-600 underline-offset-[12px]">
                    Travel
                  </li>

                  <li className="py-4 cs4:hidden hover:underline decoration-orange-400 underline-offset-[12px]">
                    Future
                  </li>
                  <li className="py-4 cs6:hidden hover:underline decoration-blue-700 underline-offset-[12px]">
                    Culture
                  </li>
                  <li className="py-4 hover:underline decoration-white underline-offset-[12px]">
                    TV
                  </li>
                  <li className="py-4 hover:underline decoration-red-600 underline-offset-[12px]">
                    Weather
                  </li>
                  <li className="py-4 hover:underline decoration-green-500 underline-offset-[12px]">
                    Sounds
                  </li>
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
        </>
      )}
    </div>
  );
};

export default Header;
