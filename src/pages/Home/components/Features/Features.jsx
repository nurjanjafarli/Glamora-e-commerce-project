import React from "react";
import style from "./Features.module.css";
import { useTranslation } from "react-i18next";

const Features = () => {
  const {t}=useTranslation() 
  return (
    <div className={style.featuresContainer}>
      <div className={style.featuresbos}>
        <div className={style.image}>
          <img
            src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6684fc7c6f88836baa77d888_ic-shipping.svg"
            alt=""
          />
        </div>
        <h1>{t("features.features-yazi1")}</h1>
        <p>{t("features.features-yazi2")}</p>
      </div>
      <div className={style.featuresbos}>
        <div className={style.image}>
          {" "}
          <img
            src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6684fc7bfdeb125226544b0e_ic-payment.svg"
            alt=""
          />
        </div>

        <h1>{t("features.features-yazi3")}</h1>
        <p>{t("features.features-yazi4")}</p>
      </div>
      <div className={style.featuresbos}>
        <div className={style.image}>
          <img
            src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6684fc7bd9481781afac7a3b_ic-delivery.svg"
            alt=""
          />
        </div>

        <h1>{t("features.features-yazi5")}</h1>
        <p>{t("features.features-yazi6")}</p>
      </div>
      <div className={style.featuresbos}>
        <div className={style.image}>
          {" "}
          <img
            src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6684fc7c4c58445974d4f32b_ic-time.svg"
            alt=""
          />
        </div>

        <h1>{t("features.features-yazi7")}</h1>
        <p>{t("features.features-yazi8")}</p>
      </div>
    </div>
  );
};

export default Features;
