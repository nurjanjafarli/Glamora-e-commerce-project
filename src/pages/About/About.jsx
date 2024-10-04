import React from "react";
import AboutInfo from "./components/AboutInfo/Aboutİnfo";
import InfoOneCont from "./components/InfoOneCont/InfoOneCont";
import InfoTwoCont from "./components/InfoTwoCont/InfoTwoCont";
import InfoThree from "./components/InfoThree/InfoThree";
import FootImage from "./components/FootImage/FootImage";
import Testimonials from "./components/Testimonials/Testimonials";

const About = () => {
  return (
    <div>
      <AboutInfo />
      <InfoOneCont />
      <InfoTwoCont />
      <InfoThree />
      <Testimonials />
      <FootImage />
    </div>
  );
};

export default About;
