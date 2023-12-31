import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const LogoClouds = () => {
  const data = useStaticQuery(graphql`
    {
      clients: allFile(
        filter: { relativeDirectory: { eq: "client-logos" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            name
            publicURL
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className="container mx-auto">
        <div className="md:py-6 py-4">
          <div className="flex justify-center relative pb-1">
            <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-logo-clouds-line"></span>
            <div className="bg-white px-6 py-3 relative">
              <p className="text-body-sm font-semibold tracking-2 text-neutral-500">
                PRODUCED AND EDITED FOR
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 py-6 px-6">
            {data.clients.edges.map(({ node }) => (
              <img src={node.publicURL} alt={node.name} key={node.id} className=""/>
            ))}
          </div>
          <div className="flex justify-center relative pb-1">
            <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-logo-clouds-line"></span>
            <div className="bg-white px-6 py-3 relative">
              <p className="text-body-sm font-semibold tracking-2 text-neutral-500">
                MORE THAN 10+ BRANDS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoClouds;
