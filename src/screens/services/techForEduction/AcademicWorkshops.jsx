import React from 'react';
import { Check, Phone, Mail, MapPin } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Calendar, Users, Monitor, GraduationCap } from 'lucide-react';
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

const AcademicWorkshopsPage = () => {
    const items = [
        {
            icon: <Calendar className="w-5 h-5 text-indigo-600" />,
            title: 'Duration',
            description: 'The workshops typically range from 2–5 days.',
        },
        {
            icon: <Users className="w-5 h-5 text-indigo-600" />,
            title: 'Participants',
            description: '25–50 students per workshop',
        },
        {
            icon: <Monitor className="w-5 h-5 text-indigo-600" />,
            title: 'Style',
            description: 'We offer both Classroom and Online delivery',
        },
        {
            icon: <GraduationCap className="w-5 h-5 text-indigo-600" />,
            title: 'Internships',
            description: 'Deserving students may also be offered internships',
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
        <div >
            <Navbar />
            {/* Hero Section */}
            <section className="bg-blue-50 text-center py-6 px-4 mb-5">
                <h1 className="text-2xl md:text-3xl font-semibold text-blue-600">
                    Technology for Academic Workshops
                </h1>
                <p className="mt-2 text-sm md:text-base max-w-3xl mx-auto">
                    Empowering the next generation with knowledge and skills through our specialized educational offerings.
                </p>
            </section>

            {/* Academic Workshops Section */}
            <section className="py-10 bg-white">
                <div className="flex flex-col md:flex-row justify-between max-w-7xl md:mx-auto px-6 items-center">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold mb-4">Academic Workshops</h2>
                        <p className="max-w-xl mb-10">
                            We deliver workshops for academic institutions both online and on-campus. The workshops complement the academic learning of the students. The workshops typically range from 2–5 days. Deserving students may also be offered internships.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-7 rounded-xl shadow max-w-lg">
                        <h3 className="text-xl font-semibold mb-2">Workshop Format:</h3>
                        <div className="space-y-2 ">
                            {items.map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                    <div className="pt-1">{item.icon}</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 ">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-6">
                    Workshop Work Flow
                </h2>
                <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
                    Industry-aligned educational programs designed to bridge the gap between academic learning and professional requirements.
                </p>
                <div className="relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 z-0"></div>
                    {steps.map((step, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`mb-8 flex justify-${isLeft ? "start mr-[50%]" : "end ml-[50%]"} relative z-10`}
                            >
                                <div className={`${isLeft ? "pr-4 text-right" : "pl-4 text-left"}`}>
                                    <div className="flex flex-row-reverse items-center gap-2 md:gap-4">
                                        {isLeft && (
                                            <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-md">
                                                {step.icon}
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {index + 1}. {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {step.description}
                                            </p>
                                        </div>
                                        {!isLeft && (
                                            <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-md">
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

            {/* Pricing Section */}
            <section className="py-16 px-6 md:px-20 bg-white">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
                    Workshop Pricing
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="border-2 rounded-lg p-8 shadow hover:shadow-lg transition">
                        <h3 className="text-2xl font-semibold text-cyan-600 mb-2">Online Delivery</h3>
                        <p className="text-xl font-bold mb-4">₹ 10,000.00 <span className="text-base font-normal">per day</span></p>
                        <ul className="space-y-2">
                            <li className="flex items-center"><Check className="text-green-600 mr-2" /> Live virtual sessions</li>
                            <li className="flex items-center"><Check className="text-green-600 mr-2" /> Interactive Q&A</li>
                            <li className="flex items-center"><Check className="text-green-600 mr-2" /> Digital materials</li>
                            <li className="flex items-center"><Check className="text-green-600 mr-2" /> Recording access</li>
                        </ul>
                    </div>

                    <div className="border-2 rounded-lg p-8 shadow hover:shadow-lg transition">
                        <h3 className="text-2xl font-semibold text-violet-700 mb-2">Classroom Delivery</h3>
                        <p className="text-xl font-bold mb-4">₹ 15,000.00 <span className="text-base font-normal">per day</span></p>
                        <ul className="space-y-2">
                            <li className="flex items-center"><Check className="text-green-600 mr-2" /> In-person instruction</li>
                            <li className="flex items-center"><Check className="text-green-600 mr-2" /> Hands-on lab sessions</li>
                            <li className="flex items-center"><Check className="text-green-600 mr-2" /> Physical workshop materials</li>
                            <li className="flex items-center"><Check className="text-green-600 mr-2" /> One-on-one assistance</li>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-sm mt-6">* Prices may vary based on workshop duration, content complexity. Terms & Conditions apply</p>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-50 py-12  flex gap-10 justify-center items-center">
                <div><h3 className="text-xl font-semibold mb-2">Ready to Elevate Your Academic Impact?</h3>
                    <p className="mb-4 max-w-xl mx-auto">
                        Partner with us to develop high-impact academic workshops that advance pedagogical innovation, improve institutional effectiveness, and support excellence in teaching and learning.
                    </p></div>
                <button className="bg-blue-600 text-white px-6 h-10 rounded-lg  hover:bg-blue-700 transition">Contact Us</button>
            </section>

            <Footer />
        </div>
    );
};

export default AcademicWorkshopsPage;
