import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React,{useState} from "react";
function ContactUs() {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        phoneno:"",
        mail:""
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
        <Navbar/>
          <form action="" className="contact-us max-w-4xl mx-auto p-10 bg-white shadow-md rounded-lg mb-10 mt-10">
          <h1 className="text-3xl font-bold mb-10 text-center ">Contact Us</h1>

            <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full mb-4">
            <label className="block mb-2" htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300 rounded-md lg:p-4 p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                onChange={handleChange}
              /> </div>
                <div className="w-full">
              <label className="block mb-2" htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-md lg:p-4 p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
           
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6 mb-5">
            <div className="w-full">
              <label className="block mb-2" htmlFor="lastName">Phn No</label>
              <input
                id="phoneno"
                name="phoneno"
                value={formData.phoneno}
                type="text"
                placeholder="Phn No"
                className="w-full border border-gray-300 rounded-md lg:p-4 p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label className="block mb-2" htmlFor="phoneno">E mail</label>
              <input
                id="mail"
                name="mail"
                value={formData.mail}
                type="text"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md lg:p-4 p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
            </div>
            <div>
                <label htmlFor="Message" className="block mb-2">Message:</label>
                <textarea type="text"     
                 className="w-full border border-gray-300 rounded-md lg:p-4 p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    name="" id="" />
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              >
                Submit
              </button>
            </div>
          </form>
          <Footer/>
          </div> )
}
        export default ContactUs;
