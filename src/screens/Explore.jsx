import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/lib/ScrollToTop';
import react, { useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Explore() {
    const location = useLocation();

    useEffect(() => {
        const scrollToHash = () => {
            if (location.hash) {
                const id = location.hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    const elementPosition =
                        element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: elementPosition - 80,
                        behavior: "smooth",
                    });
                } else {
                    setTimeout(scrollToHash, 100); // Retry if element not in DOM yet
                }
            }
        };
        scrollToHash();
    }, [location]);
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <div className='md:px-32 md:py-20 p-10 bg-white space-y-20'>
                <div id="business-solutions-header">
                    <div className='space-y-3'>
                        <h1 className='text-koyya2 md:text-4xl text-2xl font-semibold'>Business Solutions </h1>
                        <p className='text-gray-500'>Comprehensive services designed to enhance business operations and growth</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mt-8'>
                        {[
                            { bg: "bg-blue-50", text: "text-blue-800", icon: "/imgs/corporatelogo.svg", title: "Corporate Training", desc: "Specialized training programs designed to enhance workforce skills.", link: "/services/corporate-training", other: ["Technical Skills", "Team Building"] },
                            { bg: "bg-sky-50", text: "text-sky-400", icon: "/imgs/tech_skills.svg", title: "Software Development", desc: "Custom software solutions tailored to meet specific business needs.", link: "/services/software-development", other: ["Web Development", "App Development"] },
                            { bg: "bg-violet-100", text: "text-violet-800", icon: "/imgs/handshake.svg", title: "Consulting Services", desc: "Expert guidance on technology strategy, digital transformation.", link: "/services/consulting", other: ["IT Strategy", "Digital Transformation"] },
                        ].map((service, index) => (
                            <div className='border p-1 rounded-xl overflow-hidden  shadow-lg hover:shadow-xl transition ' key={index}>
                                <div className={`${service.bg} w-full h-52 flex justify-center items-center p-8 rounded-t-lg`}>
                                    <img src={service.icon}
                                        alt={service.title}
                                        className='w-28 object-cover' />
                                </div>
                                <div className="bg-white p-3 space-y-2 ">
                                    <h2 className='text-2xl font-bold mt-4'>{service.title}</h2>
                                    <p className='text-gray-600 mt-2 max-w-md'>{service.desc}</p>
                                    <p className={`text-xs ${service.text} py-2 flex gap-3`}><span className={`${service.bg} p-2 rounded-sm shadow-sm`}>{service.other[0]}</span> <span className={`${service.bg} p-2 rounded-sm shadow-sm`}>{service.other[1]}</span></p>
                                    <Link to={service.link} className={`${service.text} hover:underline border flex items-center w-36 rounded-md gap-3 p-2`}> Read More <FaArrowRightLong size={14} /></Link>
                                </div>
                            </div>))}
                    </div>
                </div>
                <div id="educational-services">
                    <div className='space-y-3'>
                        <h1 className='text-koyya2 md:text-4xl text-2xl font-semibold'>Educational Services </h1>
                        <p className='text-gray-500'>Innovative educational solutions designed for academic excellence and professional development</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mt-8'>
                        {[
                            { bg: "bg-[#FFFBEB]", text: "text-orange-400", button: "hover:bg-orange-400 hover:text-white", icon: "/imgs/teacher.svg", title: "Academic Workshops", desc: "Interactive workshops designed to enhance learning experiences and develop practical skills for students and faculty.", link: "/services/academic-workshops" },
                            { bg: "bg-[#EEF2FF]", text: "text-blue-500", button: "hover:bg-blue-500 hover:text-white", icon: "/imgs/breifcaselogo.svg", title: "GRIP Program", desc: "Graduate Readiness and Industry Preparedness program designed to bridge the gap between academia and industry requirements.", link: "/services/grip" },
                            { bg: "bg-[#E5FBFF]", text: "text-sky-500", button: "hover:bg-sky-400 hover:text-white", icon: "/imgs/mobilelogo.svg", title: "Glarimy Wiz", desc: "An intelligent learning platform that adapts to individual learning styles and pace, enhancing educational outcomes.", link: "/services/glarimy-wiz" },
                        ].map((service, index) => (
                            <div className='border p-1 rounded-xl overflow-hidden  shadow-lg hover:shadow-xl transition ' key={index}>
                                <div className={`${service.bg} w-full h-52 flex justify-center items-center p-8 rounded-t-lg`}>
                                    <img src={service.icon}
                                        alt={service.title}
                                        className='w-28 object-cover' />
                                </div>
                                <div className="bg-white p-3 space-y-2 ">
                                    <h2 className='text-2xl font-bold mt-4'>{service.title}</h2>
                                    <p className='text-gray-600 mt-2 max-w-md'>{service.desc}</p>
                                    <Link to={service.link} className={`${service.text} ${service.button} border flex items-center w-36 rounded-md gap-3 p-2`}> Read More <FaArrowRightLong size={14} /></Link>
                                </div>
                            </div>))}
                    </div>
                </div>
                <div id="agricultural-technology">
                    <div className='space-y-3'>
                        <h1 className='text-koyya2 md:text-4xl text-2xl font-semibold'>Agricultural Technology </h1>
                        <p className='text-gray-500'>Innovative solutions designed to revolutionize agricultural practices and enhance productivity</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mt-8'>
                        {[
                            { bg: "bg-[#F3F2FD]", text: "text-gray-600", icon: "/imgs/savetreelogo.svg", title: "Krissaco Sleek", desc: "A SaaS solution for the food processing industry to optimise the operations driven by data.", link: "/services/krissaco-sleek" },
                            { bg: "bg-[#F0FDFA]", text: "text-green-400", icon: "/imgs/mobilewithplantlogo.svg", title: "Krissaco Drip", desc: "he farmer friendly iOT system is your own lab. Measure the important soil parameters like a pro. I", link: "/services/krissaco-drip" },
                            { bg: "bg-[#E0F2FE]", text: "text-blue-500", icon: "/imgs/bulkhornlogo.svg", title: "Digital Marketing", desc: "Comprehensive digital marketing strategies to enhance online presence, drive traffic, and convert leads into customers.", link: "/services/digital-marketing" },
                            { bg: "bg-[#FFFBEB]", text: "text-orange-400", icon: "/imgs/baglogo.svg", title: "Krissaco Urban Brews Coffee", desc: "the premium coffee powder from the plantations of Coorg, Chikmaguluru is a class of its own.", link: "/services/urban-brews" },
                            { bg: "bg-[#F1F6FE]", text: "text-blue-700", icon: "/imgs/graphlogo.svg", title: "Market Research", desc: "want to track how your products is working in the market? Want to assess your competition. ", link: "/services/market-research" },
                        ].map((service, index) => (
                            <div className='border p-1 rounded-xl overflow-hidden  shadow-lg hover:shadow-xl transition ' key={index}>
                                <div className={`${service.bg} w-full h-52 flex justify-center items-center p-8 rounded-t-lg`}>
                                    <img src={service.icon}
                                        alt={service.title}
                                        className='w-28 object-cover' />
                                </div>
                                <div className="bg-white p-3 space-y-2 ">
                                    <h2 className='text-2xl font-bold mt-4'>{service.title}</h2>
                                    <p className='text-gray-600 mt-2 max-w-md'>{service.desc}</p>
                                    <Link to={service.link} className={`${service.text} hover:underline border flex items-center w-36 rounded-md gap-3 p-2`}> Read More <FaArrowRightLong size={14} /></Link>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Explore;