import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Photo from "./components/Photo";
import styles from "../style/index.module.css";
import global from "../../../css/global.module.css";
import cx from "classnames";
import { Carousel } from "react-carousel-minimal";

const data = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    caption: "San Francisco",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    caption: "San Francisco",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    caption: "San Francisco",
  },
];
const captionStyle = {
  display: "none",
  fontSize: "2em",
  fontWeight: "bold",
};
const slideNumberStyle = {
  display: "none",
  fontSize: "20px",
  fontWeight: "bold",
};
const PhotoContainer = ({ photos }) => {
  return (
    <div className={cx(global.container__large)}>
      <Carousel
        data={data}
        time={2000}
        width="850px"
        height="650px"
        captionStyle={captionStyle}
        radius="0"
        slideNumber={false}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={false}
        dots={false}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        showNavBtn={false}
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "650px",
          margin: "40px auto",
        }}
      />
    </div>
  );
};

export default PhotoContainer;

{
  /*
    <motion.div
      layout
      className={cx(styles.container__photos, global.container__large)}
    >
       <AnimatePresence>
        {photos.map((slider: any) => (
          <Photo
            key={slider.photo.id}
            url={slider.photo.url}
            alt={slider.photo.alt}
            height={slider.photo.height}
            width={slider.photo.width}
          />
        ))}
      </AnimatePresence> 
      
    </motion.div>*/
}
