import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/lib/ScrollToTop";
import { Calendar1Icon, CircleArrowRight, GraduationCap, IndianRupeeIcon, Laptop } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Grip() {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="bg-blue-50" >

            <Navbar />
            <ScrollToTop />
            {/* Hero Section */}
            {/* <section className="bg-blue-50 text-center lg:py-16 py-10">
                <h2 className="lg:text-4xl text-3xl font-bold text-[#005592f8] mb-3">Glarimy Remote Internship Program </h2>
                <p className="mt-2 max-w-xl mx-auto p-3">Gain real-world experience through our comprehensive remote internship program designed for recent graduates.</p>
            </section> */}

            {/* Program Title */}
            <section className="py-10 bg-white shadow-md" >
                <div className="flex flex-col md:flex-row justify-between max-w-7xl md:mx-auto px-6">
                    <div className="flex flex-col">
                        <h2 className="text-4xl md:text-5xl  font-bold mb-2 text-[#005592f8]">
                            Glarimy Remote <br />Internship Program <span className="font-bold">(GRIP)</span></h2>
                        <p className="mt-4 text-gray-600 max-w-xl">Gain real-world experience through our comprehensive remote internship program designed for recent graduates.</p>

                    </div>
                    {!loaded && (
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-koyya2 animate-pulse rounded-lg" />
                    )}
                    <img
                        src="/imgs/grip.png"
                        alt="Training process"
                        onLoad={() => setLoaded(true)}
                        className={`"max-w-sm h-auto mx-auto "${loaded ? "opacity-100" : "opacity-0"}`}
                    />
                </div>
            </section>

            {/* Program Overview */}
            <section className="bg-white py-8 p-5 md:px-0 mt-5 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-center text-[#005592f8] mb-6">Program Overview</h3>
                <div className="bg-gray-50 p-10 rounded shadow-lg max-w-5xl mx-auto">
                    <p className="mb-4 text-gray-700 text-justify hyphens-auto">The Glarimy Remote Internship Program (GRIP) is offered exclusively to graduates who completed their college education in the last two years. This program is designed for graduate students seeking opportunities to work on real-world projects to gain command on technologies and industry practices.</p>
                    <ul className="space-y-2 text-gray-800 mt-5">
                        <li className="lg:items-center flex  gap-3"><GraduationCap size={'28'} className="shrink-0 text-[#005592f8]" /> <strong>Eligibility:</strong> Graduates who completed their  college education in the last two years</li>
                        <li className=" flex gap-3"><Calendar1Icon size={'26'} className="shrink-0 text-[#005592f8]" /> <strong>Duration:</strong> Maximum of 3 months, full-time</li>
                        <li className="items-center flex gap-3"> <Laptop size={'26'} className="shrink-0 text-[#005592f8]" /> <strong>Mode:</strong> 100% Remote/Online</li>
                        <li className="items-center flex gap-3"> <IndianRupeeIcon size={'26'} className="shrink-0 text-[#005592f8]" /><strong>Charges:</strong> Rs. 10,000~ + Taxes</li>
                    </ul>
                </div>
            </section>

            {/* Program Process */}
            <section className="p-10  space-y-5 bg-white mb-7 shadow-md ">
                <h3 className="text-3xl font-bold text-center text-[#005592f8] mb-20">Program Process</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto place-items-center items-center gap-6 lg:text-justify hyphens-auto ">
                    {[
                        { title: "Screening Process", desc: "Prospective interns are screened for eligibility to work on a project through assignments and interviews to assess technical skills and aptitude.", icons: "/imgs/screenprocess.svg" },
                        { title: "Interviews", desc: "Interviews assess interns skills, adaptability, and fit for the project environment.", icons: "/imgs/interview.svg" },
                        { title: "Project Assignment", desc: "Selected interns join project teams and work on real-world application development following industry practices and completing assigned tasks. ", icons: "/imgs/projectassig.svg" },
                        { title: "Certification", desc: "Upon successful completion of the internship, interns receive an official internship experience letter documenting their skills and contributions.", icons: "/imgs/certifite.svg" },
                    ].map((step, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-md shadow-md hover:shadow-xl mb-5 max-w-sm transition duration-300 h-full">
                            <img
                                src={step.icons}
                                alt={step.title}
                                className="w-16 h-16 mx-auto  bg-[#005592f8] p-3 rounded-full"
                            />
                            <h4 className="text-lg font-semibold mb-2 text-center ">{step.title}</h4>
                            <p className=" text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-white py-12 px-6 md:px-20">
                <h3 className="text-2xl font-bold text-center text-[#005592f8] mb-10">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl  mx-auto">
                    {[

                        ["Real-World Experience", "Work on actual projects and gain practical experience that goes beyond theoretical knowledge.", "/imgs/realworld.svg"],
                        ["Technical Skill Development", "Enhance your command over technologies and tools used in the industry.", "/imgs/tech_skills.svg"],
                        ["Industry Practices", "Learn and implement industry-standard methodologies and best practices.", "/imgs/letter.svg"],
                        ["Official Experience Letter", "Receive a formal internship experience letter that validates your skills for future employers.", "/imgs/industryexper.svg"],
                    ].map(([title, desc, icon], i) => (
                        <div key={i} className="p-4 flex items-center space-x-2">
                            <img src={icon} alt={title} className="w-16 h-auto p-2 " />
                            <div><h4 className="font-semibold text-gray-800">{title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{desc}</p></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Important Notes */}
            <section className="bg-gray-50 py-10">
                <h3 className="text-3xl font-bold text-center text-[#005592f8] mb-6">Important Notes</h3>
                <div className="bg-white p-10 shadow-md hover:shadow-lg rounded-md max-w-5xl mx-auto space-y-6 text-gray-700 ">
                    <p className="flex  gap-x-3"><CircleArrowRight size={24} className="shrink-0 mt-2 text-[#005592f8]" /> These are not regular academic internships. They are designed for graduates who have completed their education.</p>
                    <p className="flex  gap-x-3"><CircleArrowRight size={24} className="shrink-0 mt-2 lg:mt-0 text-[#005592f8]" />  If you are still pursuing your graduation... visit our careers page for openings.</p>
                    <p className="flex  gap-x-3"><CircleArrowRight size={24} className="shrink-0 mt-2 lg:mt-0 text-[#005592f8]" />  Terms & Conditions apply. Please review all terms before applying.</p>
                    <p className="flex  gap-x-3"><CircleArrowRight size={24} className="shrink-0 mt-2 lg:mt-0 text-[#005592f8]" />  The program requires full-time commitment for up to 3 months.</p>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-koyya2 to-cyan-400 text-white py-12 text-center flex flex-col items-center justify-center">
                <p className="text-lg max-w-2xl p-3">Join our Remote Internship Program and gain the experience you need to excel in your technology career.</p>
                <Link to="/contact" className="mt-4 bg-white text-[#005592f8] px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-[#005592f8] hover:text-white duration-300">Apply Now</Link>
            </section>

            <Footer />
        </div>
    );
}
