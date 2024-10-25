import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import img1 from '../assets/images/img3.jpeg';
import img2 from '../assets/images/img4.jpeg';
import img3 from '../assets/images/img5.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularAreas = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section
        className={`${
          darkMode ? 'dark bg-gray-800' : 'light bg-sky-200'
        } lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`}
      >
        <div id="top" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          <div>
            <h1 data-aos="zoom-in" className="text-sky-500 dark:text-white">
              POPULAR AREAS
            </h1>
            <h1 data-aos="zoom-in" className="text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white">
              Explore the most popular areas <br /> in our city
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="h-[400px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${img1})` }} 
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="h-[400px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
             className="h-[400px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
          </div>
        </div>
        <div id='bottom' className='w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-center gap-6'>
        <div data-aos='slide-up' data-aos-delay='200' className='flex justify-center lg:items-center gap-8 w-full'>
 <h1 className='text-black text-7xl font-semibold dark:text-white'>5K</h1>
 <h1>ACTIVE <br></br>LISTINGS</h1>
        </div>

        <div data-aos='slide-up' data-aos-delay='200' className='flex justify-center lg:items-center gap-8 w-full'>
 <h1 className='text-black text-7xl font-semibold dark:text-white'>9K</h1>
 <h1>SOLID<br></br>LISTINGS</h1>
        </div>
        <div data-aos='slide-up' data-aos-delay='200' className='flex justify-center lg:items-center gap-8 w-full'>
 <h1 className='text-black text-7xl font-semibold dark:text-white'>6K</h1>
 <h1>CLIENTS<br></br>WE'VE SERVED</h1>
        </div>
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
