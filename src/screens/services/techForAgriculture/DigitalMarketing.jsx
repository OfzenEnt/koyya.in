import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/lib/ScrollToTop";
import { Link } from "react-router-dom";
export default function DigitalMarketing() {
  const KEY_FEATURES = [
    "E-commerce Enablement",
    "Web Presence Development",
    "Digital Marketing & Social Media Management",
    "Branding & Creative Support",
    "Consulting & Strategy",
  ];
  return (
    <div className="bg-blue-50">
      <Navbar />
      <ScrollToTop />

      {/* Header */}
      {/* <section className=" bg-blue-50 lg:py-16 py-10 text-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-[#005592f8] mb-3">
          Digital Marketing
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
              <h1 className="text-4xl md:text-5xl max-w-xs font-semibold text-[#005592f8] leading-tight">
                Digital Marketing
              </h1>

              <p className="mt-4 text-gray-900 text-lg mb-5">
                With keein insights into the agrictulure, horticulture, food &
                food processing industries, we are your partner in your digital
                journey. Be it onboarding you on e-commerce platforms, or
                building your e-commerce own platform, or simply to build a web
                presence and finally running your social media campaigns, we are
                with you!
              </p>

              {/* Key Features */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-[#005592f8] mb-4">
                  Services Offered:
                </h2>
                <ul className="space-y-2 text-lg text-gray-800 mb-5">
                  {KEY_FEATURES.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-koyya2 text-2xl">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="mt-8 bg-koyya1 hover:bg-koyya2 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-md transition cursor-pointer">
                Get your Quote
              </Link>
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/imgs/digitalMarketing.png" // Save your uploaded image as "urbanbrew.png" in the public folder
                alt="Urban Brew Coffee Product"
                className="rounded-xl "
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
