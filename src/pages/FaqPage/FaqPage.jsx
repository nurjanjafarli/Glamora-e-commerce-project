import React from "react";
import FaqBackImg from "./components/FaqBackImg/FaqBackImg";
import FaqInfoCont from "./components/FaqInfoCont/FaqInfoCont";
import ContactFaq from "./components/ContactFaq/ContactFaq";

const FaqPage = () => {
  return (
    <div>
      <FaqBackImg />
      <FaqInfoCont />
      <ContactFaq />
    </div>
  );
};

export default FaqPage;
