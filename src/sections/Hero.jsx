import React from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/Hero1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode,toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto  bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="fade-up"
            className="text-6xl text-white font-semibold lg:pl-[500px] pl-0 lg:leading-[70px] leading-[60px]"
          >
            Find Your Next Home in Las Vegas
          </h1>
          <p
            data-aos="fade-up"
            className="text-white text-xl lg:pl-[500px] pl-0"
          >
            Discover your dream home with us. Whether you're buying, selling, or
            renting, we offer personalized solutions that make finding the
            perfect property easy and stress-free. Let our expert team guide you
            through every step, ensuring a seamless real estate experience
            tailored to your unique needs.
          </p>
        </section>
      </div>

      <div
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } z-10`}
      >
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-400" : "light bg-gray-200"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          {/* Form elements go here */}
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter an Address,state,city or pincode"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-grey-500 text-md"
            >
              <option value="" disable selected>
                Select Property
              </option>
              <option value="option1">Rentals</option>
              <option value="option1">Sales</option>
              <option value="option1">Commercials</option>
            </select>
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">CATEGORY</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-grey-500 text-md"
            >
              <option value="" disable selected>
            Property Category
              </option>
              <option value="option1">Apartments</option>
              <option value="option1">Duplex</option>
              <option value="option1">Condos</option>
             
            </select>
          </div>

              <div className="w-full">
              <button className="bg-sky-600 dark:bg-sky-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold
              rounded-xl cursor-pointer transform hover:scale-110 transition-transform  duration-300">
                   SUBMIT
              </button>

              </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
