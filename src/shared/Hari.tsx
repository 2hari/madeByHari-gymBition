import { useState, useRef, useEffect } from "react";

const buttonClasses = `after:absolute after:inset-0 after:z-[-1] after:opacity-0 after:transition-opacity hover:after:opacity-100 after:shadow-md dark:after:shadow-none`;

const Hari = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!sidebarRef.current?.contains(e.target as Node)) {
        setShowSidebar(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={`group fixed right-5 bottom-5 z-50`}>
      <div className="animate-tilt absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#00e0f3] to-[#00e887] opacity-60 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="peer relative z-30 h-16 w-16 overflow-hidden rounded-full bg-black"
      >
        <img
          src={"/H.svg"}
          height={64}
          width={64}
          alt="logo Hari"
          className="z-50 object-cover"
        />
      </button>

      <div
        className={`fixed top-0 z-50 ${
          showSidebar ? "left-0" : "-left-96"
        } h-screen w-9/12 bg-[#0e1111] shadow-2xl delay-150 duration-200 ease-out sm:w-72`}
        ref={sidebarRef}
      >
        <nav role="admin" className="z-50 py-4">
          <div className="relative flex h-[95vh] flex-col justify-between overflow-y-auto overflow-x-hidden">
            <div className="border-b-2 border-gray-700 px-3 pt-6 pb-8">
              <span className="2xl:text-4xl  text-xl text-gray-200 md:text-3xl">
                Hello! I&apos;m{" "}
                <span className="2xl:text-4xl bg-gradient-to-r from-[#00e0f3] to-[#00e887] bg-clip-text text-xl font-bold text-transparent md:text-3xl">
                  Hari
                </span>
              </span>
              <p
                className={
                  "2xl:text-xl mt-3 max-w-2xl  text-gray-200 md:text-lg"
                }
              >
                I Built this website.
              </p>
            </div>
            <div className="px-3">
              <h3 className="2xl:text-xl  mb-2 font-bold text-gray-200 md:text-lg">
                Project overview
              </h3>
              <p className="text-gray-200 ">
                A Beautiful landing page built with React, Tailwind & Framer
                motion for a gym studio.
              </p>
              <div className="mt-1 mb-16">
                <a
                  href="https://www.figma.com/file/LvJNWaiV6tNJIFVjCZuZ93/GYM-BITION?type=design&node-id=0%3A1&t=Qz8ZfW4idSEItp2H-1"
                  className="text-[#00e0f3]"
                >
                  Compare with Figma design
                </a>
              </div>
              <h3 className="2xl:text-xl  mb-2 font-bold text-gray-200 md:text-lg">
                Tech Stack
              </h3>
              <div className="space-y-2">
                <img
                  src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                  alt="TypeScript"
                />
                <img
                  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                  alt="React"
                />
                <img
                  src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                  alt="TailwindCSS"
                />
                <img
                  src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
                  alt="Figma"
                />
                <img
                  src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue"
                  alt="Framer"
                />
              </div>
            </div>
            <div className="border-t-2 border-gray-700 px-3 pt-8">
              <h3 className={`2xl:text-xl mb-6 text-white md:text-lg`}>
                Want to build somethings similiar ? Reach me out 👇
              </h3>

              <a
                href="https://www.upwork.com/workwith/keshavm3"
                className={`flex w-full items-center justify-around rounded-md   p-2 text-2xl font-semibold text-black ${buttonClasses} bg-gradient-to-r from-[#00e0f3] to-[#00e887]`}
              >
                Hire Me
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Hari;
