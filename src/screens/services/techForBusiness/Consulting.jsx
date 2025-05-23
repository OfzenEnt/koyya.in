import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
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

      {/* Header */}
      <section className=" bg-blue-50 lg:py-16 py-10 text-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-blue-700 mb-3">
          Technology for Businesses
        </h1>
        <p className="text-gray-600">
          Comprehensive technology solutions designed to empower your <br className="hidden lg:block" />
          business with cutting-edge tools and expertise.
        </p>
      </section>

      {/* Consulting Section */}
      <section className="relative py-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl md:mx-auto px-6">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <h2 className="text-3xl font-bold mb-2">Consulting </h2>
            </div>
            <p className="max-w-xl">
              We offer technology consulting services to corporate clients in
              the areas of designing and architecting enterprise solutions that
              are scalable and performant using modern technologies.
            </p>
          </div>
          <div className="space-y-2 mt-4 md:mt-0">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
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
        <div className="relative space-y-2 max-w-6xl md:mx-auto px-6 mt-10 z-20">
          <h2 className="text-xl font-semibold mb-4">Consulting Areas:</h2>
          <ul className="lg:space-y-6 space-y-3">
            {AREAS.map((feature, index) => (
              <li key={index} className="flex items-center z-20">
                <span className="text-blue-500 text-2xl">✓</span>
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
      <section className="relative py-6 mt-10 bg-white shadow-md rounded-lg">
        <section className="max-w-[90%] md:max-w-1/2 mx-auto p-6 bg-gray-50 rounded-md shadow-md border">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
            Consulting Services Pricing
          </h2>
          <p className="text-gray-600 mb-4">
            Starting at{" "}
            <span className="text-blue-700 font-bold text-lg">₹ 50,000–00</span>{" "}
            per day
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Comprehensive system architecture assessment",
              "Technology stack recommendations",
              "Performance optimization strategies",
              "Implementation roadmap",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-500 text-2xl">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 italic mt-2">
            * Terms & Conditions apply
          </p>

          <div className="mt-6 flex justify-end">
            <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded">
              Book a consultation
            </button>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
