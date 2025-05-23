import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const GlarimyWiz = () => {
  const Services = [
    "Interactive Learning Modules",
    "Adaptive Learning Paths",
    "Progress Tracking & Analytics",
    "Virtual Labs & Simulations",
  ];
  return (
    <div className="bg-blue-50">
      <Navbar />

      {/* Header */}
      <section className=" bg-blue-50 py-16 text-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-blue-700 mb-3">
          Technology for Education
        </h1>
        <p className="mt-2 text-base max-w-3xl mx-auto">
          An advanced learning management system with AI-powered personalized
          learning paths, interactive content, and comprehensive analytics.
        </p>
      </section>

      <section className="relative py-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl md:mx-auto px-6">
          <div className=" bg-white  flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Section */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Glarimy Wiz <br /> <span className="font-normal">Platform</span>
              </h1>

              <p className="mt-4 text-gray-500 text-lg">
                This is our assessment app offered on Web, iOS and Android
                phones. The app offers daily assessments on various topics
                chosen by the user.
              </p>

              {/* Benefits */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-black mb-4">
                  Platform Features:
                </h2>
                <ul className="space-y-4 text-lg text-gray-800">
                  {Services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-500 text-2xl">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-lg  py-3 px-6 rounded-lg shadow-md transition cursor-pointer">
                Request a Demo
              </button>
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/imgs/Frame 184.png" // Save your uploaded image as "urbanbrew.png" in the public folder
                alt="Urban Brew Coffee Product"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GlarimyWiz;
