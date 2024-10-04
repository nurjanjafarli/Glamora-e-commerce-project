import React, { Component } from "react";
import styles from "./FaqInfoCont.module.css";
import Faq from "react-faq-component";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const InfoSection = () => {
  const { t } = useTranslation();

  const data = {
    title: t("info.title"),
    rows: [
      {
        title: t("info.questions.0.title"),
        content: t("info.questions.0.content"),
      },
      {
        title: t("info.questions.1.title"),
        content: t("info.questions.1.content"),
      },
      {
        title: t("info.questions.2.title"),
        content: t("info.questions.2.content"),
      },
      {
        title: t("info.questions.3.title"),
        content: t("info.questions.3.content"),
      },
    ],
  };

  return (
    <div className={styles.fullContainer}>
      <div className={styles.images}>
        <img
          src="https://assets-global.website-files.com/6567048fc6561b46b6462167/659e35ba2b31b7d74cdfd5fb_faq-p-800.jpg"
          alt=""
        />
      </div>

      <div className={styles.faqContainer}>
        <div className={styles.faqTitle}>{data.title}</div>
        <Faq
          data={data}
          styles={{
            titleTextColor: "#333333",
            rowTitleColor: "#333",
            rowContentColor: "#666666",
            arrowColor: "#000",
          
          }}
          config={{
            animate: true,
            arrowIcon: "▶",
            tabFocus: true,
          }}
          rowTitleClassName={styles.faqRowTitle}
          rowContentClassName={styles.faqRowContent}
          rowClassName={({ rowState }) =>
            classNames(styles.faqRowWrapper, styles.faqRow, {
              [styles.faqRowHover]: rowState.isOpen,
            })
          }
          arrowClassName={({ rowState }) =>
            classNames(styles.arrowIcon, {
              [styles.open]: rowState.isOpen,
            })
          }
          className='faq-container'
          
        />
      </div>
    </div>
  );
};

export default InfoSection;
