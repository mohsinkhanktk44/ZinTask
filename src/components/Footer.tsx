import React from "react";
import { FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex justify-start flex-col items-start  w-full">
      <div className="flex justify-start items-center w-full py-8">
        <div className="flex justify-between items-center w-[18%]">
          <p className="text-base font-medium text-text-dark mb-0">Follow us</p>
          <FaYoutube className="w-6 h-6 text-gray-700 hover:text-black" />
          <FaTwitter className="w-6 h-6 text-gray-700 hover:text-black" />
          <FaFacebookF className="w-6 h-6 text-gray-700 hover:text-black" />
        </div>
      </div>
      <hr className="w-full mt-2" />
      <div className="flex justify-between items-start w-full mt-9">
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-black font-medium pb-6">Internal Links</p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Documentries
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Themes
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Chrome Casts
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-black font-medium pb-6">Enterprise</p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Download Chrome Browser
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Chrome Browser For Enterprise
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Chrome Browser Devices
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            ChromeOS
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Google Cloud
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Google Work Space
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-black font-medium pb-6">Internal Links</p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Documentries
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Themes
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Chrome Casts
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-black font-medium pb-6">Enterprise</p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Download Chrome Browser
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Chrome Browser For Enterprise
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Chrome Browser Devices
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            ChromeOS
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Google Cloud
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Google Work Space
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-black font-medium pb-6">Internal Links</p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Documentries
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Themes
          </p>
          <p className="text-gray-700 hover:text-black cursor-pointer">
            Chrome Casts
          </p>
        </div>
      </div>
      <hr className="w-full mt-10" />
      <div className="flex justify-between items-center w-full my-11 ">
        <div className="flex items-center gap-1">
          <p className="text-3xl text-black font-bold mb-1">Similar</p>
          <span className="flex rounded-xl items-center h-[38px]  bg-black px-2">
            <p className="text-white leading-none text-xl font-bold">Watch</p>
          </span>
        </div>
        <div className="flex items-center gap-14 justify-end">
          <p className="text-sm hover:underline cursor-pointer text-gray-700 hover:text-black">
            Privacy Policy
          </p>
          <p className="text-sm hover:underline cursor-pointer text-gray-700 hover:text-black">
            Terms and conditions
          </p>
          <p className="text-sm hover:underline cursor-pointer text-gray-700 hover:text-black">
            Cookies policy
          </p>
          <p className="text-sm hover:underline cursor-pointer text-gray-700 hover:text-black">
            About us
          </p>
          <p className="text-sm hover:underline cursor-pointer text-gray-700 hover:text-black">
            EULA
          </p>
          <p className="text-sm hover:underline cursor-pointer text-gray-700 hover:text-black">
            Contact
          </p>
          <span className="flex justify-center items-center bg-[#dedede] w-12 h-12 rounded-full">
            <MdOutlineDarkMode className="w-5 h-5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
