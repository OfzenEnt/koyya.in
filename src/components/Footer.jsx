import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Koyya", to: "/aboutus" },
    { name: "Product & Services", to: "/services/corporate-training" },
    // { name: "Careers", to: "/careers" },
    { name: "ContactUs", to: "/contact", isButton: true },
  ];

  return (
    <footer className="bg-[#273146] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* About */}
        <div>
          <h3 className="font-medium text-lg mb-2">About KOYYA</h3>
          <p className="text-sm mb-4">
            Bridging technology and agriculture to create sustainable,
            innovative solutions for a better future.
          </p>
          <div className="flex space-x-4 text-lg">
            {[
              // { Icon: FaFacebookF, link: "https://facebook.com" },
              // { Icon: FaTwitter, link: "https://twitter.com" },
              {
                Icon: FaLinkedinIn,
                link: "https://www.linkedin.com/company/koyya-enterprises-private-limited/",
              },
              {
                Icon: FaInstagram,
                link: "https://www.instagram.com/koyya.enterprises",
              },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-85 hover:text-white text-gray-200 hover:opacity-100 cursor-pointer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}

        <div>
          <h3 className="font-medium text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((item, i) => (
              <li key={i}>
                <Link to={item.to} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-medium text-lg mb-2">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            {[
              [FaMapMarkerAlt, "Bengaluru, Karnataka, India", null],
              [FaPhoneAlt, "+91 123 456 7890", "tel:+911234567890"],
              [FaEnvelope, "info@koyya.in", "mailto:info@koyya.in"],
            ].map(([Icon, text, link], i) => (
              <li key={i} className="flex items-center">
                <Icon className="mr-2" />
                {link ? (
                  <a
                    href={link}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {text}
                  </a>
                ) : (
                  text
                )}
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
