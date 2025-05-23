import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const GlarimyWiz = () => {
    return (
        <div className="bg-blue-50">
            <Navbar />
            {/* Header */}
            <div className="text-center py-6 px-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">Technology for Education</h2>
                <p className="mt-2 text-sm md:text-base max-w-3xl mx-auto">
                    An advanced learning management system with AI-powered personalized learning paths,
                    interactive content, and comprehensive analytics.
                </p>
            </div>

            {/* Main Content */}
            <div className="bg-white flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-10">
                {/* Left Section */}
                <div className="lg:w-1/2">
                    <h1 className="text-4xl font-bold">Glarimy Wiz <span className="font-normal">Platform</span></h1>
                    <p className="mt-4 text-gray-600">
                        This is our assessment app offered on Web, iOS and Android phones. The app offers daily assessments
                        on various topics chosen by the user.
                    </p>

                    <h3 className="mt-6 font-bold">Platform Features:</h3>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li className="flex items-center"><span className="text-teal-500 text-xl mr-2">✔</span>Interactive Learning Modules</li>
                        <li className="flex items-center"><span className="text-teal-500 text-xl mr-2">✔</span>Adaptive Learning Paths</li>
                        <li className="flex items-center"><span className="text-teal-500 text-xl mr-2">✔</span>Progress Tracking & Analytics</li>
                        <li className="flex items-center"><span className="text-teal-500 text-xl mr-2">✔</span>Virtual Labs & Simulations</li>
                    </ul>

                    <button className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded shadow">
                        Request a Demo
                    </button>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2">
                    <img src="/imgs/Frame 184.png" alt="Glarimy Wiz Screenshot" className=" md:max-w-lg max-w-md" />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GlarimyWiz;
