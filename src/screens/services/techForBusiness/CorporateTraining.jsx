import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/lib/ScrollToTop";
import React, { useState, useMemo, useEffect } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";

const PROGRAMS = {
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

const DELIVERY_CHARGES = [
  {
    mode: "Full-day Online Delivery",
    location: "-",
    charges: "Rs. 40,000 + Taxes",
  },
  {
    mode: "Half-day Online Delivery",
    location: "-",
    charges: "Rs. 30,000 + Taxes",
  },
  {
    mode: "Full-day Classroom Delivery",
    location: "Bengaluru",
    charges: "Rs. 50,000 + Taxes",
  },
  {
    mode: "Full-day Classroom Delivery",
    location: "Rest of India",
    charges: "Rs. 60,000 + Taxes",
  },
];

const KEY_FEATURES = [
  "24x7 lifetime access to learning resources",
  "Practical-oriented training",
  "Online & classroom formats",
  "Partnered with top training vendors",
];
const categoryOptions = {
  "Data & Analytics": [
    "Apache Kafka",
    "Apache Spark",
    "Python Tools for Data Analysis",
    "PySpark",
    "MongoDB",
  ],
  "AI": [
    "Open AI Integration",
    "Gen AI Tools for Developers",
    "Gen AI Tools for Business",
  ],
  "Full Stack": [
    "Java Platform",
    "Spring Boot",
    "MERN/MEAN",
    "NextJS",
  ],
  "DevOps": [
    "Git & GitHub",
    "Dockers",
    "Kubernetes",
    "Jenkins",
    "Splunk",
    "ELK",
  ],
  "Software Engineering": [
    "Domain Driven Design",
    "Test Driven Design",
    "Design Patterns",
    "OOAD & UML",
    "Architectural Patterns",
    "Microservice Patterns",
    "Design Thinking",
  ],
  "Cloud": [
    "Google Cloud",
    "AWS",
  ],
  "Others": [
    "Flutter for Android & iOS",
    "Cyber Security",
  ]
};
export default function CorporateTraining() {
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
    phoneno: "",
    mail: "",
  });

  const [selectedCategory, setSelectedCategory] = useState("Data & Analytics");
  const [selectedPrograms, setSelectedPrograms] = useState([]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleProgramToggle = (program) => {
    setSelectedPrograms(prev =>
      prev.includes(program)
        ? prev.filter(p => p !== program)
        : [...prev, program]
    );
  };

  const programEntries = useMemo(() => Object.entries(PROGRAMS), []);

  return (
    <div className="bg-blue-50">
      <ScrollToTop />
      <Navbar />

      {/* Header */}
      <section className="bg-blue-50 lg:py-16 py-10 text-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-blue-700 mb-3">
          Technology for Businesses
        </h1>
        <p className="mt-2 text-sm md:text-base max-w-3xl mx-auto">
          Comprehensive technology solutions designed to empower your <br className="hidden lg:block" />
          business with cutting-edge tools and expertise.
        </p>
      </section>

      {/* Corporate Training Section */}
      <section className="py-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl md:mx-auto px-6">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <h2 className="text-3xl font-bold mb-2">Corporate Training</h2>
            </div>
            <p className="max-w-xl">
              We offer technology upskilling services to corporate clients in
              the modern technologies that matter. We offer them both online as
              well as in the classrooms. Our training services are practical
              oriented with more than 70% hands-on.
            </p>
          </div>
          <div className="space-y-2 mt-4 md:mt-0">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {KEY_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <MdCheckCircleOutline
                    className="text-blue-500 mr-2"
                    size={20}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Training Process */}
        <div className="relative md:p-10 max-w-6xl mx-auto mt-8 md:mt-0 px-6">
          <h2 className="text-2xl font-bold mb-6">Training Process:</h2>
          <img
            src="/imgs/training_process.png"
            alt="Training process"
            className="w-full max-w-3xl mx-auto hidden md:block"
          />
          <img
            src="/imgs/training_process(mob).png"
            alt="Training process"
            className="w-32 mx-auto md:hidden block"
          />

        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white p-6 mt-5">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-3">
            Technology Training Programs
          </h2>
          <p>
            Comprehensive training across various technology domains to keep{" "}
            <br className="hidden lg:block" />
            your team at the cutting edge.
          </p>
        </div>

        {/* <div className="max-w-3xl mx-auto p-6">
          {programEntries.map(([category, items]) => (
            <div
              key={category}
              className="border rounded-lg mb-4 shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold transition-colors duration-200"
                onClick={() => toggleSection(category)}
                aria-expanded={openSections[category]}
              >
                {category}
              </button>
              {openSections[category] && (
                <ul className="p-4 space-y-2 bg-white">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="px-2 py-1 rounded hover:bg-gray-50 border-b last:border-none transition-colors duration-150"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div> */}

        {/* Form Section */}

        <form className="space-y-6 max-w-4xl mx-auto">
          {/* Name and Contact Fields */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full mb-4 md:mb-0">
              <label className="block mb-2" htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300 rounded-md lg:p-4 p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label className="block mb-2" htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-md lg:p-4 p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="w-full mb-4 md:mb-0">
              <label className="block mb-2" htmlFor="PhoneNo">Ph.No:</label>
              <input
                id="PhoneNo"
                name="phoneno"
                value={formData.phoneno}
                type="tel"
                placeholder="+91 1234567890"
                className="w-full border border-gray-300 rounded-md lg:p-4 p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>

            <div className="w-full">
              <label className="block mb-2" htmlFor="mail">Email</label>
              <input
                id="mail"
                name="mail"
                value={formData.mail}
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 rounded-md lg:p-4 p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Category and Program Selection */}
          <div className="col-span-2 border-2 rounded-xl shadow-md p-10">
            <label className="block font-medium mb-5">Choose a Category:</label>
            <select
              className="w-full border lg:p-4 p-3 rounded-md mb-5"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedPrograms([]); // Clear when switching category
              }}
            >
              {Object.keys(categoryOptions).map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>

            <div className="flex flex-wrap gap-x-10 gap-y-5 mx-auto">
              {categoryOptions[selectedCategory].map((program) => (
                <label key={program} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedPrograms.includes(program)}
                    onChange={() => handleProgramToggle(program)}
                  />
                  {program}
                </label>
              ))}
            </div>
          </div>
        </form>

        {/* Training Delivery Charges */}
        <div className="p-6 max-w-4xl mx-auto">
          <h3 className="text-blue-700 font-bold mb-4 text-2xl">
            Training Delivery Charges:
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-sky-500">
            <table className="w-full border border-sky-300">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border p-4">Delivery Mode</th>
                  <th className="border p-4">Location</th>
                  <th className="border p-4">Charges (per day)</th>
                </tr>
              </thead>
              <tbody>
                {DELIVERY_CHARGES.map((row, index) => (
                  <tr key={index}>
                    <td className="border p-3">{row.mode}</td>
                    <td className="border p-3">{row.location}</td>
                    <td className="border p-3">{row.charges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-black italic mt-2">
            * Terms & Conditions apply
          </p>

          <div className="text-center mt-6">
            <button className="bg-white  outline-2 outline-blue-600 text-blue-700  px-6 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-200 cursor-pointer">
              Request custom quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
