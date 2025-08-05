import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const slides = [
    {
      src: "imgs/home.jpg",
      alt: "Slide 2",
      text: "When rare coffee is bought to your kitchen",
    },
    {
      src: "imgs/home.jpg",
      alt: "Slide 3",
      text: "Enjoy a classic taste for Modern coffee lovers",
    },
    {
      src: "imgs/home.jpg",
      alt: "Slide 1",
      text: "Streamline your food processing business the Sleek way",
    },
    {
      src: "imgs/home.jpg",
      alt: "Slide 4",
      text: "We bottled something that is more than a filter coffee",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (idx) => setCurrentIndex(idx);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(nextSlide, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, currentIndex]);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full md:h-[85vh] h-full flex-shrink-0 relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover rounded-sm"
            />
            {/* <h2 className="absolute bottom-1 md:bottom-24 md:left-24 left-5 text-white md:text-4xl text-2xl font-bold px-4 py-2 bg-transparent rounded-md text-shadow">
              {slide.text}
            </h2> */}
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-8 h-1 rounded border-2 border-white transition-all duration-200 ${currentIndex === idx ? "bg-white" : "bg-gray-400 opacity-60"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-koyya2 rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
        onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-gray-800" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-koyya2 rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
        aria-label="Next slide"
      >
        <FaChevronRight className="text-gray-800" />
      </button>
    </div>
  );
};

export default Carousel;