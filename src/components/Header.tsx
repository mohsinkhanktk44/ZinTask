import React from "react";
import { IoMdSettings } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  const links = [
    "Stock Video",
    "Video Templates",
    "Music",
    "Sound Effect",
    "Graphic Templates",
    "Graphics",
    "Presentations Templates",
    "photos",
    "Fonts",
    "Add-Ons",
    "More",
  ];
  return (
    <div className="flex justify-center flex-col items-center w-full">
      <div className="flex justify-between items-center h-24 w-[95%]">
        <div className="flex justify-start items-center gap-2 w-[33.3%]">
          <div className="flex justify-center items-center bg-[#5f6af4] w-8 h-8 rounded-md">
            <IoMdSettings className="text-white w-5 h-5" />
          </div>
          <p className="text-black text-base font-extrabold">ZinTools</p>
        </div>

        <div className="flex justify-start relative items-center w-[33.3%] outline-none h-10 rounded-full bg-[#f2f2f2]">
          <input
            type="text"
            placeholder="Search for Movies, Tv Shows, Themes & Cast"
            className="outline-none text-sm w-[85%] bg-[#f2f2f2] shadow-none px-3 rounded-l-full h-8 border-r border-gray-300 "
          />
          <IoSearchSharp className="absolute right-5 h-5 w-5" />
        </div>

        <div className="flex justify-end items-center gap-4 w-[33.3%]">
          <button className="text-gray-500 px-2">Log in</button>
          <button className="w-24 h-10 flex justify-center items-center text-white bg-[#5f6af4] rounded-full">
            Sign up
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full shadow-md py-3">
        <div className="flex justify-start items-center w-[85%] ">
          <div className="flex justify-between items-center w-full">
            {links.map((item, index) => {
              return (
                <p className="text-sm text-gray-600 font-medium cursor-pointer">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
