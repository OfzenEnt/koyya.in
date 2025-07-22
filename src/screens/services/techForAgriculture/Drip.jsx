import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ImagePlaceholder from "@/ImagePlaceholder";
import ScrollToTop from "@/lib/ScrollToTop";
import { Link } from "react-router-dom";

export default function Drip() {
  const KEY_FEATURES = [
    "Accurately measures soil health and gives easy-to-understand insights",
    "Uses AI-powered app to provide personalized farming advice and solutions",
    "Saves time and effort while helping farmers grow better, healthier crops.",
  ];
  return (
    <div className="bg-blue-50">

      <Navbar />
      <ScrollToTop />
      {/* Header */}
      {/* <section className=" bg-blue-50 lg:py-16 py-10 text-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-[#005592f8] mb-3">
          Krissaco Drip
        </h1>
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Krissaco <br /> <span className="text-green-600">Drip</span>
              </h1>
              <p className="mt-4 text-gray-900 text-lg">
                The farmer friendly iOT system is your own lab. Measure the
                important soil parameters like a pro. It comes with a mobile app
                that understands your soil, crop and language. The AI driven app
                not only highlights the problems, but also suggest the solution.
              </p>

              {/* Key Features */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-black mb-4">
                  Key Benefits:
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
                Install Now!!
              </Link>
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-1/2">
              <ImagePlaceholder
                src="/imgs/drip.png" // Save your uploaded image as "urbanbrew.png" in the public folder
                alt="Urban Brew Coffee Product"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
