import React from "react";
import global from "../../css/global.module.css";
import style from "./style/index.module.css";
import cx from "classnames";
import { Carousel } from "react-carousel-minimal";
import { exo } from "../../utils/fonts";

const carouselStyle = {
  textAlign: "center",
  maxWidth: "850px",
  maxHeight: "500px",
  margin: "40px auto 8rem",
};

const captionStyle = {
  poition: "absolute",
  top: -100,
  left: 0,
  right: 0,
  margin: "auto",
  color: "#000000",
  fontSize: "18px",
  fontWeight: 300,
  textShadow: "none",
};
const slideNumberStyle = {
  display: "none",
  fontSize: "20px",
  fontWeight: "bold",
};

type Props = {
  data: unknown[];
};

const CarouselElement: React.FC<Props> = ({ data }) => {
  return (
    <div
      className={cx(
        style.carousel_container,
        global.container__large,
        exo.className
      )}
    >
      <Carousel
        data={data}
        time={2000}
        width="850px"
        height="500px"
        captionStyle={captionStyle}
        radius="0"
        slideNumber={false}
        slideNumberStyle={slideNumberStyle}
        captionPosition="top"
        automatic={false}
        dots={false}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        showNavBtn={false}
        thumbnails={true}
        thumbnailWidth="100px"
        style={carouselStyle}
      />
    </div>
  );
};

export default CarouselElement;
