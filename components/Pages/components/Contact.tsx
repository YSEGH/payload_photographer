import React from "react";
import style from "../style/contact.module.css";
import global from "../../../css/global.module.css";
import cx from "classnames";
import RichText from "../../RichText";
import { components } from "../../../blocks";
import { exo, josefin } from "../../../utils/fonts";

type Props = {
  image: any;
  content: any;
  formulaire: any;
  title: string;
};

const Contact: React.FC<Props> = (props) => {
  const blockType = "formBlock";
  const { image, content, formulaire, title } = props;
  const Form = components[blockType];
  return (
    <div className={cx(style.page__contact, global.container__large)}>
      <div className={cx(style.page__bannier)}>
        <img src={image.url} alt="" />
      </div>
      <div className={cx(style.page__body)}>
        <h2 className={cx(josefin.className)}>{title}</h2>
        <p className={cx(exo.className)}>{content}</p>
        <Form blockType={blockType} form={formulaire[0].form} />
      </div>
    </div>
  );
};

export default Contact;
