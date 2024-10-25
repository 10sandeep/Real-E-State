import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-out-cubic",
      delay: 100,
    });
  }, []);

  const contactInfo = [
    { icon: FaEnvelope, text: "info@realestate.com" },
    { icon: FaPhone, text: "+1 (123) 456-7890" },
    { icon: FaMapMarkerAlt, text: "123 Main St, City, State 12345" },
  ];

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} py-20`}>
      <div className="container mx-auto px-4">
        <div 
          className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl shadow-2xl overflow-hidden`}
          data-aos="fade-up"
        >
          <div className="grid md:grid-cols-2">
            {/* Left side - Contact form */}
            <div className="p-10">
              <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>Get in Touch</h2>
              <form className="space-y-4">
                {["Name", "Email", "Phone"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field.toLowerCase()} className={`block mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{field}</label>
                    <input
                      type={field === "Email" ? "email" : field === "Phone" ? "tel" : "text"}
                      id={field.toLowerCase()}
                      className={`w-full px-4 py-2 rounded-lg ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className={`block mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Right side - Contact info and map */}
            <div className={`${darkMode ? "bg-gray-700" : "bg-gray-50"} p-10 flex flex-col justify-between`}>
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, text }, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Icon className={`w-6 h-6 ${darkMode ? "text-blue-400" : "text-blue-500"}`} />
                      <span className={darkMode ? "text-gray-300" : "text-gray-600"}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10">
              <div className="h-full min-h-[100px] lg:min-h-[300px]">

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1261086558117!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1613861437115!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;