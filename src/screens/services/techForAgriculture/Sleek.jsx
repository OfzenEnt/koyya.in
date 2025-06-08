import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/lib/ScrollToTop";
import { Link } from "react-router-dom";

export default function Sleek() {
  const KEY_FEATURES = [
    "Tracks how your processes perform over time",
    "Shows you those inefficiencies",
    "Helps you fix issues to save cost, time",
  ];
  return (
    <div className="bg-blue-50">
      <Navbar />
      <ScrollToTop />
      {/* Header */}
      {/* <section className=" bg-blue-50 lg:py-16 py-10 text-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-[#005692] mb-3">
          Krissaco Sleek
        </h1>
        <p className="mt-2 text-sm md:text-base max-w-3xl mx-auto">
          Specialized technology solutions designed to address the unique
          challenges of specific industries.
        </p>
      </section> */}

      <section className="relative py-10 bg-white shadow-md rounded-lg ">
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-7xl md:mx-auto px-6 ">
          <div className=" bg-white  flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Section */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Krissaco <br /> <span className="text-green-600">Sleek</span>
              </h1>

              <p className="mt-4 text-gray-900 text-lg">
                A SaaS solution for the food processing industry to optimise the
                operations driven by data. Available as an online application,
                Krissaco Sleek helps you in identifying the process
                inefficiencies over weeks, months and years.
              </p>

              {/* Key Features */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-black mb-4">
                  Key Features:
                </h2>
                <ul className="space-y-4 text-lg text-gray-800 mb-5">
                  {KEY_FEATURES.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600 text-2xl">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="mt-8 bg-green-600 hover:bg-green-700 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-md transition cursor-pointer">
                Try Now!!
              </Link>
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/imgs/sleek.png" // Save your uploaded image as "urbanbrew.png" in the public folder
                alt="Urban Brew Coffee Product"
                className="rounded-xl md:h-[500px] md:ml-10"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
