import React from "react";
import Submit from "./componets/Submit/Submit";
import InfoContact from "./componets/InfoContact/InfoContact";
import FootImage from "../About/components/FootImage/FootImage";
import BackImage from "./componets/BackImage/BackImage";

const Contact = () => {
  return (
    <div>
      <BackImage />
      <Submit />
      <InfoContact />
      <FootImage />
    </div>
  );
};

export default Contact;
