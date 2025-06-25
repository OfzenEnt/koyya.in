import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import ScrollToTop from "@/lib/ScrollToTop";
import { Link } from "react-router-dom";
const KEY_FEATURES = [
  "Scalable Enterprise Solutions",
  "High-Performance Architectures",
  "Modern Technology Stack",
  "Custom Tech Strategy",
];
const AREAS = [
  "Digital Transformation Strategy",
  "Technology Stack AssessmentTechnology Stack Assessment",
  "IT Infrastructure Optimization",
  "Security & Compliance Audits",
  "Process Automation Consulting",
];

export default function Consulting() {
  return (
    <div className="bg-blue-50">

      <Navbar />
      <ScrollToTop />
      {/* Header */}
      {/* <section className=" bg-blue-50 lg:py-16 py-10 text-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-[#005592f8] mb-3">
          Consulting 
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto p-3">
          Comprehensive technology solutions designed to empower your 
          business with cutting-edge tools and expertise.
        </p>
      </section> */}

      {/* Consulting Section */}
      <section className="relative md:-mt-5 bg-white shadow-md py-10 md:p-0 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-7xl md:mx-auto px-6">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#005592f8]">Consulting </h2>
            </div>
            <p className="max-w-xl hyphens-auto">
              We offer technology consulting services to corporate clients in
              the areas of designing and architecting enterprise solutions that
              are scalable and performant using modern technologies.
            </p>
          </div>
          <div className="space-y-2 mt-6 md:mt-17">
            <h2 className="text-xl font-semibold mb-4 text-[#005592f8]">Key Features</h2>
            <ul className="lg:space-y-3 space-y-2">
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
        <div className="relative space-y-2 max-w-7xl md:mx-auto px-6 mt-10 z-20 md:p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#005592f8]">Consulting Areas:</h2>
          <ul className="lg:space-y-1 space-y-3">
            {AREAS.map((feature, index) => (
              <li key={index} className="flex items-center z-20 space-y-2">
                <span className="text-blue-500 text-2xl mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <img
          src="/imgs/consulting.png"
          alt=""
          className="absolute w-1/2 h-auto md:h-1/2 object-contain bottom-0 right-0 opacity-30 lg:opacity-100 z-0"
        />
      </section>
      <section className="relative py-6 mt-5 bg-white rounded-lg">
        <section className="max-w-[90%] md:max-w-1/2 mx-auto p-6 bg-gray-50 rounded-md shadow-md hover:shadow-lg border">
          <h2 className="text-xl md:text-2xl font-semibold text-[#005592f8] mb-2">
            Consulting Services Pricing
          </h2>
          <p className="text-gray-600 mb-4">
            Starting at{" "}
            <span className="text-[#005592f8] font-bold text-lg">₹ 50,000–00</span>{" "}
            per day
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Comprehensive system architecture assessment",
              "Technology stack recommendations",
              "Performance optimization strategies",
              "Implementation roadmap",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-blue-500 text-2xl">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 italic mt-2 mb-5">
            * Terms & Conditions apply
          </p>

          <div className="mt-6 flex lg:justify-end justify-center">
            <Link
              to="/contact"
              className="bg-[#005592ea] hover:bg-[#005694] text-white text-sm font-semibold px-4 py-2 rounded-sm cursor-pointer">
              Book a consultation
            </Link>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
