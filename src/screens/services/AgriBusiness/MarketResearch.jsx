import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

      {/* Header */}
      <section className=" bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">Agri Business</h1>
        <p className="text-gray-600">
          Specialized technology solutions designed to address the unique
          challenges of specific industries.
        </p>
      </section>

      <section className="relative py-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl md:mx-auto px-6">
          <div className=" bg-white  flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Section */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Market <br /> Research
              </h1>

              <p className="mt-4 text-gray-500 text-lg">
                Do you want to understand the pulse of your prospective
                customers? Or want to track how your products is working in the
                market? Want to assess your competition. We are specialised in
                technology driven market research.
              </p>

              {/* Benefits */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-black mb-4">
                  Why Urban Brews:
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

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-lg  py-3 px-6 rounded-lg shadow-md transition">
                Talk to us!
              </button>
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/imgs/marketResearch.png" // Save your uploaded image as "urbanbrew.png" in the public folder
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
