import React from "react";
import UserIcon from "../../assets/icons/userIcon";
import BbcIcon from "../../assets/icons/bbcIcon";
import TreeDotsIcon from "../../assets/icons/ThreeDotsIcon";
import HamburgerIcon from "../../assets/icons/hamburgerIcon";
import SearchIcon from "../../assets/icons/searchIcon";

const Header = () => {
  return (
    <div className="h-[64px] px-2 bg-[#000] flex flex-col justify-center text-white">
      <div className="flex items-center">
        <div className="hidden sm:block mr-3">
          <BbcIcon />
        </div>
        <div className="mx-2 flex">
          <UserIcon className="w-8 h-8" />
          <div className="hidden px-2 sm:flex cs5:p-0">
            <div className="hidden cs5:block ml-[6px] w-[65px] flex-1">
              Sign In
            </div>
            <div className="border border-white"></div>
          </div>
        </div>
        <ul className="hidden sm:flex flex-1 justify-around text-white">
          <li>Home</li>
          <li>News</li>
          <li>Sports</li>
          <li className="hidden cs1:block">Reel</li>
          <li className="hidden cs2:block">Worklife</li>
          <li className="hidden cs3:block">Travel</li>
          <li className="hidden cs4:block">Future</li>
        </ul>
        
        <div className="flex-1 flex justify-center items-center sm:hidden">
          <BbcIcon />
        </div>

        <div className="hidden sm:block mr-2">
          <TreeDotsIcon />
        </div>

        <div className="sm:hidden mx-3">
          <HamburgerIcon />
        </div>
        <div className="mx-[10px]">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
