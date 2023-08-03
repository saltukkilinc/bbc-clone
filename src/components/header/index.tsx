import React, { useState } from "react";
import UserIcon from "../../assets/icons/userIcon";
import BbcIcon from "../../assets/icons/bbcIcon";
import TreeDotsIcon from "../../assets/icons/ThreeDotsIcon";
import HamburgerIcon from "../../assets/icons/hamburgerIcon";
import SearchIcon from "../../assets/icons/searchIcon";
import SmallSeacrhIcon from "../../assets/icons/smallSeacrhIcon";
import CloseIcon from "../../assets/icons/closeIcon";

const Header = () => {
  const [ expandNavbar, setExpandNavbar ] = useState<boolean>(true);

  return (
    <div className="px-2 bg-[#000] flex flex-col  text-white">
      <div className="h-[64px]  flex justify-center items-center">
        <div className="flex flex-1 items-center cs5:max-w-[976px] cs5:justify-center cs6:max-w-[1248px] ">
          <a
            className="mx-2 flex items-center sm:border-r sm:border-r-white w-[65px] cs5:w-[153px] hover:underline decoration-white underline-offset-[12px]"
            href="https://account.bbc.com/signin?realm=%2F&clientId=Account&context=news&ptrt=https%3A%2F%2Fwww.bbc.com%2Fnews&userOrigin=news_gnl&isCasso=false&action=sign-in&redirectUri=https%3A%2F%2Fsession.bbc.com%2Fsession%2Fcallback%3Frealm%3D%2F&service=IdSignInService&nonce=SnEoGcMb-HW50QnOnM_9HUzEqiE_gL_icmtk"
            target="_blank"
          >
            <UserIcon className="w-6 h-6" />
            <div className="hidden cs5:block ml-[6px]">Sign In</div>
          </a>

          <ul className="hidden sm:flex flex-1 justify-around text-white">
            <li className="hover:underline decoration-white underline-offset-[12px]">
              Home
            </li>
            <li className="hover:underline decoration-blue-700 underline-offset-[12px]">
              News
            </li>
            <li className="hover:underline decoration-red-600 underline-offset-[12px]">
              Sports
            </li>
            <li className="hidden cs1:block hover:underline decoration-green-400 underline-offset-[12px]">
              Reel
            </li>
            <li className="hidden cs2:block hover:underline decoration-orange-400 underline-offset-[12px]">
              Worklife
            </li>
            <li className="hidden cs3:block hover:underline decoration-purple-600 underline-offset-[12px]">
              Travel
            </li>
            <li className="hidden cs4:block hover:underline decoration-orange-600 underline-offset-[12px]">
              Future
            </li>
          </ul>

          <div className="flex-1 flex justify-center items-center sm:order-[-1] sm:mr-3 sm:flex-initial">
            <BbcIcon />
          </div>

          <div className="hidden sm:block mr-2">
            <TreeDotsIcon onClick={() => setExpandNavbar(!expandNavbar)} />
          </div>

          <div className="sm:hidden mx-3">
            <HamburgerIcon onClick={() => setExpandNavbar(!expandNavbar)}/>
          </div>
          <div className="mx-[10px] cs6:hidden">
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
        <div className="text-white bg-black flex flex-col justify-center">
          <div className="flex pt-3">
            <div className="flex-1">
              <ul className="grid grid-cols-2">
                <li className="py-4 hover:border-b border-b-white">Home</li>
                <li className="py-4">News</li>
                <li className="py-4">Sports</li>
                <li className="py-4">Travel</li>
                <li className="py-4">Worklife</li>
                <li className="py-4">Travel</li>
                <li className="py-4">Future</li>
                <li className="py-4">Culture</li>
                <li className="py-4">TV</li>
                <li className="py-4">Weather</li>
                <li className="py-4">Sounds</li>
              </ul>
            </div>
            <div className="py-4"><CloseIcon /></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
