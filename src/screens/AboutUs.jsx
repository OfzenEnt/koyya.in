import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "@/lib/ScrollToTop";
import { Marquee } from "@/components/magicui/marquee";

const AboutUs = () => {
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
      image: "imgs/krishna_img.png", // Replace with the correct path to your image
      description:
        "Koyya Enterprises is led by Krishna Mohan Koyya (Krishna), a seasoned technologist with over 25 years of experience in the IT industry. He holds a Master’s degree in Computer Science and Technology from Andhra University, Visakhapatnam. Krishna has held key roles at leading organizations such as Wipro and Cisco Systems, working across domains like GSM, Network Management, Distributed Computing, and E-commerce. In addition to his industry experience, Krishna has been a mentor and trainer to thousands of midcareer engineers at top multinational companies including Robert Bosch, Cisco, Samsung, Arcesium, and Intuit through corporate upskilling and training programs. His leadership combines deep technical expertise with a strong focus on building practical, impactful solutions.",
    },
    {
      name: "Karuna Koyya",
      title: "Founder Director",
      image: "imgs/krishna_img.png", // Replace with the correct path to your image
      description:
        "Karuna brings the human touch to Koyya Enterprises. As a key leader, she oversees people-related initiatives and ensures a work environment where individuals feel valued, respected, and motivated. A graduate in Arts from Andhra University, Karuna also has deep knowledge and hands-on experience in horticulture, which adds a unique dimension to the company’s perspective — especially in areas related to agriculture and sustainability. Her ability to nurture talent and promote a people-first culture makes her an essential pillar of the organization’s growth and wellbeing.",
    },
    {
      name: "Amol Sriram Koyya",
      title: "Product Marketing Manager",
      image: "imgs/krishna_img.png", // Replace with the correct path to your image
      description:
        "Sriram plays a pivotal role in shaping and launching products and services in the agriculture and allied sectors. He holds a Bachelor’s degree in Agricultural Science from the University of Mysore and a Postgraduate Diploma in Food Processing and Business Management from the Indian Institute of Plantation Management, Bengaluru. With a sharp understanding of agribusiness and a passion for innovation, Sriram brings freshideas and the drive to take them from concept to market. His energy, insight, and commitment to local relevance make him a key force in Krissaco’s product strategy and execution.",
    },
  ];
  const teamMembers = [
    {
      name: "Krishna Mohan Koyya",
      title: "Chief Executive Officer & Managing Director",
      image: "imgs/krishna_img.png", // Replace with the correct path to your image
      description:
        "Koyya Enterprises is led by Krishna Mohan Koyya (Krishna), a seasoned technologist with over 25 years of experience in the IT industry. He holds a Master’s degree in Computer Science and Technology from Andhra University, Visakhapatnam. Krishna has held key roles at leading organizations such as Wipro and Cisco Systems, working across domains like GSM, Network Management, Distributed Computing, and E-commerce. In addition to his industry experience, Krishna has been a mentor and trainer to thousands of midcareer engineers at top multinational companies including Robert Bosch, Cisco, Samsung, Arcesium, and Intuit through corporate upskilling and training programs. His leadership combines deep technical expertise with a strong focus on building practical, impactful solutions.",
    },
    {
      name: "Karuna Koyya",
      title: "Founder Director",
      image: "imgs/krishna_img.png", // Replace with the correct path to your image
      description:
        "Karuna brings the human touch to Koyya Enterprises. As a key leader, she oversees people-related initiatives and ensures a work environment where individuals feel valued, respected, and motivated. A graduate in Arts from Andhra University, Karuna also has deep knowledge and hands-on experience in horticulture, which adds a unique dimension to the company’s perspective — especially in areas related to agriculture and sustainability. Her ability to nurture talent and promote a people-first culture makes her an essential pillar of the organization’s growth and wellbeing.",
    },
    {
      name: "Amol Sriram Koyya",
      title: "Product Marketing Manager",
      image: "imgs/krishna_img.png", // Replace with the correct path to your image
      description:
        "Sriram plays a pivotal role in shaping and launching products and services in the agriculture and allied sectors. He holds a Bachelor’s degree in Agricultural Science from the University of Mysore and a Postgraduate Diploma in Food Processing and Business Management from the Indian Institute of Plantation Management, Bengaluru. With a sharp understanding of agribusiness and a passion for innovation, Sriram brings freshideas and the drive to take them from concept to market. His energy, insight, and commitment to local relevance make him a key force in Krissaco’s product strategy and execution.",
    },
    {
      name: "Amol Sriram Koyya",
      title: "Product Marketing Manager",
      image: "imgs/krishna_img.png", // Replace with the correct path to your image
      description:
        "Sriram plays a pivotal role in shaping and launching products and services in the agriculture and allied sectors. He holds a Bachelor’s degree in Agricultural Science from the University of Mysore and a Postgraduate Diploma in Food Processing and Business Management from the Indian Institute of Plantation Management, Bengaluru. With a sharp understanding of agribusiness and a passion for innovation, Sriram brings freshideas and the drive to take them from concept to market. His energy, insight, and commitment to local relevance make him a key force in Krissaco’s product strategy and execution.",
    },
  ];
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <header className="h-[150px] relative lg:h-[400px] bg-cover bg-center  overflow-clip flex items-center justify-center ">
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
      </header>

      <div className="px-2 lg:px-16 py-5 ">
        {/* About Koyya */}
        <section className="flex flex-col md:flex-row gap-16 lg:gap-32 p-10 ">
          <div className="flex-1/2 grid grid-cols-3 gap-4 overflow-hidden">
            <img
              src="imgs/empolyees.jpg"
              className="rounded-lg col-span-1 h-full object-cover"
              data-aos="fade-right"
            />
            <div className="col-span-2 grid grid-rows-2 gap-4">
              <img
                src="imgs/workplace.jpg"
                className="rounded-lg w-full h-full row-span-1 object-cover"
                data-aos="fade"
              />
              <div className="grid grid-cols-2 row-span-2 gap-4">
                <img
                  src="imgs/2149241221.jpg"
                  className="rounded-lg object-cover h-full"
                  data-aos="fade-up"
                />
                <div
                  className="bg-blue-400 text-white text-center flex items-center justify-center lg:text-xl text-xs font-semibold p-5 rounded-lg"
                  data-aos="fade-up"
                >
                  25+
                  <br />
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1/2 flex flex-col bg-blue-100 lg:p-8 p-4 rounded-lg justify-center w-full gap-4 lg:gap-6 lg:text-lg text-sm ">
            <h3 className="text-blue-800 text-center  lg:text-3xl text-xl">
              About Koyya
            </h3>
            <h2 className="text-400 lg:mb-4 mb:3 font-semibold text-left lg:text-4xl text-2xl">
              Digitally rooted. Naturally driven. <br />
              That’s the Koyya way.
            </h2>

            <p className="mb-4 text-lg text-justify">
              Koyya is a dual-vertical company bridging Technology and
              AgriBusiness, delivering innovative digital solutions and
              empowering agricultural brands through modern tech and marketing.
            </p>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li className="flex items-center">
                <MdCheckCircle color="blue" lg:size={"25"} size={"20"} /> &nbsp;
                Bridging Technology & AgriBusiness
              </li>
              <li className="flex items-center">
                <MdCheckCircle color="blue" lg:size={"25"} size={"20"} /> &nbsp;
                Building web, mobile & IoT products
              </li>
              <li className="flex items-center">
                <MdCheckCircle color="blue" lg:size={"25"} size={"20"} /> &nbsp;
                Offering consulting & upskilling services
              </li>
            </ul>
          </div>
        </section>
        <section className="p-10 grid-cols-3 text-left w-full">
          <h2 className="lg:text-4xl text-3xl font-bold mb-4 lg:w-[70%] text-blue-600 text-left">
            Empowering Progress: Bridging Agriculture and Technology for a
            Better Tomorrow
          </h2>

          <div className="flex items-center h-full gap-10">
            <div className="col-span-2 flex flex-col flex-2/3 gap-10 w-full">
              <p className="text-lg text-gray-600 max-w-2xl">
                Bridging agriculture and technology to create impactful,
                sustainable solutions that shape a brighter tomorrow.
              </p>
              <div
                className=" bg-blue-50 rounded-lg shadow-md py-2 px-5 md:px-10 md:py-4 lg:mr-16 flex items-center hover:shadow-lg transition-all duration-300"
                data-aos="fade-right"
              >
                <img
                  src="imgs/image 13.png"
                  className="lg:w-16 lg:h-16 w-12 h-12 mr-2 mt-3"
                  alt="Mission Icon"
                />
                <div>
                  <h3 className="text-blue-700 font-semibold lg:mb-2 lg:text-xl ml-3">
                    Mission
                  </h3>
                  <p className="flex items-center ml-3 text-sm text-justify">
                    Our mission is to leverage cutting-edge technologies to
                    solve real-world problems, focusing on technology and
                    agriculture to create meaningful impact and value.
                  </p>
                </div>
              </div>
              <div
                className=" bg-blue-50 p-3 rounded-lg shadow-md py-2 px-5 md:px-10 md:py-4 lg:ml-16 flex items-center hover:shadow-lg transition-all duration-300"
                data-aos="fade-left"
              >
                <img
                  src="imgs/image 12.png"
                  className="lg:w-16 lg:h-16 w-12 h-12 mr-2 mt-3"
                  alt="Vision Icon"
                />
                <div>
                  <h3 className="text-blue-700 font-semibold lg:mb-2 lg:text-xl ml-3">
                    Vision
                  </h3>
                  <p className="flex items-center ml-3 text-sm text-justify">
                    To be a leading force in bridging the gap between
                    agribusiness and technology, creating a future where digital
                    innovation uplifts rural roots and modern enterprises alike.
                  </p>
                </div>
              </div>
              <div
                className="bg-blue-50 rounded-lg shadow-md py-2 px-5 md:px-10 md:py-4 lg:mr-16 flex items-center hover:shadow-lg transition-all duration-300"
                data-aos="fade-right"
              >
                <img
                  src="imgs/image 14.png"
                  className="lg:w-16 lg:h-16 w-12 h-12 mr-2 mt-3"
                  alt="Mission Icon"
                />
                <div>
                  <h3 className="text-blue-700 font-semibold lg:mb-2 ml-3 lg:text-xl">
                    Core Values
                  </h3>
                  <ul className="list-disc list-inside ml-10 flex flex-wrap -space-y-3 gap-4">
                    <li>Innovation</li>
                    <li>Integrity </li>
                    <li>Sustainability </li>
                    <li>Excellence </li>
                    <li>Collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center flex-1/3 h-full flex-col gap-10">
              <img
                src="imgs/2149313746.jpg"
                className="rounded-lg self-center w-full 2xl:w-[70%] object-cover hover:shadow-xl transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* <section className="px-20 relative w-full overflow-hidden">
        <div className=" absolute p-12 bottom-1/2 left-0 bg-blue-200 h-4 -z-10 w-full "></div>
        <div className="flex flex-col lg:flex-row items-center gap-8 ">
        <img src="imgs/behind_koyya.jpg" className="lg:w-1/3 rounded-lg" />
        <div className=" px-6 py-8 rounded-md w-full lg:w-1/2">
        <h2 className="lg:text-6xl text-4xl font-bold text-blue-800 mb-2 ">
        Behind the KOYYA
        </h2>
        <div className="space-y-10">
        <p className="text-xl text-gray-800 ">
        Rooted in Legacy. Growing with Innovation.
        </p>
        </div>
        </div>
        </div>
        </section> */}

        <section className="p-10 gap-6 flex flex-col items-center">
          <div className="lg:p-6 p-5 bg-violet-100 rounded-lg" data-aos="fade">
            <h2 className="text-2xl font-bold mb-4 ">Our Story</h2>
            <p className="text-gray-700  text-justify">
              <strong>Koyya Enterprises Private Limited (KEPL)</strong> was born
              from the vision of <strong>Krishna Mohan Koyya</strong> and{" "}
              <strong>Karuna Koyya</strong> a family-driven initiative to merge
              deep industry experience with purpose-driven innovation. What
              began as <strong>Glarimy Technology Services</strong> in 2010 a
              trusted name in tech upskilling and consulting evolved in 2023
              into a broader mission: to build meaningful, scalable solutions in
              technology and agriculture. Founded by Krishna and Sriram Koyya,
              Koyya Enterprises blends over two decades of technical expertise
              with a fresh perspective on agribusiness, aiming to deliver impact
              across industries and communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Link to="https://www.glarimy.com " target="_blank">
              <div
                className="bg-blue-100 p-6 lg:rounded-bl-4xl rounded-lg overflow-hidden"
                data-aos="fade-right"
              >
                <div className="flex justify-between w-full">
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Glarimy – The Spirit of Innovation
                    </h3>
                    <p className="italic">Curious | Creative | Tech-savvy</p>
                  </div>
                  <img
                    src="imgs/glarify logo.png"
                    alt=""
                    className="w-12 md:mr-10"
                  />
                </div>
                <p className="mt-4 text-justify">
                  Glarimy symbolizes our technology vertical a young, agile, and
                  curious mind constantly exploring new possibilities. She
                  represents our approach to solving modern business problems
                  through SaaS, mobile apps, consulting, and upskilling
                  programs. Her energy drives digital transformation across
                  enterprises.
                </p>
              </div>
            </Link>
            <Link to="https://www.krissaco.com  " target="_blank">
              <div
                className="bg-green-100 p-6 lg:rounded-tr-4xl rounded-lg overflow-hidden"
                data-aos="fade-left"
              >
                <div className="flex justify-between w-full">
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Krissaco – The Heart of Agriculture
                    </h3>
                    <p className="italic">
                      Grounded | Visionary | Future-Ready
                    </p>
                  </div>
                  <img
                    src="imgs/krissaco logo.png"
                    alt=""
                    className="w-12 md:mr-10"
                  />
                </div>

                <p className="mt-4 text-justify">
                  Krissaco stands for the modern agriculturist rooted in
                  tradition, yet empowered by technology. He leads our
                  agribusiness initiatives with a focus on IoT, AI, cloud-based
                  tools, and food product innovation. His mission is to add
                  value to agriculture through sustainable, tech-driven
                  solutions.
                </p>
              </div>
            </Link>
          </div>
        </section>
        <div className="py-16 px-4 md:px-16"

        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1f2c56] mb-12 underline-[#1f2c56] underline decoration-4">
            Our Management
          </h2>
          <div className="space-y-5">
            {managementTeam.map((member, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start gap-6`}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 md:p-8 lg:w-[80%]"
                >
                  <div
                    className={`${idx % 2 !== 0 && "justify-self-end flex-row-reverse"
                      } flex items-center gap-4 mb-4`}

                  >
                    <img
                      src="/imgs/krishna_img.png" // Use the same image as in your uploaded file
                      alt={member.name}
                      className="w-32 h-32 lg:w-48 lg:h-48 rounded-full object-cover shadow-md border-2 border-white"
                    />
                    <div className={`flex flex-col`}>
                      <h3 className="text-xl font-semibold text-[#154C8C]">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-[#7b7b7b] mb-2">
                        {member.title}
                      </p>
                      <p className="text-gray-700 hidden lg:flex text-sm leading-relaxed ">
                        {member.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 flex lg:hidden text-sm leading-relaxed text-justify">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="lg:px-20 p-5 bg-blue-50 mb-4 rounded-lg ">
        <h2 className="text-blue-600 text-4xl font-bold mb-8 text-center ">
          Meet our team members
        </h2>
        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-4 ">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className=" bg-white rounded-lg shadow p-2 flex lg:flex-row lg:text-left lg:space-x-4 flex-col"
            >
              <img
                src={member.image}
                className="w-16 h-16 object-cover m-auto md:m-0 rounded-full lg:w-36 lg:h-36 lg:rounded-lg lg:float-start lg:ml-0"
              />
              <div className="md:ml-3 text-center lg:text-left">
                <h3 className="font-bold lg:mt-4 items-center">
                  {member.name}
                </h3>
                <p className="text-blue-600 lg:text:xl text-sm">
                  {member.role}
                </p>

                <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
                  <a href="#" className="hover:text-blue-500 ">
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="hover:opacity-100  bg-white hover:bg-black hover:rounded-full hover:text-white text-black transition-all duration-300 "
                  >
                    <FaGithub />
                  </a>
                  <a href="#" className="hover:text-blue-800 ">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section >
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
};

export default AboutUs;
