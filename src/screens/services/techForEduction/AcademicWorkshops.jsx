import React from "react";
import { Check, Phone, Mail, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Calendar, Users, Monitor, GraduationCap } from "lucide-react";
import {
  FileText,
  BookOpen,
  PhoneCall,
  SlidersHorizontal,
  BadgeCheck,
  CalendarCheck,
  FileCheck,
  PlayCircle,
  FileText as InvoiceIcon,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTop from "@/lib/ScrollToTop";

const AcademicWorkshopsPage = () => {
  const items = [
    {
      icon: <Calendar />,
      title: "Duration",
      description: "The workshops typically range from 2–5 days.",
    },
    {
      icon: <Users />,
      title: "Participants",
      description: "25–50 students per workshop",
    },
    {
      icon: <Monitor />,
      title: "Style",
      description: "We offer both Classroom and Online delivery",
    },
    {
      icon: <GraduationCap />,
      title: "Internships",
      description: "Deserving students may also be offered internships",
    },
  ];
  const steps = [
    {
      title: "Workshop Proposal",
      description: "The trainer proposes a workshop with stated objectives",
      icon: <FileText size={20} />,
    },
    {
      title: "Course Development",
      description: "Curriculum design and material preparation",
      icon: <BookOpen size={20} />,
    },
    {
      title: "Scoping Call",
      description: "Needs assessment and requirements gathering",
      icon: <PhoneCall size={20} />,
    },
    {
      title: "Course Customization",
      description: "Training content to institution’s needs",
      icon: <SlidersHorizontal size={20} />,
    },
    {
      title: "Institution Approval",
      description: "Formal confirmation from stakeholders",
      icon: <BadgeCheck size={20} />,
    },
    {
      title: "Date Finalization",
      description: "Scheduling and logistics confirmation",
      icon: <CalendarCheck size={20} />,
    },
    {
      title: "Purchase Order",
      description: "Official documentation and agreement",
      icon: <FileCheck size={20} />,
    },
    {
      title: "Workshop Delivery",
      description: "Execution of the training program",
      icon: <PlayCircle size={20} />,
    },
    {
      title: "Invoice Generation",
      description: "Payment request documentation",
      icon: <InvoiceIcon size={20} />,
    },
    {
      title: "Payment Release",
      description: "Completion of financial transaction",
      icon: <Wallet size={20} />,
    },
  ];

  return (
    <div className="bg-blue-50">
      <Navbar />
      <ScrollToTop />
      {/* Hero Section */}
      {/* <section className="bg-blue-50 lg:py-16 py-10 text-center mb-5 ">
        <h1 className="lg:text-4xl text-3xl font-bold text-[#005592f8] mb-3">
          Academic Workshops
        </h1>
        <p className="mt-2 text-sm md:text-base max-w-3xl mx-auto">
          Empowering the next generation with knowledge and skills through our
          specialized educational offerings.
        </p>
      </section> */}

      {/* Academic Workshops Section */}
      <section className="py-10 bg-white shadow-md" >
        <div className="flex flex-col md:flex-row justify-between max-w-7xl md:mx-auto px-6">
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl  font-bold mb-2 text-[#005592f8]">

              Academic Workshops</h2>
            <p className="max-w-xl mb-10 S">
              We deliver workshops for academic institutions both online and
              on-campus. The workshops complement the academic learning of the
              students. The workshops typically range from 2–5 days. Deserving
              students may also be offered internships.
            </p>
          </div>
          <div className=" rounded-xl   max-w-lg">
            <h3 className="text-xl font-semibold mb-2 text-[#005592f8]">Workshop Format:</h3>
            <div className="space-y-2 ">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="pt-1 h-5 w-5 text-[#005592f8] ">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 ">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-white px-4 mb-5 mt-5 shadow-md">
        <div className="flex flex-col items-center mx-auto">
          <h2 className="text-3xl text-center font-bold text-[#005592f8] mt-5">
            Workshop Work Flow
          </h2>
          <p className="max-w-xl mt-2 text-center text-base text-gray-600">
            Industry-aligned educational programs designed to bridge the gap
            between academic learning and professional requirements.
          </p>

          <div className="relative py-16">
            <div className="relative max-w-5xl mx-auto">
              {/* Vertical line */}
              {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500 z-0"></div> */}

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
                      <div className="flex flex-row-reverse items-center gap-2 md:gap-4 bg-gray-50 border-l-3 rounded-lg border-[#005592f8] p-2">
                        {isLeft && (
                          <div className="w-12 h-12 px-4 rounded-full bg-[#005592f8] text-white flex items-center justify-center shadow-md text-xl">
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
                          <div className="w-12 h-12 px-4 rounded-full bg-[#005592f8] text-white flex items-center justify-center shadow-md text-xl">
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

      {/* Pricing Section */}
      <section className=" p-6 md:px-20 bg-white flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-[#005592f8] mb-12">
          Workshop Pricing
        </h2>
        <div className="grid md:grid-cols-2 lg:px-50 gap-5 ">
          <div className="border-2 rounded-lg p-6 shadow hover:shadow-lg transition  text-center">
            <h3 className="text-2xl  font-semibold text-cyan-600 mb-2">
              Online Delivery
            </h3>
            <p className="text-xl font-bold mb-4">
              ₹ 10,000.00 <span className="text-base font-normal">per day</span>
            </p>
            {[
              ["live virtual sessions"],
              ["interactive Q&A"],
              ["digital materials"],
              ["recording access"],
            ].map((text, index) => (
              <ul className="space-y-2" key={index}>
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-green-600 " /> {text}
                </li>
              </ul>
            ))}
            {/* <ul className="space-y-2 ">
              <li className="flex items-center justify-center">
                <Check className="text-green-600 mr-2" /> Live virtual sessions
              </li>
              <li className="flex items-center justify-center">
                <Check className="text-green-600 mr-2" /> Interactive Q&A
              </li>
              <li className="flex items-center justify-center">
                <Check className="text-green-600 mr-2" /> Digital materials
              </li>
              <li className="flex items-center justify-center">
                <Check className="text-green-600 mr-2" /> Recording access
              </li>
            </ul> */}
          </div>
          <div className="border-2 rounded-lg p-8 shadow hover:shadow-lg transition  text-center">
            <h3 className="text-2xl font-semibold text-violet-700 mb-2">
              Classroom Delivery
            </h3>
            <p className="text-xl font-bold mb-4">
              ₹ 15,000.00 <span className="text-base font-normal">per day</span>
            </p>
            {[
              ["In-person instruction"],
              ["Hands-on lab sessions"],
              ["Physical workshop"],
              ["One-on-one assistance"],
            ].map((text, index) => (
              <ul className="space-y-2" key={index}>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600 " /> {text}
                </li>
              </ul>
            ))}

          </div>
        </div>
        <p className="text-center text-sm mt-6 mb-5">
          * Prices may vary based on workshop duration, content complexity.
          Terms & Conditions apply
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-12 flex md:flex-row flex-col md:gap-10 justify-center items-center  px-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Ready to Elevate Your Academic Impact?
          </h3>
          <p className="mb-4 max-w-xl mx-auto">
            Partner with us to develop high-impact academic workshops that
            advance pedagogical innovation, improve institutional effectiveness,
            and support excellence in teaching and learning.
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-[#005592ea] text-white px-6 h-10 rounded-lg  hover:bg-[#005592f8] transition cursor-pointer items-center flex">
          Contact Us
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default AcademicWorkshopsPage;
