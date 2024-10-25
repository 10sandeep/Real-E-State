import React, { useEffect } from 'react';
import aboutimg from "../assets/images/about.jpeg";
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <section
      id="about"
      className={`${
        darkMode ? 'dark bg-black' : 'light bg-transparent'
      } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
    >
      <div>
        <img
          data-aos="zoom-in"
          src={aboutimg}
          alt="about image"
          className="rounded-2xl lg:w-[500px] lg:h-[500px]"
        />
      </div>
    <div className='flex flex-col justify-center items-start gap-8'>
<h1 data-aos='zoom-out' className='text-sky-500 dark:text-white'>WHO WE ARE?</h1>

<h1 data-aos='zoom-out' data-aos-delay="200" className='text-black text-[40px] font-semibold leading-10 dark:text-white'>
Expert real estate professionals committed to helping you find your dream home.
</h1>
<p data-aos='zoom-in' data-aos-delay='400' className='text-xl text-gray-600 darkk:text-white text-justify'>
We are a dedicated team of real estate professionals with years of experience, committed to providing personalized service to help you find the perfect home. Whether buying or selling, we guide you through every step of the process with expertise and care.
</p>
    <button className="bg-sky-600 dark:bg-sky-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold
              rounded-xl cursor-pointer transform hover:scale-110 transition-transform  duration-300">
                   KNOW MORE
              </button>
    </div>
    </section>
  );
};

export default About;
