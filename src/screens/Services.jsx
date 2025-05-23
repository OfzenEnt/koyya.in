import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { MdCheckCircleOutline } from "react-icons/md";

export default function Services() {
  const programs = {
    "Software Engineering": [
      "Domain Driven Design",
      "Test Driven Design",
      "Design Patterns",
      "OOAD & UML",
      "Architectural Patterns",
      "Microservice Patterns",
      "Design Thinking",
    ],
    "Data and Analysis": [
      "Apache Kafka",
      "Apache Spark",
      "Python tools for Data Analysis",
      "PySpark",
      "MongoDB",
    ],
    DevOps: [
      "Git & Git Hub",
      "Dockers",
      "Kubernetes",
      "Jenkins",
      "Splunk",
      "ELK",
    ],
    "Full Stack": ["Java Platform", "Spring Boot", "MERN/MEAN", "NextJS"],
    Cloud: ["Google Cloud", "AWS"],
    AI: [
      "Open AI Integration",
      "Gen AI Tools for Developers",
      "Gen AI Tools for Business",
    ],
    Others: ["Flutter for Android & iOS", "Cyber Security"],
  };

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (category) => {
    setOpenSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-blue-50">
      <Navbar />

      {/* Header */}
      <div className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">
          Technology for Businesses
        </h1>
        <p className=" text-gray-600">
          Comprehensive technology solutions designed to empower your
          business with cutting-edge tools and expertise.
        </p>
      </div>

      {/* Corporate Training Section */}
      <div className="py-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-24">
          <div className="flex  flex-col  ">
            <div className="flex flex-row items-center ">
              <h2 className="text-3xl font-bold mb-2">Corporate Training</h2>
            </div>
            <p className="max-w-xl">
              We offer tecnology upskilling services to corporate clients in the
              modern technologies that matter. We offer them both online as well
              as in the classrooms. Our training services are practical oriented
              with more than 70% hands-on.
            </p>
          </div>
          <ul className="space-y-2 mt-4 md:mt-0">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <li className="flex items-center ">
              <MdCheckCircleOutline color="blue " size={"20"} /> 24x7 lifetime
              access to learning resources
            </li>
            <li className="flex items-center ">
              <MdCheckCircleOutline color="blue " size={"20"} />{" "}
              Practical-oriented training
            </li>
            <li className="flex items-center ">
              <MdCheckCircleOutline color="blue " size={"20"} /> Online &
              classroom formats
            </li>
            <li className="flex items-center ">
              <MdCheckCircleOutline color="blue " size={"20"} /> Partnered with
              top training vendors
            </li>
          </ul>
        </div>

        {/* Training Process */}

        {/* <div className="relative p-6 md:p-12">
                    <h2 className="text-2xl font-bold mb-6">Training Process :</h2>

                    //  Container with space for two rows 
                    <div className="relative flex flex-col gap-10 items-center">
                        //  Top Row 
                        <div className="flex gap-4 items-center z-10">
                            {stepsTop.map((text, index) => (
                                <React.Fragment key={index}>
                                    <Step text={text} />
                                    {index < stepsTop.length - 1 && <Arrow />}
                                </React.Fragment>
                            ))}
                        </div>

                        //  Vertical Connector 
                        <div className="absolute top-[52px] right-[84px] w-px h-[72px] bg-blue-500"></div>

                        //  Bottom Row 
                        <div className="flex gap-4 items-center z-10">
                            {stepsBottom.slice().reverse().map((text, index) => (
                                <React.Fragment key={index}>
                                    <Step text={text} />
                                    {index < stepsBottom.length - 1 && <Arrow reverse />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>  */}
        <div className="relative  md:p-10 ml-12">
          <h2 className="text-2xl font-bold mb-6">Training Process :</h2>
          <img
            src="imgs/Frame 58.png"
            alt=""
            className="md:max-w-[70%] md:max-h-[70%] mx-auto"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white p-6 mt-5">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-3">
          Technology Training Programs
        </h2>
        <p className="text-center mb-5">
          Comprehensive training across various technology domains to keep{" "}
          <br />
          your team at the cutting edge.
        </p>

        <div className="max-w-3xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Technology Programs
          </h1>
          {Object.entries(programs).map(([category, items]) => (
            <div key={category} className="border rounded-lg mb-4 shadow-sm">
              <button
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold rounded-t-lg"
                onClick={() => toggleSection(category)}
              >
                {category}
              </button>
              {openSections[category] && (
                <ul className="p-4 space-y-2 bg-white">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="px-2 py-1 rounded hover:bg-gray-50 border-b last:border-none"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Training Delivery Charges */}
        <div className="p-6">
          <h3 className="text-blue-700 font-bold mb-4 ml-49 text-2xl">
            Training Delivery Charges :
          </h3>
          <table className=" md:w-4xl  border-sky-300 mx-auto ">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-4">Delivery Mode</th>
                <th className="border p-4">Location</th>
                <th className="border p-4">Charges (per day)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Full-day Online Delivery</td>
                <td className="border p-3">-</td>
                <td className="border p-3">Rs. 40,000 + Taxes</td>
              </tr>
              <tr>
                <td className="border p-3">Half-day Online Delivery</td>
                <td className="border p-3">-</td>
                <td className="border p-3">Rs. 30,000 + Taxes</td>
              </tr>
              <tr>
                <td className="border p-3">Full-day Classroom Delivery</td>
                <td className="border p-3">Bengaluru</td>
                <td className="border p-3">Rs. 50,000 + Taxes</td>
              </tr>
              <tr>
                <td className="border p-3">Full-day Classroom Delivery</td>
                <td className="border p-3">Rest of India</td>
                <td className="border p-3">Rs. 60,000 + Taxes</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
              Request custom quote
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
