import React from "react";
import style from "../style/about.module.css";
import global from "../../../css/global.module.css";
import { exo, josefin } from "../../../utils/fonts";
import cx from "classnames";
import RichText from "../../RichText";

type Props = {
  image: any;
  title: string;
  content: any;
};

const About: React.FC<Props> = (props) => {
  const { image, title, content } = props;
  return (
    <div className={cx(style.page__about, global.container__large)}>
      <div className={cx(style.page__header)}>
        <h2 className={cx(josefin.className)}>{title ? title : ""}</h2>
      </div>
      <div className={cx(style.page__bannier)}>
        <img src={image.url} alt={image.alt} />
      </div>
      <div className={cx(style.page__body, exo.className)}>
        <RichText content={content} />
      </div>
    </div>
  );
};

export default About;
