import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/lib/ScrollToTop";
import { Link } from "react-router-dom";

export default function MarketResearch() {
  const Services = [
    "Consumer Behavior Analysis",
    "Competitive Intelligence",
    "Market Opportunity Assessment",
    "Product Testing & Validation",
    "Brand Perception Studies",
  ];
  return (
    <div className="bg-blue-50">
      <Navbar />
      <ScrollToTop />

      {/* Header */}
      {/* <section className=" bg-blue-50 lg:py-16 py-10 text-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-[#005592f8] mb-3">Market Research</h1>
        <p className="mt-2 text-sm md:text-base max-w-3xl mx-auto">
          Specialized technology solutions designed to address the unique
          challenges of specific industries.
        </p>
      </section> */}

      <section className="relative py-8 bg-white shadow-md rounded-lg ">
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-7xl md:mx-auto px-6">
          <div className=" bg-white  flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Section */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl max-w-xs font-bold text-[#005592f8] leading-tight">
                Market  Research
              </h1>

              <p className="mt-4 text-gray-900 text-lg">
                Do you want to understand the pulse of your prospective
                customers? Or want to track how your products is working in the
                market? Want to assess your competition. We are specialised in
                technology driven market research.
              </p>

              {/* Benefits */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-[#005592f8] mb-4">
                  Research Services:
                </h2>
                <ul className="space-y-4 text-lg text-gray-800 mb-5">
                  {Services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-koyya2 text-2xl">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="mt-8 bg-koyya1 hover:bg-koyya2 text-white text-lg  py-3 px-6 rounded-lg shadow-md transition cursor-pointer">
                Talk to us!
              </Link>
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/imgs/marketResearch.png" // Save your uploaded image as "urbanbrew.png" in the public folder
                alt="Urban Brew Coffee Product"
                className="rounded-xl shadow-xl md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
