import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/lib/ScrollToTop";
import { Link } from "react-router-dom";
import { CiLink } from "react-icons/ci";

export default function UrbanBrews() {
  return (
    <div className="bg-blue-50">
      <Navbar />
      <ScrollToTop />

      {/* Header */}
      {/* <section className=" bg-blue-50 lg:py-16 py-8 text-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-[#005692] mb-3 p-2">Krissaco Urban Brews Coffee</h1>
        <p className="mt-2 text-sm md:text-base max-w-3xl mx-auto">
          Specialized technology solutions designed to address the unique
          challenges of specific industries.
        </p>
      </section> */}

      <section className="relative py-8 bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-7xl md:mx-auto px-6">
          <div className=" bg-white  flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Section */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl md:max-w-full max-w-xs font-bold text-gray-900 leading-tight">
                Krissaco Urban <br /> Brews Coffee
                <span className="md:ml-3 inline-block text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 md:py-1 rounded-full align-middle">
                  Featured Product
                </span>
              </h1>

              <p className="mt-4 text-gray-900 text-lg">
                Ever tasted something like filter coffee but far better? Try{" "}
                <span className="font-semibold text-yellow-700">
                  Urban Brews
                </span>
                , the premium coffee powder from the plantations of Coorg,
                Chikmaguluru is a class of its own.
              </p>

              <a
                href="#"
                className="mt-4 block text-[#005692] font-bold underline hover:text-blue-900"
              >
                Buy it from Amazon.
              </a>

              {/* Benefits */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-black mb-4">
                  Why Urban Brews:
                </h2>
                <ul className="space-y-4 text-lg text-gray-800">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-2xl">✓</span>
                    Perfect Blend of Tradition and Innovation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-2xl">✓</span>
                    Crafted for Coffee Lovers
                  </li>
                  <li className="flex items-start gap-3 mb-5">
                    <span className="text-yellow-500 text-2xl">✓</span>
                    Health and Well-being in Every Sip
                  </li>
                </ul>
              </div>

              <Link
                to="/contact"
                className=" bg-yellow-600 hover:bg-yellow-700 text-white text-lg font-bold py-3 px-6 rounded-lg shadow-md transition cursor-pointer"
              >
                Buy Now!!
              </Link>
            </div>

            {/* Right Section - Image */}
            <div className="w-full  md:w-1/2">
              <img
                src="/imgs/agribusiness.png" // Save your uploaded image as "urbanbrew.png" in the public folder
                alt="Urban Brew Coffee Product"
                className="rounded-xl shadow-xl md:h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
