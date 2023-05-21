import payload from "payload";
import React from "react";
import style from "../../css/pages/[...title].module.css";
import cx from "classnames";
import Carousel from "../../components/Carousel";
import { josefin } from "../../utils/fonts";
import Suggestion from "../../components/Suggestion";
import NotFound from "../../components/NotFound";

const carouselStyle = {
  textAlign: "center",
  maxWidth: "850px",
  maxHeight: "600px",
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

interface Props {
  statusCode: number;
  title?: string;
  photos?: any[];
  suggestions?: any[];
}

const Page: React.FC<Props> = ({ statusCode, title, photos, suggestions }) => {
  if (statusCode === 404) {
    return <NotFound />;
  }

  return (
    <div className={style.portfolio_item}>
      <div className={cx()}>
        <h2 className={cx(style.title, josefin.className)}>
          {title ? title : ""}
        </h2>
      </div>
      <Carousel
        title={title}
        data={photos.map((photo) => {
          return {
            image: photo.photo.url,
            caption: photo.legend,
          };
        })}
        time={2000}
        width="850px"
        height="600px"
        captionStyle={captionStyle}
        radius="0"
        slideNumber={false}
        slideNumberStyle={slideNumberStyle}
        captionPosition="top"
        automatic={false}
        dots={false}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="transparent"
        slideImageFit="contain"
        showNavBtn={true}
        thumbnails={true}
        thumbnailWidth="100px"
        style={carouselStyle}
      />
      {suggestions.length > 0 && <Suggestion suggestions={suggestions} />}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  console.log(slug);

  const items = await payload.find({
    collection: "photo",
  });

  const currentItem = await payload.find({
    collection: "photo",
    where: {
      slug: { like: slug[0] },
    },
  });

  if (currentItem.docs.length === 0) {
    context.res.statusCode = 404;
    return {
      props: {
        statusCode: 404,
      },
    };
  }

  let currentIndex;
  items.docs.map((item, i) => {
    if (item.slug === currentItem.docs[0].slug) {
      currentIndex = i + 1;
    }
  });

  const prevItem = await payload.find({
    collection: "photo",
    page: currentIndex === 1 ? items.totalDocs : currentIndex - 1,
    limit: 1,
  });

  const nextItem = await payload.find({
    collection: "photo",
    page: currentIndex === items.totalDocs ? 1 : currentIndex + 1,
    limit: 1,
  });

  return {
    props: {
      statusCode: 200,
      title: currentItem.docs[0].title,
      photos: currentItem.docs[0].slider,
      suggestions: [prevItem, nextItem],
    },
  };
}

export default Page;
