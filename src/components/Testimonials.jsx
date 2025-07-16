import { useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import { Marquee } from "./magicui/marquee";
const testimonials = [
  {
    name: "Tony Stark",
    img: "/imgs/productlog0.svg",
    body: "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
  {
    name: "Pavan",
    img: "/imgs/productlog0.svg",
    body: "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
  {
    name: "Messi",
    img: "/imgs/productlog0.svg",
    body: "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
  {
    name: "Speed",
    img: "/imgs/productlog0.svg",
    body: "Koyya's team transformed our digital presence with a beautifully designed website and a robust mobile application",
    date: "10 April",
  },
];

export default function Testimonials() {
  const ReviewCard = ({ img, body }) => {
    return (
      <figure
        className={cn(
          "relative h-84 w-60 cursor-pointer overflow-hidden rounded-xl border hover:scale-115 transition-all duration-300",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="bg-white  overflow-hidden ">
          <img
            src={img}
            alt="Coffee Launch"
            className="w-full h-48 object-cover "
          />

        </div>
        <blockquote className="text-sm p-4 bg-white h-full">{body}</blockquote>
      </figure>
    );
  };

  return (
    <div className=" flex flex-col items-center justify-center  py-4 ">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:10s]">
          {testimonials.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
