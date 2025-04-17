import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const teamMembers = [
    {
      name: "Krishna Mohan Koyya",
      role: "CEO",
      img: "imgs/krishna_img.png",
    },
    { name: "Maya Mathy", role: "Founder", img: "src/assets/team1.jpg" },
    { name: "Alexis Jensen", role: "CTO", img: "src/assets/team2.jpg" },
    {
      name: "Keira Battye",
      role: "Product Designer",
      img: "src/assets/team3.jpg",
    },
    { name: "Dominic Game", role: "3D Artist", img: "src/assets/team4.jpg" },
    {
      name: "James Vial",
      role: "Head of Front-End",
      img: "src/assets/team3.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <header className="h-[150px] relative lg:h-[400px] bg-cover bg-center  overflow-clip flex items-center justify-center ">
        <img
          src="imgs/workplace.jpg"
          alt=""
          className="absolute opacity-35 blur-[1px]"
        />
        <div className="p-6 flex flex-col justify-center items-center rounded-md">
          <h1 className="text-black relative text-5xl font-bold">About us</h1>
          <p className="text-gray-600 relative mt-1">Home → About</p>
        </div>
      </header>

      <div className="px-2 lg:px-16 py-5 ">
        {/* About Koyya */}
        <section className="flex flex-col md:flex-row gap-32 p-10 ">
          <div className="flex-1/2 grid grid-cols-3 gap-4 overflow-hidden">
            <img
              src="imgs/empolyees.jpg"
              className="rounded-lg col-span-1 h-full object-cover"
            />
            <div className="col-span-2 grid grid-rows-2 gap-4">
              <img
                src="imgs/workplace.jpg"
                className="rounded-lg w-full h-full row-span-1 object-cover"
              />
              <div className="grid grid-cols-2 row-span-2 gap-4">
                <img
                  src="imgs/2149241221.jpg"
                  className="rounded-lg object-cover h-full"
                />
                <div className="bg-blue-600 text-white text-center flex items-center justify-center lg:text-xl text-xs font-semibold p-5 rounded-lg ">
                  25+
                  <br />
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1/2 flex flex-col bg-blue-100 lg:p-8 p-4 rounded-lg justify-center w-full lg:gap-6 lg:text-lg text-sm">
            <div>
              <h3 className="text-blue-800 text-left lg:text-3xl text-xl">
                About Koyya
              </h3>
              <h2 className="text-400 lg:mb-4 mb:3 text-left lg:text-4xl text-2xl">
                Digitally rooted.
                <br /> Naturally driven.That’s
                <br /> the Koyya way.
              </h2>
            </div>
            <p className="mb-4 font-sans text-lg text-justify">
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
                className=" bg-blue-50 rounded-lg shadow-md py-2 px-5 md:px-10 md:py-4 lg:mr-16 flex items-center hover:scale-102"
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
                className=" bg-blue-50 p-3 rounded-lg shadow-md py-2 px-5 md:px-10 md:py-4 lg:ml-16 flex items-center hover:scale-102"
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
                className="bg-blue-50 rounded-lg shadow-md py-2 px-5 md:px-10 md:py-4 lg:mr-16 flex items-center hover:scale-102"
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
                className="rounded-lg self-center w-full 2xl:w-[70%] object-cover"
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
                through SaaS, mobile apps, consulting, and upskilling programs.
                Her energy drives digital transformation across enterprises.
              </p>
            </div>
            <div
              className="bg-green-100 p-6 lg:rounded-tr-4xl rounded-lg overflow-hidden"
              data-aos="fade-left"
            >
              <div className="flex justify-between w-full">
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    Krissaco – The Heart of Agriculture
                  </h3>
                  <p className="italic">Grounded | Visionary | Future-Ready</p>
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
                tools, and food product innovation. His mission is to add value
                to agriculture through sustainable, tech-driven solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="lg:p-10 p-5 bg-blue-50 mb-4 ml-11 mr-11 rounded-lg ">
          <h2 className="text-blue-600 text-4xl font-bold mb-8 text-center ">
            Meet our team members
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className=" bg-white rounded-lg shadow p-2 flex lg:flex-row lg:text-left lg:space-x-4 flex-col"
              >
                <img
                  src={member.img}
                  className="w-16 h-14 object-cover rounded-full lg:w-36 lg:h-36 lg:rounded-lg lg:float-start lg:ml-0 ml-8"
                />
                <div>
                  <h3 className="font-bold lg:mt-4 items-center ">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 lg:text:xl text-sm">
                    {member.role}
                  </p>

                  <div className="flex space-x-4 mt-4 justify-center ">
                    <a href="#">
                      <FaFacebook />
                    </a>
                    <a href="#">
                      <FaGithub />
                    </a>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
