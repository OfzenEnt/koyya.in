import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  FaFileAlt,
  FaClock,
  FaHandshake,
  FaPencilRuler,
  FaLaptopCode,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { MdCheckCircleOutline } from "react-icons/md";
const steps = [
  {
    title: "1. Client Shares SoW",
    description: "The client shares SoW along with UI designs and workflows.",
    icon: <FaFileAlt />,
  },
  {
    title: "2. Estimation",
    description: "We give estimates in terms of time, cost and schedule.",
    icon: <FaClock />,
  },
  {
    title: "3. Agreement",
    description: "We sign an agreement after client approves.",
    icon: <FaHandshake />,
  },
  {
    title: "4. Prototype Design",
    description:
      " We design the solution and build a prototype for client review.",
    icon: <FaPencilRuler />,
  },
  {
    title: "5. Development & Testing",
    description: "We develop and release the app for client testing.",
    icon: <FaLaptopCode />,
  },
  {
    title: "6. Invoice & Payment",
    description: "We raise a milestone GST invoice, client processes payment.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: "7. Issue Fixes ",
    description: "We fix issues raised by the client.",
    icon: <FaPencilRuler />,
  },
  {
    title: "8. Private Deployment",
    description:
      "We release the app for private deployment and client testing.",
    icon: <FaLaptopCode />,
  },
  {
    title: "9. Invoice & Payment",
    description: "We raise milestone GST invoice, client releases payment.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: "10. Fixes",
    description: "We fix issues raised by the client.",
    icon: <FaPencilRuler />,
  },
  {
    title: "11. Final Deployment",
    description: "We release the app for final deployment.",
    icon: <FaLaptopCode />,
  },
  {
    title: "12. Invoice & Payment",
    description: "We raise a milestone GST invoice, client processes payment.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: "13. Maintenance",
    description: "We continue maintaining the app.",
    icon: <FaPencilRuler />,
  },
  {
    title: "14. Final Invoice",
    description: "We raise the final GST invoice and client processes payment.",
    icon: <FaLaptopCode />,
  },
];
const services = [
  {
    title: "Web & Mobile Development",
    description:
      "Responsive web applications and native mobile apps that deliver exceptional user experiences across all devices.",
    features: [
      "Progressive Web Apps (PWA)",
      "IOS & Android Applications",
      "Cross-platform Solutions",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Human-centered design approach that combines aesthetics with functionality to create intuitive digital experiences.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Usability Testing",
    ],
  },
  {
    title: "Cloud Deployment",
    description:
      "Seamless cloud infrastructure setup and deployment strategies for optimal performance and cost efficiency.",
    features: [
      "AWS, Azure & GCP Solutions",
      "Containerization & Kubernetes",
      "CI/CD Pipeline Implementation",
    ],
  },
  {
    title: "Maintenance",
    description:
      "Proactive maintenance and support services to ensure your software remains secure, up-to-date, and optimized.",
    features: [
      "Bug Files & Security Updates",
      "Performance Monitoring",
      "Continuous Improvements",
    ],
  },
];

const KEY_FEATURES = [
  "Custom Web Application Development",
  "Mobile App Development (iOS & Android)",
  "Enterprise Software Solutions",
  "API Development & Integration ",
];

export default function SoftwareDevelopment() {
  return (
    <div className="bg-blue-50">
      <Navbar />

      {/* Header */}
      <section className="bg-blue-50 lg:py-16 py-10 text-center">
        <h1 className="lg:text-4xl text-3xl font-bold text-blue-700 mb-3">
          Technology for Businesses
        </h1>
        <p className="mt-2 text-sm md:text-base max-w-3xl mx-auto">
          Comprehensive technology solutions designed to empower your
          business with cutting-edge tools and expertise.
        </p>
      </section>

      {/* Software Development Section */}
      <section className="py-10 bg-white">
        <div className="flex flex-col md:flex-row justify-between max-w-7xl md:mx-auto px-6">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-2">
              Software <br /> Development
            </h2>

            <p className="max-w-xl mb-10">
              Custom software solutions designed to address your specific
              business challenges. Our development team follows industry best
              practices to deliver scalable, secure, and maintainable
              applications.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
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
      </section>
      <section className="bg-white py-14 mt-5 px-4">
        <div className="flex flex-col items-center mx-auto">
          <h2 className="text-3xl  text-center font-bold text-blue-700">
            Our Key Software Development Services
          </h2>
          <p className="max-w-[70%] mt-2 text-center text-base text-gray-600">
            We offer comprehensive software development solutions to help
            businesses transform their digital presence and operational
            efficiency.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[95%] lg:max-w-[70%]">
            {services.map((service, index) => (
              <div key={service.title}>
                <div className="bg-white p-8 col-span-1 h-full rounded-lg shadow-md">
                  <h3 className="text-base md:text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <ul className="mt-4 space-y-2 list-disc pl-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-14 mt-5 px-4">
        <div className="flex flex-col items-center mx-auto">
          <h2 className="text-3xl text-center font-bold text-blue-700">
            Our Development Process
          </h2>
          <p className="max-w-[70%] mt-2 text-center text-base text-gray-600">
            We follow a structured approach to deliver high-quality software
            solutions that meet your business objectives.
          </p>

          <div className="relative py-16">
            <div className="relative max-w-5xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500 z-0"></div>

              {/* Steps */}
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`mb-5 flex justify-${isLeft ? "start mr-[50%]" : "end ml-[50%]"
                      } relative z-10`}
                  >
                    <div
                      className={` ${isLeft ? "pr-2 text-right" : "pl-2 text-left"
                        }`}
                    >
                      <div className="flex flex-row-reverse items-center gap-2 md:gap-4 ">
                        {isLeft && (
                          <div className="w-12 h-12 px-4 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-md text-xl">
                            {step.icon}
                          </div>
                        )}
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-gray-800 ">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {step.description}
                          </p>
                        </div>
                        {!isLeft && (
                          <div className="w-12 h-12 px-4 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-md text-xl">
                            {step.icon}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-indigo-500 to-cyan-400 text-white p-8 md:p-16 shadow-lg">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Transparent Pricing
          </h2>
          <p className="text-xl font-semibold">
            Starting at <span className="font-bold text-white">₹5,000</span> per
            person-day
          </p>
          <p className="text-white text-sm md:text-base">
            Our flexible pricing model ensures you only pay for the resources
            you need. Contact us for a detailed quote based on your project
            requirements.
          </p>
          <ul className="text-sm md:text-base space-y-2">
            <li className="flex items-center">
              <span className="text-white mr-2">✔</span> Clear milestone-based
              payment structure
            </li>
            <li className="flex items-center">
              <span className="text-white mr-2">✔</span> Flexible engagement
              models available
            </li>
          </ul>
          <p className="text-sm text-white italic mt-2">
            * Terms & Conditions apply
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-2/5 bg-white rounded-xl p-6 mt-8 md:mt-0 shadow-lg">
          <h3 className="text-center text-lg font-semibold text-indigo-700 mb-4">
            Request a Custom Quote
          </h3>
          <form className="space-y-4 text-black">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              placeholder="Project Details"
              className="w-full border border-gray-300 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-900 text-white font-semibold py-2 rounded-md transition cursor-pointer"
            >
              Get My Quote
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
