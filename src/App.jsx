import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./lib/ScrollToTop";
import { useInView } from "react-intersection-observer";
import { Marquee } from "./components/magicui/marquee";
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaGraduationCap } from "react-icons/fa6";
import Carousel from "./components/Carousel";

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
      <section className="bg-gradient-to-br from-blue-100 via-pink-50 to-blue-50 p-10 overflow-hidden">
        <Carousel />
      </section>
      {/* Announcements Section */}
      <section className="py-16 bg-white px-6 md:px-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-koyya2">
              Our Product & Services
            </h2>
            <p className="text-gray-600 mt-4 mb-10">
              Innovative technology solutions designed to meet the diverse needs of businesses, educational institutions, and agricultural sectors.
            </p>
            <div className='bg-white space-y-10 text-left -mb-10'>
              <div className='space-y-3'>
                <h1 className='text-koyya2 md:3xl text-2xl font-semibold'>Business Solutions </h1>
                <p className='text-gray-500'>Comprehensive services designed to enhance business operations and growth</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 mt-8'>
                {[
                  { bg: "bg-blue-50", icon: "/imgs/corporatelogo.svg", title: "Corporate Training", desc: "Specialized training programs designed to enhance workforce skills.", link: "/services/corporate-training", other: ["Technical Skills", "Team Building"] },
                  { bg: "bg-sky-50", icon: "/imgs/tech_skills.svg", title: "Software Development", desc: "Custom software solutions tailored to meet specific business needs.", link: "/services/software-development", other: ["Web Development", "App Development"] },
                  { bg: "bg-violet-100", icon: "/imgs/handshake.svg", title: "Consulting Services", desc: "Expert guidance on technology strategy, digital transformation.", link: "/services/consulting", other: ["IT Strategy", "Digital Transformation"] },
                ].map((service, index) => (
                  <Link to={service.link} className='border p-1 rounded-xl overflow-hidden  shadow-lg hover:shadow-xl transition ' key={index}>
                    <div className={`${service.bg} w-full h-52 flex justify-center items-center p-8 rounded-t-lg`}>
                      <img src={service.icon}
                        alt={service.title}
                        className='w-28 object-cover' />
                    </div>
                    <div className="bg-white p-3 space-y-2 text-koyya2">
                      <h2 className='text-2xl font-bold mt-4 '>{service.title}</h2>
                      <p className='text-gray-600 mt-2 max-w-md'>{service.desc}</p>
                      <p className={`text-xs py-2 flex gap-3`}><span className={`bg-gray-50 p-2 rounded-sm shadow-sm`}>{service.other[0]}</span> <span className={`bg-gray-50 p-2 rounded-sm shadow-sm`}>{service.other[1]}</span></p>
                      <Link
                        to={service.link}
                        className={`relative overflow-hidden border flex items-center w-36 rounded-md gap-3 p-2 group transition-colors duration-300`}
                      >
                        <span
                          className="absolute inset-0 left-0 w-0 bg-koyya2 z-0 transition-all duration-300 group-hover:w-full"
                          aria-hidden="true"
                        />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                          Read More <FaArrowRightLong size={14} />
                        </span>
                      </Link>
                    </div>
                  </Link>))}
              </div>
              <div className='space-y-3'>
                <h1 className='text-koyya2 md:3xl text-2xl font-semibold'>Educational Services </h1>
                <p className='text-gray-500'>Innovative educational solutions designed for academic excellence and professional development</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mt-8'>
                {[
                  { bg: "bg-[#FFFBEB]", text: "text-orange-400", button: "hover:bg-orange-400 hover:text-white", icon: "/imgs/teacher.svg", title: "Academic Workshops", desc: "Interactive workshops designed to enhance learning experiences and develop practical skills for students and faculty.", link: "/services/academic-workshops" },
                  {
                    bg: "bg-[#EEF2FF]", button: "hover:bg-koyya2 hover:text-white", icon: "/imgs/breifcaselogo.svg", title: "GRIP Program", desc: "Graduate Readiness and Industry Preparedness program bridging academia and industry gaps.", link: "/services/grip"
                  },
                  { bg: "bg-[#E5FBFF]", text: "text-sky-500", button: "hover:bg-sky-400 hover:text-white", icon: "/imgs/mobilelogo.svg", title: "Glarimy Wiz", desc: "An intelligent learning platform that adapts to individual learning styles and pace, enhancing educational outcomes.", link: "/services/glarimy-wiz" },
                ].map((service, index) => (
                  <Link to={service.link} className='border p-1 rounded-xl overflow-hidden  shadow-lg hover:shadow-xl transition ' key={index}>
                    <div className={`${service.bg} w-full h-52 flex justify-center items-center p-8 rounded-t-lg`}>
                      <img src={service.icon}
                        alt={service.title}
                        className='w-28 object-cover' />
                    </div>
                    <div className="bg-white p-3 space-y-2 text-koyya2">
                      <h2 className='text-2xl font-bold mt-4 '>{service.title}</h2>
                      <p className='text-gray-600 mt-2 max-w-md '>{service.desc}</p>
                      <Link
                        to={service.link}
                        className={`relative overflow-hidden border flex items-center w-36 rounded-md gap-3 p-2 group transition-colors duration-300 `}
                      >
                        <span
                          className="absolute inset-0 left-0 w-0 bg-koyya2 z-0 transition-all duration-300 group-hover:w-full"
                          aria-hidden="true"
                        />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                          Read More <FaArrowRightLong size={14} />
                        </span>
                      </Link>
                    </div>
                  </Link>))}
              </div>
              <div className='space-y-3'>
                <h1 className='text-koyya2 md:3xl text-2xl font-semibold'>Agricultural Technology </h1>
                <p className='text-gray-500'>Innovative solutions designed to revolutionize agricultural practices and enhance productivity</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mt-8'>
                {[
                  { bg: "bg-[#F3F2FD]", text: "text-gray-600", icon: "/imgs/savetreelogo.svg", title: "Krissaco Sleek", desc: "A SaaS solution for the food processing industry to optimise the operations driven by data.", link: "/services/krissaco-sleek" },
                  { bg: "bg-[#F0FDFA]", text: "text-green-400", icon: "/imgs/mobilewithplantlogo.svg", title: "Krissaco Drip", desc: "he farmer friendly iOT system is your own lab. Measure the important soil parameters like a pro. I", link: "/services/krissaco-drip" },
                  { bg: "bg-[#E0F2FE]", text: "text-blue-500", icon: "/imgs/bulkhornlogo.svg", title: "Digital Marketing", desc: "Comprehensive digital marketing strategies to enhance online presence, drive traffic, and convert leads into customers.", link: "/services/digital-marketing" },
                  { bg: "bg-[#FFFBEB]", text: "text-orange-400", icon: "/imgs/baglogo.svg", title: "Krissaco Urban Brews Coffee", desc: "the premium coffee powder from the plantations of Coorg, Chikmaguluru is a class of its own.", link: "/services/urban-brews" },
                  { bg: "bg-[#F1F6FE]", text: "text-blue-700", icon: "/imgs/graphlogo.svg", title: "Market Research", desc: "want to track how your products is working in the market? Want to assess your competition. ", link: "/services/market-research" },
                ].map((service, index) => (
                  <Link to={service.link} className='border p-1 rounded-xl overflow-hidden  shadow-lg hover:shadow-xl transition ' key={index}>
                    <div className={`${service.bg} w-full h-52 flex justify-center items-center p-8 rounded-t-lg`}>
                      <img src={service.icon}
                        alt={service.title}
                        className='w-28 object-cover' />
                    </div>
                    <div className="bg-white p-3 space-y-2 text-koyya2">
                      <h2 className='text-2xl font-bold mt-4 '>{service.title}</h2>
                      <p className='text-gray-600 mt-2 max-w-md'>{service.desc}</p>
                      <Link
                        to={service.link}
                        className={`relative overflow-hidden border flex items-center w-36 rounded-md gap-3 p-2 group transition-colors duration-300`}
                      >
                        <span
                          className="absolute inset-0 left-0 w-0 bg-koyya2 z-0 transition-all duration-300 group-hover:w-full"
                          aria-hidden="true"
                        />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                          Read More <FaArrowRightLong size={14} />
                        </span>
                      </Link>
                    </div>
                  </Link>))}
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            <div></div>


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
          </div> */}
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
