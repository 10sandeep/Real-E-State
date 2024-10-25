import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop5 from "../assets/images/prop5.jpeg";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
      <footer
        className={`${
          darkMode ? "bg-black" : "bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h2 className="text-white text-2xl font-semibold">About Us</h2>
          <p className="text-slate-100 text-justify">
            Our real estate website is dedicated to connecting buyers and
            sellers, offering a seamless experience with expert guidance,
            comprehensive property listings, and personalized service to help
            you find your dream home or investment.
          </p>
          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
              <div key={index} className="p-3 rounded-xl bg-white hover:bg-sky-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
          <p className="text-white mt-8">© 2024 Real Estate. All Rights Reserved.</p>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h2 className="text-white text-2xl font-semibold">Contact Us</h2>
          {[
            { Icon: FaBuilding, text: "123 Main Street, City, State 12345" },
            { Icon: FaFax, text: "456-834-944" },
            { Icon: FaMobile, text: "845-683-4944" },
            { Icon: IoMdMail, text: "contact@realestate.com" },
          ].map(({ Icon, text }, index) => (
            <div key={index} className="flex items-start gap-3">
              <Icon className="text-white w-5 h-5" />
              <p className="text-slate-200">{text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-start gap-3">
          <h2 className="text-white text-2xl font-semibold">Latest Properties</h2>
          {[1, 2].map((item) => (
            <div key={item} className="flex items-start gap-4">
              <img src={prop5} alt={`Property ${item}`} className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300" />
              <div>
                <h3 className="text-lg text-white">Villa with Amazing Views</h3>
                <p className="text-slate-400">$345,880</p>
              </div>
            </div>
          ))}
        </div>
      </footer>
      
      <Link to="hero" spy={true} smooth={true} offset={-100} className="fixed lg:bottom-12 bottom-6 right-6">
        <div className="bg-sky-600 p-4 rounded-full hover:bg-black cursor-pointer">
          <FaArrowUp className="w-6 h-6 text-white" />
        </div>
      </Link>
    </>
  );
};

export default Footer;