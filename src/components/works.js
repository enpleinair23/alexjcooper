import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import WorkItem from "./workItem";

const Works = () => {
  const data = useStaticQuery(graphql`
    {
      allWorksJson {
        nodes {
          id
          title
          description
          link
          image {
            childImageSharp {
              gatsbyImageData(
                width: 512
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);
  console.log(data.allWorksJson.nodes[1]);
  return (
    <div id="#work">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-12 py-8">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-row justify-center sm:justify-start items-center gap-8 lg:pr-8">
              <h2 className="text-center sm:text-left lg:text-display-lg text-display-md font-semibold lg:pl-10">
                The work I do, <br></br>and businesses I help
              </h2>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex md:flex-row flex-col flex-wrap">
              {data.allWorksJson.nodes.map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                  link={node.link}
                />
              ))}
            </div>
            <div className="flex items-start lg:px-10 md:-mt-7">
              <a
                href="https://www.youtube.com/@ENPLEINAIRFILMS"
                target="_blank"
                rel="noreferrer"
                className="text-body-sm font-semibold text-white bg-neutral-900 hover:bg-primary-600 py-4 pl-5 pr-4 rounded-full flex flex-row gap-2 items-center justify-center"
              >
                VISIT MY YOUTUBE
              </a>
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

export default Works;
