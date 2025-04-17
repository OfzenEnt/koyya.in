import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import Testimonials from "./components/Testimonials";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./lib/ScrollToTop";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const NumberCounter = ({ endValue }) => {
    return (
      <div>
        <CountUp
          start={0}
          end={endValue}
          duration={2} // duration in seconds
          separator=","
          suffix=" "
          leadingZeros={false}
          className="text-2xl font-semibold text-center text-blue-700"
        />
      </div>
    );
  };
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* Hero section */}
      <section className="bg-gradient-to-br from-white to-[#d2f3ec] flex items-center h-[93vh] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Empowering <span className="text-green-700">Agriculture</span>
              <br />
              and <span className="text-blue-500">Technology</span>
              <br />
              <span className="text-blue-900">Naturally Innovative.</span>
            </h1>
            <p className="mt-6 text-gray-500 text-base sm:text-lg">
              Bridging the gap between cutting-edge technology and sustainable
              agriculture to create impactful solutions for the future.
            </p>
            <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-300 to-green-300 shadow-md hover:scale-105 transition font-semibold text-gray-900">
              Explore More
            </button>
          </div>

          {/* Right Images */}
          <div className="relative w-full h-[300px] md:h-[400px] xl:h-[500px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/vids/dev.mp4"
              alt="developer"
              className="w-[70%] h-[70%] object-cover  rounded-tl-[80px] rounded-tr-lg rounded-br-lg rounded-bl-md shadow-lg absolute top-0 right-0"
            />
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/vids/agri.mp4"
              alt="farm"
              className="w-[60%] h-[60%] object-cover rounded-tl-[50px] rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-md absolute bottom-0 left-0"
            />
          </div>
        </div>
      </section>
      {/* Announcements Section */}
      <section className="py-16 bg-white px-6 md:px-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
              Latest Announcements
            </h2>
            <p className="text-gray-600 mt-4">
              Stay updated with our newest developments, products, and company
              news.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg ">
              <img
                src="/imgs/2149241221.jpg"
                alt="Coffee Launch"
                className="w-full h-48 object-cover hover:scale-105 transition"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  New Single-Origin Coffee Launch
                </h3>
                <p className="text-sm text-gray-500 mt-1">June 15, 2023</p>
                <p className="text-gray-600 mt-3">
                  Discover our new line of premium single-origin coffee beans
                  sourced directly from sustainable farms.
                </p>
                <button className="mt-6 inline-block px-5 py-2 border border-green-700 text-green-800 rounded-full hover:bg-green-700 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg">
              <img
                src="/imgs/2149313746.jpg"
                alt="Tech Summit"
                className="w-full h-48 object-cover hover:scale-105 transition"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Tech Summit 2023
                </h3>
                <p className="text-sm text-gray-500 mt-1">July 22-24, 2023</p>
                <p className="text-gray-600 mt-3">
                  Join us for our annual technology summit featuring workshops
                  on IoT, AI, and digital transformation.
                </p>
                <button className="mt-6 inline-block px-5 py-2 border border-green-700 text-green-800 rounded-full hover:bg-green-700 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg">
              <img
                src="/imgs/behind_koyya.jpg"
                alt="Partnership"
                className="w-full h-48 object-cover hover:scale-105 transition"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Strategic Partnership Announcement
                </h3>
                <p className="text-sm text-gray-500 mt-1">May 5, 2023</p>
                <p className="text-gray-600 mt-3">
                  We're proud to announce our new partnership with FarmTech
                  Alliance to develop agricultural IoT solutions.
                </p>
                <button className="mt-6 inline-block px-5 py-2 border border-green-700 text-green-800 rounded-full hover:bg-green-700 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="bg-gray-50 w-full px-4 sm:px-8 lg:px-16 py-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="imgs/team_illustration.svg"
              alt="Team illustration"
              className="rounded-xl w-full max-w-xs lg:max-w-md 2xl:max-w-lg object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Stats + Button */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-center mb-6">
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-center lg:mb-6 items-center py-3">
                <div>
                  <div>
                    <div className="text-blue-700 font-semibold text-xl md:text-2xl flex items-center justify-center">
                      <NumberCounter endValue={50} /> +
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    Employees
                  </p>
                </div>
                <div>
                  <div>
                    <div className="text-blue-700 font-semibold text-xl md:text-2xl flex items-center justify-center">
                      <NumberCounter endValue={25} /> +
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base ">
                    Years Experience
                  </p>
                </div>
                <div>
                  <div>
                    <div className="text-blue-700 font-semibold text-xl md:text-2xl flex items-center justify-center">
                      <NumberCounter endValue={100} /> +
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base"> Smiles</p>
                </div>
                {/* Learn More Button (visible for large and up) */}

                <div className="hidden lg:block">
                  <Link to="/aboutus">
                    <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md shadow-sm hover:bg-purple-200 mt-4 lg:mt-0">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Learn More Button for small devices */}
            <div className="block lg:hidden text-center mb-4">
              <Link to="/aboutus">
                <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md shadow hover:bg-purple-200 transition">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Description */}
            <p className="italic text-gray-700 text-justify mb-6 px-2 sm:px-4 lg:px-0">
              Koyya Enterprises Private Limited (KEPL), headquartered in
              Bengaluru, operates across two key sectors: Technology and
              Agriculture. The company is structured into two distinct
              verticals: Glarimy Business Unit and Krissaco Business Unit, each
              with a clear focus and purpose.
            </p>

            {/* Founder Info */}
            <div className="flex items-center gap-4 px-2 sm:px-4 lg:px-0">
              <img
                src="imgs/krishna_img.png"
                alt="Krishna Mohan Koyya"
                className="rounded-full w-[80px] h-[80px] object-cover shadow-lg"
              />
              <div>
                <p className="text-lg font-semibold">Krishna Mohan Koyya</p>
                <p className="text-sm text-gray-600">
                  CEO, Krishna Mohan Koyya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
