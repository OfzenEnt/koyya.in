import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const links = {
    "Quick Links": [
      "Home",
      "About Us",
      "Products & Services",
      "Careers",
      "Contact",
    ],
    "Technology Services": [
      "Web Development",
      "Mobile Apps",
      "IoT Solutions",
      "Tech Consulting",
      "Upskilling Programs",
    ],
    AgriBusiness: [
      "Coffee Products",
      "Packaging Solutions",
      "Agri E-commerce",
      "Farmer Branding",
      "Web Presence Setup",
    ],
  };

  return (
    <footer className="bg-[#273146] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-2">About KOYYA</h3>
          <p className="text-sm mb-4">
            Bridging technology and agriculture to create sustainable,
            innovative solutions for a better future.
          </p>
          <div className="flex space-x-4 text-lg">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <Icon key={i} className="hover:text-gray-300 cursor-pointer" />
              )
            )}
          </div>
        </div>

        {/* Links */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <ul className="space-y-2 text-sm">
              {items.map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            {[
              [FaMapMarkerAlt, "123 Tech Park, Nairobi"],
              [FaPhoneAlt, "+254 700 123456"],
              [FaEnvelope, "info@koyya.co.ke"],
            ].map(([Icon, text], i) => (
              <li key={i} className="flex items-center">
                <Icon className="mr-2" /> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm border-t border-gray-600 pt-4 text-gray-400">
        © 2023 Koyya Enterprises Private Limited. | Developed by{" "}
        <a className="text-white" href="https://ofzen.in">
          Ofzen.in
        </a>
      </div>
    </footer>
  );
};

export default Footer;
