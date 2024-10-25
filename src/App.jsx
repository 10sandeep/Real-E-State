import React from "react";
import { DarkModeProvider } from "./components/DarkModeContext";
import Headers from "./components/Headers";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import Services from "./sections/Services";
import Clients from "./sections/clients";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Headers />
        <Hero />
        <About />
        <PopularAreas />
       <Properties/>
        <Services />
       <Clients/>
       <Contact/>
      <Footer/>
      
      </DarkModeProvider>
    </>
  );
};

export default App;
