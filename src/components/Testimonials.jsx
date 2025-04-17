import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Tony Stark",
    image: "imgs/krishna_img.png",
    review:
      "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
  {
    name: "Dany Mia",
    image: "imgs/krishna_img.png",
    review:
      "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
  {
    name: "Messi Speed",
    image: "imgs/krishna_img.png",
    review:
      "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
  {
    name: "Dany Mia",
    image: "imgs/krishna_img.png",
    review:
      "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
  {
    name: "Messi Speed",
    image: "imgs/krishna_img.png",
    review:
      "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
  // Add more testimonials here
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300;

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-blue-50 flex flex-col items-center justify-center py-16 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-base">
          Hear from businesses and partners who have worked with us.
        </p>
      </div>

      <div className="relative w-[70%]">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-800 text-white p-3 rounded-full shadow-md z-10 hover:bg-blue-900"
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex  gap-6 overflow-x-auto scroll-smooth no-scrollbar py-1 px-10"
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[300px] bg-white rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h4 className="font-semibold">{item.name}</h4>
              </div>
              <p className="text-sm text-gray-700 mb-4">{item.review}</p>
              <div className="flex items-center justify-between text-gray-400 text-xs">
                <div className="flex gap-1 text-yellow-400">
                  {/* Stars */}
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span className="text-gray-300">⭐</span>
                </div>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-800 text-white p-3 rounded-full shadow-md z-10 hover:bg-blue-900"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
