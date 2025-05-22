import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

      {/* Header */}
      <section className=" bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">
          Technology for Agriculture
        </h1>
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
              <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
                Digital <br /> Marketing
              </h1>

              <p className="mt-4 text-gray-500 text-lg">
                With keein insights into the agrictulure, horticulture, food &
                food processing industries, we are your partner in your digital
                journey. Be it onboarding you on e-commerce platforms, or
                building your e-commerce own platform, or simply to build a web
                presence and finally running your social media campaigns, we are
                with you!
              </p>

              {/* Key Features */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-black mb-4">
                  Services Offered:
                </h2>
                <ul className="space-y-4 text-lg text-gray-800">
                  {KEY_FEATURES.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-500 text-2xl">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-md transition">
                Get your Quote
              </button>
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
