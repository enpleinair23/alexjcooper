import React from "react";
import UI from "../images/service-icons/ui.svg";
import Motion from "../images/service-icons/motion.svg";
import Brand from "../images/service-icons/brand.svg";

const Services = () => {
  return (
    <div id="#services">
      <div className="container mx-auto">
        <div className="md:py-10 pt-5 pb-12 lg:py-12 py-8">
          <div className="flex flex-col relative lg:py-0 py-10">
            <div className="absolute lg:block hidden h-16 bg-white bottom-0 left-0 right-0"></div>
            <div className="absolute lg:block hidden h-16 bg-white top-0 left-0 right-0"></div>
            <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center  relative">
              <div className="lg:col-span-5 flex justify-center sm:justify-start flex-col items-start xl:px-18 lg:px-10 md:px-8 px-5 lg:py-32 md:pb-4 pb-10">
                <h2 className="text-center sm:text-left lg:text-display-lg text-display-md font-semibold pb-4">
                  What I do for Businesses
                </h2>
                <p className="text-body-md font-normal text-neutral-600 pb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  feugiat fringilla lorem sed bibendum.
                </p>
              </div>
              <div className="lg:col-span-7 flex md:flex-row flex-col lg:gap-8 gap-6 items-center xl:pr-16 lg:pr-10 lg:pl-0 md:px-8 px-5 relative">
                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
                  <div className="bg-white p-8 shadow-2xl">
                    <img src={UI} alt="UI" className="pb-8" />
                    <p className="text-display-xs font-semibold pb-4">
                      Video Editing
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                      Websites, application or other design related tasks. I
                      love tackling digital problems.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
                  <div className="bg-white p-8 shadow-2xl">
                    <img src={Motion} alt="Motion" className="pb-8" />
                    <p className="text-display-xs font-semibold pb-4">
                      Motion Graphics
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                      Every interaction you apply to your brand makes you
                      stronger and more priority.
                    </p>
                  </div>
                  <div className="bg-white p-8 shadow-2xl">
                    <img src={Brand} alt="Branding" className="pb-8" />
                    <p className="text-display-xs font-semibold pb-4">
                      Colour Grading
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                      Positioning the brand first. I create visual identity
                      across platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative pb-1">
          <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-hero-line"></span>
          <div className="bg-white px-4 py-2 relative">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.63616 2.66663 2.66663 8.63616 2.66663 16C2.66663 23.3638 8.63616 29.3333 16 29.3333Z"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-neutral-600"
              />
              <path
                d="M11.2933 14.3199L16 19.0133L20.7067 14.3199"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-neutral-600"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
