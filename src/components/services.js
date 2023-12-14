import React from "react";
import UI from "../images/service-icons/ui.svg";
import Motion from "../images/service-icons/motion.svg";
import Brand from "../images/service-icons/brand.svg";

const Services = () => {
  return (
    <div id="#services">
      <div className="container mx-auto">
        <div className="pt-8 pb-12">
          <div className="flex flex-col relative">
            <div className="absolute lg:block hidden h-16 bg-white bottom-0 left-0 right-0"></div>
            <div className="absolute lg:block hidden h-16 bg-white top-0 left-0 right-0"></div>
            <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center  relative">
              <div className="lg:col-span-5 flex justify-center sm:justify-start flex-col items-start xl:px-18 lg:px-10 md:px-8 px-5">
                <h2 className="text-center sm:text-left lg:text-display-lg text-display-md font-semibold pb-4">
                  What I do for Businesses
                </h2>
                <p className="text-body-md font-normal text-neutral-600 pb-8">
                  As a video editor working with businesses, I offer a range of
                  services to help businesses enhance their visual content and
                  messaging. Here's what I can contribute:
                </p>
              </div>
              <div className="lg:col-span-7 flex md:flex-row flex-col lg:gap-8 gap-6 items-center xl:pr-16 lg:pr-10 lg:pl-0 md:px-8 px-5 relative">
                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
                  <div className="bg-white p-8 shadow-2xl">
                    <img src={UI} alt="UI" className="pb-4" />
                    <p className="text-display-xs font-semibold pb-2">
                      Video Editing
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                      Create compelling brand videos that showcase the company's
                      values, products, or services.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
                  <div className="bg-white p-8 shadow-2xl">
                    <img src={Motion} alt="Motion" className="pb-4" />
                    <p className="text-display-xs font-semibold pb-2">
                      Motion Graphics
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                      Incorporate motion graphics and visual effects to make
                      videos more engaging and visually appealing.
                    </p>
                  </div>
                  <div className="bg-white p-8 shadow-2xl">
                    <img src={Brand} alt="Branding" className="pb-4" />
                    <p className="text-display-xs font-semibold pb-2">
                      Colour Grading
                    </p>
                    <p className="text-body-md font-normal text-neutral-600">
                      Ensure consistency in color and tone throughout the video,
                      maintaining the brand's visual identity and style.
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
