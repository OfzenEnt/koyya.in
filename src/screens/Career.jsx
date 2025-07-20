import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { MapPin } from 'lucide-react'
import React from 'react'
import { FaBullhorn, FaCalendarAlt, FaClock, FaCode, FaCodiepie, FaEnvelope, FaGraduationCap, FaInstagram, FaLinkedinIn, FaSearch, FaTwitter, FaUserTie } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { MdAttachMoney, MdLocationPin } from 'react-icons/md'

export default function Career() {
    return (
        <>
            <Navbar />
            <div className=' space-y-5 bg-gray-50'>
                <div className='flex flex-col  md:flex-row items-center justify-around p-10 gap-5 overflow-hidden bg-white relative'>
                    <div className='max-w-md xl:max-w-xl  space-3 order-2 md:order-1 z-10'>
                        <h1 className='text-4xl font-medium '>Kickstart Your Career Journey <br className='xl:block hidden' />  at <span className='text-koyya1'>Koyya</span></h1>
                        <p className='lg:max-w-xl'>
                            Join our dynamic team of innovators and problem-solvers. We're looking for passionate students and early career professionals to
                            help shape the future of technology.
                        </p>
                        {/* Search Bar */}
                        {/* <div className="flex flex-col max-w-md justify-center  items-center gap-3 mt-10  border border-gray-300 rounded-md shadow-sm py-3 px-5">
                            <div className='flex flex-col md:flex-row w-full h-full gap-3'>
                                <div className='relative '>
                                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-koyya1 h-4 w-4 opacity-85 " />

                                    <input
                                        type="text"
                                        placeholder="Job title"
                                        className=" w-48 lg:w-48 px-4 py-3 pl-10 rounded-md focus:outline-none "
                                    />
                                </div>
                                <h1 className='hidden md:block mt-3 '>|</h1>
                                <div className='relative w-full'>
                                    <MdLocationPin className='absolute left-3 top-1/2 transform -translate-y-1/2 text-koyya1 h-5 w-5' />
                                    <select
                                        className=" w-full md:w-48 px-4 py-3 pl-10 rounded-md focus:outline-none  "
                                    >
                                        <option >All Locations</option>
                                        <option >Bangalore</option>
                                        <option >Remote</option>
                                    </select>
                                </div>
                            </div>
                            <button className="w-full  px-2 text-sm py-1 bg-koyya2 text-white  rounded-sm hover:bg-koyya1 transition">
                                Search
                            </button>
                        </div> */}
                    </div>
                    <div className=' order-1 md:order-2 p-10 '>
                        <div className="relative flex items-center justify-center py-16 mb-15 bg-white">
                            <div className="absolute lg:-left-35 -left-10 top-21 w-32 h-48 bg-[url('/imgs/zigzag.svg')] bg-contain bg-no-repeat opacity-80"></div>

                            {/* Left Image - Square */}
                            <div className="lg:w-48 lg:h-48 w-40 h-40 absolute lg:top-2  lg:left-10 top-4 left-20 z-20">
                                <img
                                    src="/imgs/girl_with_laptop.svg"
                                    alt="Girl working"
                                    className="w-full h-full object-cover border-4 border-white rounded-full shadow-md"
                                />
                            </div>
                            <div className="lg:w-60 lg:h-48 w-52 h-40 relative top-20 lg:-left-35 -left-10 z-10">
                                <img
                                    src="/imgs/boy_with_laptop.svg"
                                    alt="Boy working"
                                    className="w-full h-full object-cover border-4 border-white rounded-xl shadow-xl"
                                />
                            </div>
                            <div className='absolute lg:w-32 lg:h-32 w-24 h-24 rounded-3xl -bottom-10 lg:-left-40 -left-15  bg-[#CBEDFF]'>
                            </div>

                            {/* Top-right Code Icon */}
                            <div className="absolute lg:right-0 -right-10 top-6 bg-white p-1 rounded shadow text-koyya1 text-xs border border-blue-100 z-10">
                                &lt;/&gt;
                            </div>

                            <div className='absolute w-24 h-24 bg-[#D3F9F3] rounded-full top-3 lg:right-0 -right-15 '> </div>
                            <div className='absolute lg:block hidden w-10 h-10 bg-pink-300 top-53 right-20 rounded-full rounded-tl-none'></div>

                            <div className='absolute lg:block hidden top-25 -left-5 '>
                                <img src="/imgs/like_hash.svg" alt='likehash'
                                    className='w-16 h-16' />
                            </div>
                            {/* <div className='absolute lg:block hidden bottom-2 left-30 '>
                            <img src="/imgs/pencil_scale.svg" alt='likehash'
                                className='w-16 h-16' />
                        </div> */}
                            {/* Graduation hat bottom-right */}
                            <div className="absolute bottom-3 -right-10 lg:bottom-5 lg:right-0 z-10 w-12 h-12 lg:w-16 lg:h-16 bg-[url('/imgs/graduationcap.gif')] bg-contain bg-no-repeat ">
                            </div>

                            {/* Small dot grid (mocked using dots) */}
                            <div className="absolute lg:block hidden z-30 -bottom-20 right-20 text-xl text-gray-400">
                                <img src="/imgs/dots.svg" alt='likehash'
                                    className='w-38 h-38' />
                            </div>
                            <div className="absolute w-0 h-0  lg:-bottom-5 lg:right-0 -bottom-5 -right-10
                            border-l-[44px] border-r-[44px] border-b-[79.28px] lg:border-l-[55px] lg:border-r-[55px] lg:border-b-[89.28px] border-l-transparent border-r-transparent border-b-[#7DD1FF] -rotate-30">
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-7xl flex flex-col mx-auto items-center justify-center p-10 gap-4'>
                    <h1 className='text-4xl font-semibold'>Available Roles</h1>
                    <p className='text-gray-600'>Explore our current openings and find the perfect opportunity to kickstart your career.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                        {[
                            { color: "bg-[#DBEAFE] text-[#2563EB]", icon: <FaCode />, title: "Frontend Developer Intern", desc: "Build responsive user interfaces using modern JavaScript frameworks and libraries.", other: ["Remote", "Full time"] },
                            { color: "bg-[#FEF9C3] text-[#CA8A04]", icon: <FaBullhorn />, title: "Marketing Intern", desc: "Create and execute digital marketing campaigns to grow our user base  engagement.", other: ["Remote", "Full time"] },
                            { color: "bg-[#DBEAFE] text-[#2563EB]", icon: <FaCode />, title: "Product Manager Intern", desc: "Work with teams to plan features, manage roadmaps, and improve user experience.", other: ["Remote", "Full time"] },
                            { color: "bg-[#F3E8FF] text-[#9638EA]", icon: <FaUserTie />, title: "HR Intern", desc: "Support hiring, onboarding,team engagement activities. Great for those interested in building people-first workplaces.", other: ["Remote", "Full time"] },
                            { color: "bg-[#DBEAFE] text-[#2563EB]", icon: <FaCode />, title: "Market Research Intern", desc: "Collect and analyze data on users, competitors, and trends to guide business strategy. Ideal for analytical minds.", other: ["Remote", "Full time"] },
                            { color: "bg-[#DBEAFE] text-[#2563EB]", icon: <FaCode />, title: "Market Research Intern", desc: "Collect and analyze data on users, competitors, and trends to guide business strategy. Ideal for analytical minds.", other: ["Remote", "Full time"] },

                        ].map((items, index) => (
                            <div className='bg-gray-50 shadow-lg rounded-md p-5 h-full space-y-2 hover:bg-white hover:shadow-2xl transition-transform duration-300' key={index}>
                                <div className='flex'><span className={`p-4 rounded-md ${items.color}`}>{items.icon}</span></div>
                                <h1 className='font-medium'>{items.title}</h1>
                                <p className='text-gray-600 text-xs'>{items.desc}</p>
                                <div className='flex  gap-2 py-3 rounded text-xs text-gray-700 mt-5'>
                                    <p className='bg-gray-200 px-2'>{items.other[0]}</p>
                                    <p className='bg-gray-200 px-2'>{items.other[1]}</p>
                                </div>
                                <button className='w-full bg-koyya2 hover:bg-koyya1 p-1 rounded text-white cursor-pointer'>Apply Now</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='p-10 bg-white'>
                    <section className='flex flex-col items-center justify-center max-w-5xl mx-auto  border border-gray-300 p-5 lg:py-20 rounded-lg shadow-xl gap-10  '>
                        <h1 className='text-3xl text-koyya1 text-center font-semibold '>How We Collaborate</h1>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

                            {[
                                { icon: "/imgs/groppeople.svg", title: "Student Interns", desc: "Join project teams and contribute their skills", color: "bg-[#C5F0E9]" },
                                {
                                    icon: "/imgs/teacher.svg", title: "Mentors", desc: "Guide and provide feedback on work", color: "bg-[#FCE2DC]"
                                },
                                {
                                    icon: "/imgs/building.svg", title: "Partner Companies", desc: "Provide real-world projects and challenges", color: "bg-[#DFEDFE]"
                                },

                            ].map((items, index) => (
                                <div className=' flex flex-col  items-center justify-center gap-2' key={index}>
                                    <div className={`p-3 rounded-full ${items.color} w-24 h-24 flex items-center justify-center`}><img src={items.icon} alt="icon" className='w-12 h-12 ' /></div>
                                    <h1 className='text-xl font-semibold'>{items.title}</h1>
                                    <p className='text-gray-500 text-center'>{items.desc}</p>
                                </div>

                            ))}
                        </div>
                    </section>
                </div>
                <div className='flex flex-col items-center justify-center mx-auto p-10'>
                    <h1 className='text-3xl font-semibold p-2'>How We Work</h1>
                    <p className='text-gray-500 mb-5'>Choose the internship structure that fits your schedule and learning goals</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {[
                            { color: "bg-[#DFEDFE]", title: "Full-Time Internship", duration: "2 Months", Stipend: "None", Workload: "2 Months", Eligibility: "Skill-based" },
                            { color: "bg-[#C5F0E9]", title: "Part-Time Internship", duration: "4 Months or 6 Months", Stipend: "Performance-Based", Workload: "Flexible (10-12 hours/weeks)", Eligibility: "Skill-based" },

                        ].map((items, index) => (
                            <div className='relative p-5 shadow-xl rounded-xl  h-full overflow-hidden hover:shadow-2xl bg-white transition-all' key={index}>
                                <div className={`absolute bg-gray-200 rounded-full w-32 h-32 -top-10 -right-11`}></div>
                                <p>
                                    <span className={`${items.color} p-1 rounded-sm text-gray-700 text-sm`}>{items.title}</span>
                                </p>

                                <ul className='flex flex-col  p-5 gap-5 h-full'>
                                    <li className='flex  gap-2'>
                                        <div className={`h-8 w-8 p-1 ${items.color} rounded-full flex items-center justify-center`}><FaCalendarAlt /></div>
                                        <p className='flex flex-col'>Duration: <span className='text-gray-500 text-xs'>{items.duration}</span></p>
                                    </li>
                                    <li className='flex  gap-2'>
                                        <div className={`h-8 w-8 p-1 ${items.color} rounded-full flex items-center justify-center`}><MdAttachMoney /></div>
                                        <p className='flex flex-col'>Stipend: <span className='text-gray-500 text-xs'>{items.Stipend}</span></p>
                                    </li>
                                    <li className='flex  gap-2'>
                                        <div className={`h-8 w-8 p-1 ${items.color} rounded-full flex items-center justify-center`}><FaClock /></div>
                                        <p className='flex flex-col'>Workload: <span className='text-gray-500 text-xs'>{items.Workload}</span></p>
                                    </li>
                                    <li className='flex gap-2'>
                                        <div className={`h-8 w-8 p-1 ${items.color} rounded-full flex items-center justify-center`}><FaGraduationCap /></div>
                                        <p className='flex flex-col'>Eligibility: <span className='text-gray-500 text-xs'>{items.Eligibility}</span></p>
                                    </li>
                                    <hr />
                                    <p>Technologies:</p>
                                    <div className='flex gap-2'>
                                        <p className='bg-gray-300 text-xs text-gray-600 rounded  px-2'>IOT</p>
                                        <p className='bg-gray-300 text-xs text-gray-600 rounded  px-2'>Flutter</p>
                                        <p className='bg-gray-300 text-xs text-gray-600 rounded  px-2'>Web Dev</p>

                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                {/* <div className='flex flex-col items-center justify-center p-10 gap-4 bg-white'>
                    <h1 className='text-3xl font-semibold font-sans'>Life at Koyya</h1>
                    <p className='text-gray-600'>Experience a workplace that values creativity, diversity, and continuous learning.</p>
                    <div className='relative flex flex-row bg-white  md:shadow-lg rounded-xl md:p-20 lg:p-5 overflow-hidden'>
                        <div className="absolute w-20 h-20 bg-[#A96DF6CC] text-[#6e8fc5] rounded-b-md rounded-br-3xl rounded-e-lg rounded-ee-xs rounded-es-full rounded-tr-3xl top-0 blur -left-3 -z-10 md:z-0"></div>
                        <div className="absolute w-24 h-24 bg-[url('/imgs/Star.svg')] bg-contain bottom-3 left-1 -z-10 md:z-0"></div>
                        <div className='flex flex-col gap-10 items-center justify-center p-5'>

                            {[
                                { color: "bg-[#FFF5FE]", text_col: "text-[#da88d7]", desc: "“The mentorship I received during my internship helped me build confidence and skills that landed me a full-time role after graduation.”", icon: "/imgs/krishna_img.png", other: ["Sam perk", "Former uiux design  intern", "10 April"] },
                                { color: "bg-[#F5F9FF]", text_col: "text-[#6e8fc5]", desc: "“The mentorship I received during my internship helped me build confidence and skills that landed me a full-time role after graduation.”", icon: "/imgs/krishna_img.png", other: ["Madhu", "Former Product Manager  intern", "30 April"] }
                            ].map((items, index) => (
                                <div className={`${items.color} flex flex-col rounded-3xl shadow-lg max-w-xl  p-5 gap-4  border-2 z-10`} key={index}>
                                    <p><FaQuoteLeft className={`${items.text_col}`} /></p>
                                    <p className='font-light text-lg'><i>{items.desc}</i></p>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <img src={items.icon} alt=""
                                                className='w-12 h-12 rounded-full ' />
                                            <p className='flex flex-col text-sm'>{items.other[0]}
                                                <span className='text-xs'>{items.other[1]}</span>
                                            </p>
                                        </div>
                                        <p className='float-end text-xs hidden md:block'>{items.other[2]}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src="/imgs/group_members.png" alt=""
                                className='w-md hidden lg:block' />
                        </div>
                    </div>
                </div> */}

            </div>
            <Footer />
        </>
    )
}
