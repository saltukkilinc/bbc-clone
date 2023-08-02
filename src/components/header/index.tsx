import React from "react";
import UserIcon from "../../assets/icons/userIcon";
import BbcIcon from "../../assets/icons/bbcIcon";
import TreeDotsIcon from "../../assets/icons/ThreeDotsIcon";
import HamburgerIcon from "../../assets/icons/hamburgerIcon";
import SearchIcon from "../../assets/icons/searchIcon";

const Header = () => {
  return (
    <div className="h-[64px] px-2 bg-[#000] flex flex-col justify-center">
      <div className="flex items-center">
        <UserIcon className="w-8 h-8" />
        <div className="flex-1 flex justify-center items-center">
          <BbcIcon />
        </div>
        <SearchIcon />
        <div className="ml-3"><HamburgerIcon /></div>
        <TreeDotsIcon className="hidden md:block"/>
      </div>
    </div>
  );
};

export default Header;
