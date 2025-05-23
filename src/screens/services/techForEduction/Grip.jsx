import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Calendar1Icon, CircleArrowRight, CircleIcon, DotIcon, GraduationCap, IndianRupeeIcon, Laptop } from "lucide-react";
import React from "react";

export default function Grip() {
    return (
        <div className="bg-blue-50" >
            <Navbar />
            {/* Hero Section */}
            <section className="bg-blue-50 text-center py-10">
                <h2 className="lg:text-4xl text-3xl font-bold text-blue-700 mb-3">Technology for GRIP</h2>
                <p className="text-sm mt-2 max-w-xl mx-auto">Gain real-world experience through our comprehensive remote internship program designed for recent graduates.</p>
            </section>

            {/* Program Title */}
            <section className="bg-white px-6 md:px-20 py-10 flex flex-col lg:flex-row gap-y-10 items-center ">
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold">Glarimy Remote <br />Internship Program <span className="font-bold">(GRIP)</span></h2>
                    <p className="mt-4 text-gray-600 max-w-2xl">Gain real-world experience through our comprehensive remote internship program designed for recent graduates.</p>
                </div>
                <img
                    src="/imgs/grip.png"
                    alt="Training process"
                    className="max-w-sm h-auto mx-auto mr-10 "
                />
            </section>

            {/* Program Overview */}
            <section className="bg-white py-12 mt-5 flex flex-col items-center ">
                <h3 className="text-2xl font-bold text-center text-blue-700 mb-12">Program Overview</h3>
                <div className="bg-gray-50 p-10 rounded shadow-lg max-w-5xl mx-auto">
                    <p className="mb-4 text-gray-700">The Glarimy Remote Internship Program (GRIP) is offered exclusively to graduates who completed their college education in the last two years. This program is designed for graduate students seeking opportunities to work on real-world projects to gain command on technologies and industry practices.</p>
                    <ul className="space-y-2 text-gray-800 mt-5">
                        <li className="lg:items-center flex  gap-3"><GraduationCap color="blue" size={'28'} /> <strong>Eligibility:</strong> Graduates who completed their <br className="md:hidden block" /> college education in the last two years</li>
                        <li className="items-center flex gap-3"><Calendar1Icon color="blue" size={'26'} /> <strong>Duration:</strong> Maximum of 3 months, full-time</li>
                        <li className="items-center flex gap-3"> <Laptop color="blue" size={'26'} /> <strong>Mode:</strong> 100% Remote/Online</li>
                        <li className="items-center flex gap-3"> <IndianRupeeIcon color="blue" size={'26'} /><strong>Charges:</strong> Rs. 10,000~ + Taxes</li>
                    </ul>
                </div>
            </section>

            {/* Program Process */}
            <section className="px-20 py-6 space-y-5 bg-gray-50 mb-7">
                <h3 className="text-3xl font-bold text-center text-blue-700 mb-20">Program Process</h3>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-center">
                    {[
                        { title: "Screening Process", desc: "Prospective interns are screened for eligibility to work on a project through assignments and interviews to assess technical skills and aptitude.", icons: "/imgs/Frame 76.png" },
                        { title: "Interviews", desc: "Interviews assess interns' skills, adaptability, and fit for the project environment.", icons: "/imgs/Frame 76 (1).png" },
                        { title: "Project Assignment", desc: "Selected interns join project teams and work on real-world application development following industry practices and completing assigned tasks. ", icons: "/imgs/Frame 76 (2).png" },
                        { title: "Certification", desc: "Upon successful completion of the internship, interns receive an official internship experience letter documenting their skills and contributions.", icons: "/imgs/Frame 76 (3).png" },
                    ].map((step, i) => (
                        <div key={i} className="bg-white p-6 rounded-md shadow-md hover:shadow-lg mb-5">
                            <img
                                src={step.icons}
                                alt={step.title}
                                className="max-w-14 h-auto mx-auto"
                            />
                            <h4 className="text-lg font-semibold mb-2 ">{step.title}</h4>
                            <p className=" text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-white py-12 px-6 md:px-20">
                <h3 className="text-2xl font-bold text-center text-blue-700 mb-10">Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl  mx-auto">
                    {[

                        ["Real-World Experience", "Work on actual projects and gain practical experience that goes beyond theoretical knowledge.", "/imgs/Frame 76(5).png"],
                        ["Technical Skill Development", "Enhance your command over technologies and tools used in the industry.", "/imgs/Frame 76 (6).png"],
                        ["Industry Practices", "Learn and implement industry-standard methodologies and best practices.", "/imgs/Frame 76 (7).png"],
                        ["Official Experience Letter", "Receive a formal internship experience letter that validates your skills for future employers.", "/imgs/Frame 76 (8).png"],
                    ].map(([title, desc, icon], i) => (
                        <div key={i} className="p-4 flex items-center space-x-2">
                            <img src={icon} alt={title} className="w-14 h-auto" />
                            <div><h4 className="font-semibold text-gray-800">{title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{desc}</p></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Important Notes */}
            <section className="bg-gray-50 py-10">
                <h3 className="text-3xl font-bold text-center text-blue-700 mb-6">Important Notes</h3>
                <div className="bg-white p-10 shadow-lg rounded-md max-w-5xl mx-auto space-y-5 text-gray-700">
                    <p className="flex  gap-x-3"><CircleArrowRight color="blue" size={24} className="shrink-0 mt-2" /> These are not regular academic internships. They are designed for graduates who have completed their education.</p>
                    <p className="flex items-center gap-x-3"><CircleArrowRight color="blue" size={24} className="shrink-0 " />  If you are still pursuing your graduation... visit our careers page for openings.</p>
                    <p className="flex items-center gap-x-3"><CircleArrowRight color="blue" size={24} className="shrink-0 " />  Terms & Conditions apply. Please review all terms before applying.</p>
                    <p className="flex items-center gap-x-3"><CircleArrowRight color="blue" size={24} className="shrink-0 " />  The program requires full-time commitment for up to 3 months.</p>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-12 text-center flex flex-col items-center justify-center">
                <p className="text-lg max-w-2xl ">Join our Remote Internship Program and gain the experience you need to excel in your technology career.</p>
                <button className="mt-4 bg-white text-blue-700 px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-blue-700 hover:text-white duration-300">Apply Now</button>
            </section>

            <Footer />
        </div>
    );
}
