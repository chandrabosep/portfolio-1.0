import React from "react";
import Image from "next/image";

const Card = () => {
  const projects = [
    {
      name: "GHOat",
      image: "/ghoat.jpg",
      technologies: ["NextJS", "TailwindCSS", "Shadcn", "....more"],
      link: "https://ethglobal.com/showcase/ghoat-w64wu",
    },
    {
      name: "ETHMumbai Logo studio",
      image: "/ethmumbai.png",
      technologies: ["NextJS", "TailwindCSS", "Shadcn"],
      link: "https://eth-mumbai-studio.vercel.app/",
    },
    {
      name: "Netflix Clone",
      image: "/netflix.jpg",
      technologies: ["React", "TailwindCSS", "Stripe Payment", "....more"],
      link: "https://netflix-clone-chandrabosep.vercel.app/",
    },

    {
      name: "Retro Website",
      image: "/retro.jpg",
      technologies: ["React", "SCSS", "GSAP", "Locomotive Scroll"],
      link: "https://retro-website-design.vercel.app/",
    },
    {
      name: "Task Tracker",
      image: "/tasktracker.png",
      technologies: ["NextJS", "Shadcn", "Prisma", "....more"],
      link: "https://github.com/chandrabosep/Task-Tracker",
    },
    {
      name: "Cosy Cradle",
      image: "/cosycradel.jpg",
      technologies: ["React", "TailwindCSS", "Firebase"],
      link: "https://cosycradle-580bc.web.app/",
    },
  ];

  return (
    <>
      {projects.map((e) => (
        <div className="w-full md:w-[400px] rounded-3xl md:h-1/2 text-[#c5c5c5] bg-[#0c0f14]">
          <a href={e.link} target="_blank">
            <div className="relative">
              {/* 899 x 510 */}
              <Image
                src={e.image}
                alt={e.name}
                className="w-full rounded-t-3xl md:h-[230px]  object-cover"
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="px-4 pb-4  md:pb-6 max-h-fit md:h-fit">
              <div className="py-2 md:pt-2 md:pb-0.5 text-xl font-semibold md:text-xl">
                {e.name}
              </div>
              <div className="flex gap-2 md:gap-2 flex-wrap md:pt-2">
                {e.technologies.map((e) => (
                  <span className="border rounded-xl md:rounded-md border-gray-500 px-5 py-1.5 md:px-2 md:py-0.5 text-xs md:text-sm">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;
