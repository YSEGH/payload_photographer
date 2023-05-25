import React, { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import cx from "classnames";
import styles from "./style/index.module.css";

function Carousel({
  title,
  data,
  width = "850px",
  height = "600px",
  radius,
  slideNumber,
  captionPosition,
  slideBackgroundColor,
  slideImageFit,
  thumbnails,
  thumbnailWidth,
  showNavBtn = true,
}) {
  //Initialize States
  const [slides, setSlides] = useState(data);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [change, setChange] = useState(false);

  //Function to change slide
  const setSlideIndex = (n) => {
    if (currentSlide + n >= data.length) return 0;
    else if (currentSlide + n < 0) return slides.length - 1;
    else return currentSlide + n;
  };

  function scrollTo(el) {
    const elLeft = el.offsetLeft + el.offsetWidth;
    const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;

    // check if element not in view
    if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({ left: elLeft - elParentLeft, behavior: "smooth" });
    } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({
        left: el.offsetLeft - el.parentNode.offsetLeft,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    setSlides(data);
    setSlidesHandler(0, null, data);
    return () => {};
  }, [title]);

  const setSlidesHandler = (
    index: number | null,
    n: number | null,
    data: any[] = slides
  ) => {
    for (let i = 0; i < data.length; i++) {
      data[i].active = false;
    }
    let currentIndex = index;
    if (index === null) {
      currentIndex = setSlideIndex(n);
    }
    setCurrentSlide(currentIndex);

    if (thumbnails) {
      scrollTo(document.getElementById(`thumbnail-${currentIndex}`));
    }

    if (data[currentIndex] !== undefined) {
      data[currentIndex].active = true;
    }
    setSlides(data);
  };

  return (
    <div className={cx(styles.box)}>
      <div style={{}}>
        <Swipe
          onSwipeRight={() => {
            setSlidesHandler(null, -1);
            setChange(!change);
          }}
          onSwipeLeft={() => {
            setSlidesHandler(null, 1);
            setChange(!change);
          }}
        >
          <div
            className={cx(styles.carousel_container)}
            style={{
              maxWidth: width ? width : "600px",
              height: height ? height : "400px",
              backgroundColor: slideBackgroundColor
                ? slideBackgroundColor
                : "darkgrey",
              borderRadius: radius,
            }}
          >
            {slides.map((item, index) => {
              return (
                <div
                  className={cx(styles.carousel_item, styles.fade)}
                  style={{
                    maxWidth: width ? width : "600px",
                    maxHeight: height ? height : "400px",
                    display: item.active ? "flex" : "none",
                  }}
                  key={index}
                >
                  {slideNumber && (
                    <div className={slides.slide_number}>
                      {index + 1} / {data.length}
                    </div>
                  )}
                  <img
                    src={item.image}
                    alt={item.caption}
                    className={cx(styles.carousel_image)}
                    style={{
                      borderRadius: radius,
                      objectFit: slideImageFit ? slideImageFit : "contain",
                    }}
                  />

                  <div
                    className={cx(
                      styles.carousel_caption,
                      styles[
                        `carousel_caption_${
                          captionPosition ? captionPosition : "bottom"
                        }`
                      ]
                    )}
                    dangerouslySetInnerHTML={{ __html: item.caption }}
                  ></div>
                </div>
              );
            })}

            {showNavBtn && (
              <a
                className={styles.prev}
                onClick={(e) => {
                  setSlidesHandler(null, -1);
                  setChange(!change);
                }}
              >
                &#10094;
              </a>
            )}
            {showNavBtn && (
              <a
                className={styles.next}
                onClick={(e) => {
                  setSlidesHandler(null, 1);
                  setChange(!change);
                }}
              >
                &#10095;
              </a>
            )}
          </div>
        </Swipe>
      </div>
      {thumbnails && (
        <div
          className={styles.thumbnails}
          id="thumbnail-div"
          style={{ maxWidth: width }}
        >
          {slides.map((item, index) => {
            return (
              <img
                width={thumbnailWidth ? thumbnailWidth : "100px"}
                src={item.image}
                alt={item.caption}
                className={cx(styles.thumbnail, {
                  [styles.active_thumbnail]: item.active,
                })}
                id={`thumbnail-${index}`}
                key={index}
                onClick={(e) => {
                  setSlidesHandler(index, null);
                  setChange(!change);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Carousel;
