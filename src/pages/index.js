import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Services from "../components/services";
import Works from "../components/works";
import About from "../components/about";
import Hero from "../components/hero";
import Contact from "../components/contact";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Works />
    <Services />
    <About />
    <Contact />
  </Layout>
);

export default IndexPage;
