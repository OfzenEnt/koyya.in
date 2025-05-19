import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { MdCheckCircle, MdCheckCircleOutline } from 'react-icons/md';

export default function Services() {
    // const stepsTop = [
    //     'Requirement shared',
    //     'Course outline developed',
    //     'Scoping call',
    //     'Course customization'
    // ];

    // const stepsBottom = [
    //     'Client approval',
    //     'Schedule finalized',
    //     'Training delivery',
    //     'GST invoice raised'
    // ];
    // const Step = ({ text }) => (
    //     <div className="border border-blue-400 rounded-md px-6 py-4 min-w-[180px] text-center text-sm font-medium shadow-sm bg-white">
    //         {text}
    //     </div>
    // );

    // const Arrow = ({ reverse = false }) => (
    //     <div className={`text-blue-500 text-2xl ${reverse ? 'rotate-180' : ''}`}>
    //         →
    //     </div>
    // );
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className='bg-blue-50'>
            <Navbar />

            {/* Header */}
            <div className="bg-blue-50 py-8 text-center">
                <h1 className="text-4xl font-bold text-blue-700 mb-3">Technology for Businesses</h1>
                <p className=" text-gray-600">Comprehensive technology solutions designed to empower your <br /> business with cutting-edge tools and expertise.</p>
            </div>

            {/* Corporate Training Section */}
            <div className="py-6 bg-white shadow-md rounded-lg  mt-5">
                <div className='flex flex-col md:flex-row items-center justify-between max-w-6xl mx-24'>
                    <div className="flex  flex-col  ">
                        <div className='flex flex-row items-center '>
                            <h2 className="text-3xl font-bold mb-2">Corporate <br />Training</h2>
                            <img
                                src="imgs/Frame 73.png" alt=""
                                className='w-24 h-24 p-2 ml-10' /></div>
                        <p className="max-w-xl">
                            We offer tecnology upskilling services to corporate clients in the modern technologies that matter. We offer them both online as well as in the classrooms. Our training services are practical oriented with more than 70% hands-on.
                        </p>
                    </div>
                    <ul className="space-y-2 mt-4 md:mt-0">
                        <h2 className='text-xl font-semibold mb-4"'>key features</h2>
                        <li className='flex items-center '><MdCheckCircleOutline color='blue ' size={'20'} /> 24x7 lifetime access to learning resources</li>
                        <li className='flex items-center '><MdCheckCircleOutline color='blue ' size={'20'} /> Practical-oriented training</li>
                        <li className='flex items-center '><MdCheckCircleOutline color='blue ' size={'20'} /> Online & classroom formats</li>
                        <li className='flex items-center '><MdCheckCircleOutline color='blue ' size={'20'} /> Partnered with top training vendors</li>
                    </ul>
                </div>

                {/* Training Process */}

                {/* <div className="relative p-6 md:p-12">
                    <h2 className="text-2xl font-bold mb-6">Training Process :</h2>

                    //  Container with space for two rows 
                    <div className="relative flex flex-col gap-10 items-center">
                        //  Top Row 
                        <div className="flex gap-4 items-center z-10">
                            {stepsTop.map((text, index) => (
                                <React.Fragment key={index}>
                                    <Step text={text} />
                                    {index < stepsTop.length - 1 && <Arrow />}
                                </React.Fragment>
                            ))}
                        </div>

                        //  Vertical Connector 
                        <div className="absolute top-[52px] right-[84px] w-px h-[72px] bg-blue-500"></div>

                        //  Bottom Row 
                        <div className="flex gap-4 items-center z-10">
                            {stepsBottom.slice().reverse().map((text, index) => (
                                <React.Fragment key={index}>
                                    <Step text={text} />
                                    {index < stepsBottom.length - 1 && <Arrow reverse />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>  */}
                <div className="relative  md:p-10 ml-12">
                    <h2 className="text-2xl font-bold mb-6">Training Process :</h2>
                    <img
                        src="imgs/Frame 58.png" alt=""
                        className='md:max-w-[70%] md:max-h-[70%] mx-auto' />
                </div>
            </div>

            {/* Form Section */}
            <div className="bg-white p-6 mt-5">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-3">Technology Training Programs</h2>
                <p className="text-center mb-5">Comprehensive training across various technology domains to keep <br />your team at the cutting edge.</p>

                <form className="space-y-6 max-w-4xl mx-auto">
                    {/* First Name & Last Name */}
                    <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="w-full mb-4 md:mb-0">
                            <label
                                className="block mb-2"
                                htmlFor="firstName"
                            >
                                First Name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                type="text"
                                placeholder="first name"
                                className="w-full border border-gray-300 rounded-md p-4 transition-all focus:outline-none focus:ring-1 focus:ring-blue-400"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="w-full">
                            <label
                                className="block mb-2"
                                htmlFor="lastName"
                            >
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                type="text"
                                placeholder="last name"
                                className="w-full border border-gray-300 rounded-md p-4 transition-all focus:outline-none focus:ring-1 focus:ring-blue-400"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="w-full mb-4 md:mb-0">
                            <label
                                className="block mb-2"
                                htmlFor="PhoneNo"
                            >
                                Ph.No:
                            </label>
                            <input
                                id="PhoneNo"
                                name="PhoneNo"
                                value={formData.phoneno}
                                type='tel'
                                placeholder="+91 1234567890"
                                className="w-full border border-gray-300 rounded-md p-4 transition-all focus:outline-none focus:ring-1 focus:ring-blue-400"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="w-full">
                            <label
                                className="block mb-2"
                                htmlFor="mail"
                            >
                                Email
                            </label>
                            <input
                                id="mail"
                                name="mail"
                                value={formData.mail}
                                type="email"
                                placeholder="example@gmail.com"
                                className="w-full border border-gray-300 rounded-md p-4 transition-all focus:outline-none focus:ring-1 focus:ring-blue-400"
                                onChange={handleChange}
                            />
                        </div>
                    </div>


                    <div className="col-span-2 border-2 rounded-xl shadow-md p-10 ">
                        <label className="block  font-medium mb-5">Choose a Category:</label>
                        <select className="w-full border p-4 rounded-md mb-5">
                            <option>Data & analytics</option>
                            <option>Python Tools for Data Analysis</option>
                            <option>PySpark</option>
                            <option>MongoDB</option>
                        </select>
                        <div className="flex flex-wrap gap-x-10 gap-y-5 mx-auto">
                            <label><input type="checkbox" /> Data and Analysis</label>
                            <label><input type="checkbox" /> Python Tools for Data Analysis</label>
                            <label><input type="checkbox" /> PySpark</label>
                            <label><input type="checkbox" /> MongoDB</label>
                            <label><input type="checkbox" /> Apache Kafka</label>
                            <label><input type="checkbox" /> Apache Spark</label>
                        </div>
                    </div>
                </form>


                {/* Training Delivery Charges */}
                <div className="p-6">
                    <h3 className="text-blue-700 font-bold mb-4 ml-49 text-2xl">Training Delivery Charges :</h3>
                    <table className=" md:w-4xl  border-sky-300 mx-auto ">
                        <thead className="bg-blue-100">
                            <tr >
                                <th className="border p-4">Delivery Mode</th>
                                <th className="border p-4">Location</th>
                                <th className="border p-4">Charges (per day)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-3">Full-day Online Delivery</td>
                                <td className="border p-3">-</td>
                                <td className="border p-3">Rs. 40,000 + Taxes</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Half-day Online Delivery</td>
                                <td className="border p-3">-</td>
                                <td className="border p-3">Rs. 30,000 + Taxes</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Full-day Classroom Delivery</td>
                                <td className="border p-3">Bengaluru</td>
                                <td className="border p-3">Rs. 50,000 + Taxes</td>
                            </tr>
                            <tr>
                                <td className="border p-3">Full-day Classroom Delivery</td>
                                <td className="border p-3">Rest of India</td>
                                <td className="border p-3">Rs. 60,000 + Taxes</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="text-center mt-6">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">Request custom quote</button>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
} 
