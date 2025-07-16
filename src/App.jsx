import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import Testimonials from "./components/Testimonials";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./lib/ScrollToTop";
import { useInView } from "react-intersection-observer";
import { Marquee } from "./components/magicui/marquee";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  const clientLogos = [
    { src: "imgs/clients/samsung_logo.svg", alt: "Samsung" },
    { src: "imgs/clients/cisco_logo.svg", alt: "Cisco" },
    { src: "imgs/clients/bosch_logo.svg", alt: "Bosch" },
    { src: "imgs/clients/rakuten_logo.svg", alt: "Rakuten" },
    { src: "imgs/clients/hsbc_logo.svg", alt: "HSBC" },
    { src: "imgs/clients/flipkart_logo.svg", alt: "Flipkart" },
    { src: "imgs/clients/arcesium_logo.svg", alt: "Arcesium" },
  ];
  const NumberCounter = ({ endValue }) => {
    const { ref, inView } = useInView({
      triggerOnce: true, // only trigger once
      threshold: 1, // trigger when 30% of component is visible
    });

    return (
      <div ref={ref}>
        {inView && (
          <CountUp
            start={0}
            end={endValue}
            duration={2}
            separator=","
            suffix=" "
            className="text-2xl font-semibold text-center text-[#005592f8]"
          />
        )}
      </div>
    );
  };
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* Hero section */}
      <section className="relative bg-gradient-to-br from-blue-100 via-pink-50 to-blue-50 p-10 md:px-24  space-y-10 overflow-hidden">
        {/* Left Text */}
        <h1 className="bg-gradient-to-r from-blue-900  to-green-300 text-transparent inline-block bg-clip-text text-3xl sm:text-4xl lg:text-5xl font-bold leading-normal">
          Empowering Agriculture
          and <br /> Technology
          Naturally Innovative.
        </h1>
        <Testimonials />
      </section>
      {/* Announcements Section */}
      <section className="py-16 bg-white px-6 md:px-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-blue-600">
              Our Product & Services
            </h2>
            <p className="text-gray-600 mt-4">
              Innovative technology solutions designed to meet the diverse needs of businesses, educational institutions, and agricultural sectors.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg border px-6">
              <div className="flex items-center justify-center w-24 h-24  bg-blue-100 rounded-full mt-10">
                <img
                  src="/imgs/building.svg"
                  alt="Coffee Launch"
                  className="w-14 h-14"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-900 z-10">
                  Business Solutions
                </h3>
                <p className="text-gray-600 mt-3 max-w-xs text-justify hyphens-auto">
                  Coporate training, software development, and IT consulting services tailored for business growth.
                </p>
                <Link
                  to="/Explore#business-solutions"
                  className="mt-6 flex items-center gap-3 px-5 py-2 text-lg text-indigo-500 hover:text-indigo-900 transition cursor-pointer">
                  Explore <FaLongArrowAltRight className="text-10" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl border px-6">
              <div className="flex items-center justify-center w-24 h-24  bg-[#E5FBFF] rounded-full mt-10">
                <FaGraduationCap className="w-16 h-16 text-[#00D7FF]" />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Education Services
                </h3>
                <p className="text-gray-600 mt-3 max-w-xs text-justify hyphens-auto">
                  Academic workshops, GRIP program, and Glarimy Wiz designed for education advancement.
                </p>
                <Link
                  to="/Explore#educational-services"
                  className="mt-6 flex items-center gap-3 px-5 py-2 text-lg text-blue-400 hover:text-blue-600 transition cursor-pointer">
                  Explore <FaLongArrowAltRight className="text-10" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg border px-6 ">
              <div className="flex items-center justify-center w-24 h-24  bg-green-100 rounded-full mt-10">
                <img
                  src="/imgs/leaf.svg"
                  alt="Partnership"
                  className="w-20 h-20"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  Agricultural echnology
                </h3>
                <p className="text-gray-600 mt-3 max-w-xs text-justify hyphens-auto">
                  Innovative solutions designed to specifically for the agricultural advancement and efficiency.
                </p>
                <Link
                  to="/Explore#agricultural-technology"
                  className="mt-6 flex items-center gap-3 px-5 py-2 text-lg text-green-500 hover:text-green-800 transition-all duration-300 cursor-pointer">
                  Explore <FaLongArrowAltRight className="text-10 " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our Clients */}
      <div className="py-10 px-4 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2c56] mb-10 ">
          Our Clients
        </h2>
        <div className="flex flex-wrap justify-center items-center ">
          <Marquee pauseOnHover className="[--duration:20s]">
            {clientLogos.map((client, idx) => (
              <img
                key={idx}
                src={client.src}
                alt={client.alt}
                className="h-8 md:h-10 object-contain px-5 hover:grayscale-0 transition duration-300"
              />
            ))}
          </Marquee>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
