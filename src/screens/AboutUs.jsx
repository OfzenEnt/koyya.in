import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "@/lib/ScrollToTop";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - 80,
            behavior: "smooth",
          });
        } else {
          setTimeout(scrollToHash, 100); // Retry if element not in DOM yet
        }
      }
    };
    scrollToHash();
  }, [location]);

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
  const managementTeam = [
    {
      name: "Krishna Mohan Koyya",
      title: "Chief Executive Officer & Managing Director",
      image: "imgs/krishna_img.png",
      description:
        "Koyya Enterprises is led by Krishna Mohan Koyya (Krishna), a seasoned technologist with over 25 years of experience in the IT industry. He holds a Master’s degree in Computer Science and Technology from Andhra University, Visakhapatnam. Krishna has held key roles at leading organizations such as Wipro and Cisco Systems, working across domains like GSM, Network Management, Distributed Computing, and E-commerce. In addition to his industry experience, Krishna has been a mentor and trainer to thousands of midcareer engineers at top multinational companies including Robert Bosch, Cisco, Samsung, Arcesium, and Intuit through corporate upskilling and training programs. His leadership combines deep technical expertise with a strong focus on building practical, impactful solutions.",
    },
    {
      name: "Karuna Koyya",
      title: "Founder Director",
      image: "imgs/krishna_img.png",
      description:
        "Karuna brings the human touch to Koyya Enterprises. As a key leader, she oversees peoplerelated initiatives and ensures a work environment where individuals feel valued, respected, and motivated. A graduate in Arts from Andhra University, Karuna also has deep knowledge and hands-on experience in horticulture, which adds a unique dimension to the company’s perspective — especially in areas related to agriculture and sustainability. Her ability to nurture talent and promote a people-first culture makes her an essential pillar of the organization’s growth and wellbeing.",
    },
    {
      name: "Amol Sriram Koyya",
      title: "Product Marketing Manager",
      image: "imgs/krishna_img.png",
      description:
        "Sriram plays a pivotal role in shaping and launching products and services in the agriculture and allied sectors. He holds a Bachelor's degree in Agricultural Science from the University of Mysore and a Postgraduate Diploma in Food Processing and Business Management from the Indian Institute of Plantation Management, Bengaluru. With a sharp understanding of agribusiness and a passion for innovation, Sriram brings fresh ideas and the drive to take them from concept to market. His energy, insight, and commitment to local relevance make him a key force in Krissaco’s product strategy and execution.",
    },
  ];
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* <header className="h-[150px] relative lg:h-[400px] bg-cover bg-center  overflow-clip flex items-center justify-center ">
        <img
          src="imgs/aboutheader.png"
          alt=""
          className="absolute w-full object-cover opacity-35 blur-[1px]"
        />
        <div className="p-6 flex flex-col justify-center items-center rounded-md">
          <h1 className="text-black relative text-5xl font-bold">About us</h1>
          <p className="text-gray-600 relative mt-1">
            <Link to="/">Home</Link> → About
          </p>
        </div>
      </header> */}

      <div className="lg:px-16 py-5" id="top">
        {/* About Koyya */}
        <section className="flex flex-col lg:flex-row gap-16 md:gap-5 2xl:gap-32 p-10 ">
          <div className="flex-1/2 grid grid-cols-3 gap-4 overflow-hidden">
            {!loaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-koyya2 animate-pulse rounded-lg" />
            )}
            <img
              src="imgs/empolyees.jpg"
              alt="Employees"
              onLoad={() => setLoaded(true)}
              className="rounded-lg col-span-1 h-full object-cover"
            // data-aos="fade-right"
            />
            <div className="col-span-2 grid grid-rows-2 gap-4">
              {!loaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-koyya2 animate-pulse rounded-lg" />
              )}
              <img
                src="imgs/workplace.jpg"
                alt="Workplace"
                onLoad={() => setLoaded(true)}
                className={`rounded-lg w-full h-full row-span-1 object-cover ${loaded ? "opacity-100" : "opacity-0"}`}
              // data-aos="fade"
              />
              <div className="grid grid-cols-2 row-span-2 gap-4">
                {!loaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-koyya2 animate-pulse rounded-lg" />
                )}
                <img
                  src="imgs/2149241221.jpg"
                  alt="Teamwork"
                  onLoad={() => setLoaded(true)}
                  className={`rounded-lg object-cover h-full ${loaded ? "opacity-100" : "opacity-0"}`}
                // data-aos="fade-up"
                />
                <div
                  className="bg-koyya1 text-white text-center flex items-center justify-center lg:text-xl md:text-base text-sm font-semibold p-5 rounded-lg"
                // data-aos="fade-up"
                >
                  25+
                  <br />
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1/2 flex flex-col bg-blue-100 xl:p-8 p-4 rounded-lg  w-full gap-4 xl:gap-6 xl:text-lg text-sm ">
            {/* <h3 className="text-blue-800 text-center  lg:text-3xl text-xl font-bold">
              About Koyya
            </h3> */}

            <p className="mb-4 lg:text-base text-sm text-justify hyphens-auto">
              <strong>Koyya Enterprises Private Limited (KEPL)</strong>,
              headquartered in Bengaluru, operates across two key sectors:
              Technology and Agriculture. The company is structured into two
              distinct verticals — Glarimy Business Unit and Krissaco Business
              Unit — each with a clear focus and purpose. <br />
              <br />
            </p>
            <p className="mb-4 lg:text-base text-sm text-justify hyphens-auto">
              <strong> Glarimy</strong> is dedicated to developing innovative
              technology-driven products and services. Leveraging modern
              advancements such as Cloud Computing and Artificial
              Intelligence, the unit delivers SaaS solutions and
              cross-platform mobile applications tailored to various business
              domains. In addition, Glarimy provides technology consulting,
              corporate training, and upskilling programs designed to empower
              teams and organizations in their digital transformation
              journeys.
            </p>
            <br />
            <p >
              <strong>Krissaco</strong> is focused on creating impactful
              solutions for the agriculture and allied sectors. The unit
              develops productivity tools and data-driven platforms using IoT,
              AI, and Cloud technologies, catering to domains such as
              agriculture, horticulture, and food processing. Krissaco is also
              working on launching its own product lines in coffee and millets.
              To support other agribusinesses, the unit offers marketing
              services with an emphasis on digital strategies — including
              e-commerce onboarding, market research, and more.
            </p>
            <div>
              <h3 className="text-[#005592f8] font-semibold lg:mb-2 lg:text-xl">
                Mission
              </h3>
              <p className="flex items-center text-justify text-sm lg:text-base hyphens-auto">
                Our mission is to leverage cutting-edge technologies to solve
                real-world problems, focusing on technology and agriculture to
                create meaningful impact and value.
              </p>
            </div>
          </div>
        </section>
        {/* mascots */}
        <section
          className="px-10 gap-6 flex flex-col lg:mt-10 items-center"
          id="mascots"
        >
          <div>
            <img
              src="koyya_logo.png"
              alt="Koyya Logo"
              className="md:h-16 h-16 lg:w-36 lg:h-auto mb-5"
            ></img>
          </div>
          <div className="lg:p-6 p-5 bg-violet-100 rounded-lg">
            {/* <h2 className="text-xl font-bold mb-4 ">Our Story</h2> */}
            <p className="text-gray-700 lg:text-base text-sm text-justify hyphens-auto">
              The name Koyya is derived from the{" "}
              <strong>family name of the founders</strong>, Krishna Mohan Koyya
              and Karuna Koyya. The company is a natural evolution and spiritual
              successor of Glarimy Technology Services, a corporate training and
              technology consulting firm that Krishna successfully ran from 2010
              to 2024. <br />
              <br />
              Glarimy Technology Services specialized in technology{" "}
              <strong>upskilling and consulting</strong>, serving an impressive
              portfolio of clients including HSBC, Cisco, Robert Bosch, Samsung,
              Rakuten, Flipkart, and many more. <br />
              <br />
              Koyya Enterprises Private Limited (KEPL) was{" "}
              <strong>founded in 2023</strong> when Krishna and Sriram came
              together to expand the vision moving beyond consulting into the
              development of meaningful products and services, particularly in
              the domains of education and agriculture. KEPL is the result of
              this shared ambition to combine profit with purpose and innovation
              with impact.
            </p>
          </div>

          <div className="flex flex-col mt-5 lg:mx-20 gap-8">
            <div className="flex flex-col lg:flex-row items-center w-full">
              <Link
                to="https://www.glarimy.com "
                target="_blank"
                className="relative flex items-center justify-center bg-white w-2/4 lg:w-1/4"
              >
                {/* SVG Background */}
                <svg
                  width="644"
                  height="619"
                  viewBox="0 0 644 619"
                  className="absolute w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M276.878 0.0151888C355.694 -1.19728 409.204 70.4405 469.026 121.771C537.141 180.217 636.519 224.379 642.711 313.918C649.025 405.232 567.988 476.134 497.576 534.616C434.708 586.831 358.544 614.68 276.878 617.764C191.364 620.994 95.3019 616.259 38.8578 551.938C-15.9359 489.498 0.195596 396.382 10.2415 313.918C18.7438 244.126 45.0357 181.179 90.5527 127.593C141.212 67.9538 198.637 1.21882 276.878 0.0151888Z"
                    fill="#8ec5ff"
                  />
                </svg>
                {/* Foreground */}
                <div className="z-10 text-center">
                  <img
                    src="imgs/glarify_logo.png"
                    alt="Character"
                    className="w-[60%] md:w-[55%] md:pt-6 mx-auto mt-6 lg:mt-0"
                  />
                </div>
              </Link>
              <div className="flex flex-col justify-center w-full lg:w-3/4 mt-5 lg:ml-5">
                <div>
                  <h3 className="font-bold lg:text-lg text-base mb-2">
                    Glarimy
                  </h3>
                  <p className="italic lg:text-base text-sm">
                    Curious | Creative | Tech-savvy
                  </p>
                </div>
                <p className="mt-4 lg:text-base text-sm text-justify hyphens-auto">
                  Glarimy represents today’s tech-savvy young talent. She is
                  cheerful, modern, and open-minded — driven by curiosity and a
                  passion for solving problems with out-of-the-box thinking. She
                  embodies creativity, optimism, and the transformative power of
                  technology.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full">
              <Link
                to="https://www.krissaco.com "
                target="_blank"
                className="relative flex items-center justify-center bg-white w-2/4 lg:w-1/4"
              >
                {/* SVG Background */}
                <svg
                  width="644"
                  height="619"
                  viewBox="0 0 644 619"
                  className="absolute w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M276.878 0.0151888C355.694 -1.19728 409.204 70.4405 469.026 121.771C537.141 180.217 636.519 224.379 642.711 313.918C649.025 405.232 567.988 476.134 497.576 534.616C434.708 586.831 358.544 614.68 276.878 617.764C191.364 620.994 95.3019 616.259 38.8578 551.938C-15.9359 489.498 0.195596 396.382 10.2415 313.918C18.7438 244.126 45.0357 181.179 90.5527 127.593C141.212 67.9538 198.637 1.21882 276.878 0.0151888Z"
                    fill="#b9f8cf"
                  />
                </svg>
                {/* Foreground */}
                <div className="z-10 text-center">
                  <img
                    src="imgs/krissaco_logo.png"
                    alt="Character"
                    className="w-[60%] md:w-[65%] mx-auto"
                  />
                </div>
              </Link>
              <div className="flex flex-col justify-center w-full lg:w-3/4 mt-5 lg:ml-5">
                <div>
                  <h3 className="font-bold lg:text-lg text-base mb-2">
                    Krissaco
                  </h3>
                  <p className="italic lg:text-base text-sm">
                    Grounded | Visionary | Future-Ready
                  </p>
                </div>
                <p className="mt-4 lg:text-base text-sm text-justify hyphens-auto">
                  Krissaco stands for the spirit of the modern agriculturist.
                  Energetic, forward-looking, and rooted in tradition, he
                  represents a generation that’s reimagining agriculture through
                  innovation. By embracing technology and sustainable practices,
                  Krissaco aspires to add value to agricultural produce and
                  build a stronger future for farming communities.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* leadership */}
        <section className="py-10 px-6 md:px-12 lg:mt-10" id="leadership">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1f2c56] mb-8 ">
            Leadership
          </h2>
          <div className="space-y-3">
            {managementTeam.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg items-center lg:items-center flex flex-col lg:flex-row p-6 lg:p-0">
                {!loaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-koyya2 animate-pulse rounded-lg" />
                )}
                <img
                  src="/imgs/krishna_img.png"
                  alt={member.name}
                  onLoad={() => setLoaded(true)}
                  className="w-32 h-32 lg:w-44 lg:h-44 rounded-full object-cover ml-5 shadow-md border-2 border-white"
                />
                <div
                  className={`flex items-center lg:items-start flex-col p-6 flex-3/4`}
                >
                  <h3 className="text-lg lg:text-xl text-center  font-semibold text-[#154C8C]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-center font-medium text-[#7b7b7b] mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-700 hidden lg:flex text-sm lg:text-base leading-relaxed text-justify hyphens-auto">
                    {member.description}
                  </p>
                </div>

                <p className="text-gray-700 flex lg:hidden text-sm leading-relaxed text-justify ">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default AboutUs;
