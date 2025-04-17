import { useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import { Marquee } from "./magicui/marquee";
const testimonials = [
  {
    name: "Tony Stark",
    img: "imgs/krishna_img.png",
    body: "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
  {
    name: "Pavan",
    img: "imgs/krishna_img.png",
    body: "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
  {
    name: "Messi",
    img: "imgs/krishna_img.png",
    body: "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
  {
    name: "Speed",
    img: "imgs/krishna_img.png",
    body: "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
];

export default function Testimonials() {
  const ReviewCard = ({ img, name, date, body }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{date}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
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
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {testimonials.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
