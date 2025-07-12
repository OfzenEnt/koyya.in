import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/lib/ScrollToTop";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { FaEnvelope, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneno: "",
    mail: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <div >
      <Navbar />
      <ScrollToTop />
      <div className='flex p-10 max-w-7xl mx-auto justify-center items-center gap-5'>
        <div className="space-y-5">
          <h1 className='text-5xl font-light'>Let's Get In Touch!!</h1>
          <p className='text-gray-500 text-xl'>We’d love to hear from you! Fill out the form and our team will get back to you shortly.</p>
          <div className="space-y-5 ">
            <h1 className='font-semibold text-2xl'>Follow us at:</h1>
            <ul className='flex gap-5 '>
              <li className=' p-3 w-12 h-12 flex justify-center items-center rounded-full shadow-2xl bg-gray-200 text-black hover:text-pink-500 hover:bg-pink-100 hover:text-xl transition-all duration-200'><FaInstagram /></li>
              <li className='p-3 w-12 h-12 flex justify-center items-center rounded-full shadow-2xl bg-gray-200 text-black hover:text-white hover:bg-gray-900 hover:text-xl transition-all duration-200'><FaXTwitter /></li>
              <li className='p-3 w-12 h-12 flex justify-center items-center rounded-full shadow-2xl bg-gray-200 text-black hover:text-blue-500 hover:bg-blue-100 hover:text-xl transition-all duration-200'><FaLinkedinIn /></li>
            </ul>
            <div className="space-y-2">
              <p className='flex items-center gap-5 pl-1'><FaEnvelope className=" text-blue-700 text-lg shrink-0" /><span className="font-bold ">Email:</span>krishnamohan@koyya.in</p>
              <p className='flex  gap-2 max-w-lg'><MapPin className="text-blue-700 text-lg shrink-0" /><span className="font-bold">Address:</span>Koyya Enterprises Private Limited <br /> 13th floor, WeWork Salarpuria Magnificia, Thin Factory, 78, old Madras Road , Doorvani Nagar, Bengaluru-560016 India</p>
            </div>
          </div>
        </div>
        <div className="p-10 hidden md:block">
          <img src="/imgs/group_members.png" alt="grouppeople img"
            className="opacity-87" />
        </div>
        {/* <div className='p-10 shadow-xl rounded-xl'>
          <form className='space-y-3'>
            <div className='flex gap-4'>
              <input type="text"
                className='w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-0 focus:ring-2 focus:ring-blue-700 '
                placeholder='Full Name' />
              <input type="text"
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-0 focus:ring-2 focus:ring-blue-700 '
                placeholder='Last Name' />
            </div>
            <input type="text"
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-0 focus:ring-2 focus:ring-blue-700 '
              placeholder='Phone Number' />
            <input type="text"
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-0 focus:ring-2 focus:ring-blue-700 '
              placeholder='Email Address' />
            <textarea name="" id=""
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-0 focus:ring-2 focus:ring-blue-700 '
              placeholder='write your message here...'></textarea>
            <button className='text-white w-full flex items-center justify-center bg-blue-400 p-3 rounded-md gap-2'><FaEnvelope />Send Message</button>
          </form>
        </div> */}
      </div>
      <Footer />
    </div>)
}
export default ContactUs;
