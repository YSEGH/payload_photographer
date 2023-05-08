import payload from "payload";
import { RichTextCustomElement } from "payload/types";
import React from "react";
import RichText from "../components/RichText";
import { exo, kasei } from "../utilities/fonts";
import Breadcrumb from "../components/Breadcrumb";
import styles from "../css/pages/about.module.css";
import global from "../css/global.module.css";
import cx from "classnames";

interface About {
  imageAbout: any;
  sentenceAbout: String;
  contentAbout: RichTextCustomElement;
}

interface Props {
  infos: About;
}

const About: React.FC<Props> = ({ infos }) => {
  return (
    <div className={styles.page__about}>
      <Breadcrumb />
      <div className={cx(styles.text__container, global.container__large)}>
        <div className={styles.hero_bannier}>
          <img src={infos.imageAbout.url} alt="" />
        </div>
        <div className={cx(styles.text__content)}>
          <RichText className={exo.className} content={infos.contentAbout} />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { about } = await payload.findGlobal({
    slug: "infos",
  });

  return {
    props: {
      infos: about,
    },
  };
}

export default About;
