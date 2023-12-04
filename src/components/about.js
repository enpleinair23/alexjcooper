import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import LogoClouds from "./logoClouds";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      workstation: file(relativePath: { eq: "workstation-image.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 384
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  const metrics = [
    { count: "3", label: "YEARS OF EXPERIENCE" },
    { count: "10+", label: "AD CAMPAIGNs" },
    { count: "1", label: "DESIGN AWARD" },
  ];
  return (
    <div id="#about">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12 items-center lg:py-12 md:pt-12 md:pb-6 pt-10 pb-6">
          <div className="lg:col-span-5 flex flex-row items-center gap-8">
            <div className="flex flex-col xl:pr-8 lg:pl-10">
              <h2 className="md:text-display-lg text-display-md font-semibold md:pb-6 pb-4">
                A bit about me
              </h2>
              <p className="text-body-md font-normal text-neutral-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer. Nunc odio in et, lectus
                sit lorem id integer.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
              <div className="flex items-start pt-12">
              <a
                href="/"
                className="text-body-sm font-semibold text-white bg-neutral-900 py-4 pl-5 pr-4 rounded-full flex flex-row gap-2 items-center justify-center hover:bg-primary-600"
              >
                DOWNLOAD MY CV HERE
              </a>
            </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:grid lg:grid-cols-7 flex md:flex-row flex-col items-center md:gap-8 gap-12">
            <div className="lg:col-span-4 flex">
              <GatsbyImage
                image={getImage(data.workstation)}
                alt="Workstation"
              />
            </div>
            <div className="lg:col-span-3 flex md:self-auto self-stretch grow flex-col xl:gap-16 lg:gap-8 gap-12 xl:pl-8 lg:pr-8">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col self-stretch gap-2 pb-4 border-b border-solid border-neutral-400">
                  <p className="md:text-display-lg text-display-md font-semibold">
                    {item.count}
                  </p>
                  <p className="text-body-sm font-semibold tracking-2 text-neutral-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-4">
        <LogoClouds/>
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

export default About;
