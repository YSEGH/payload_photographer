import payload from "payload";
import React from "react";
import global from "../../css/global.module.css";
import { josefin } from "../../utils/fonts";
import cx from "classnames";
import Suggestion from "../../components/Suggestion";
import NotFound from "../../components/NotFound";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
    <div className={global.container__large}>
      <div className={cx()}>
        <h3 className={cx(josefin.className)}>{title ? title : ""}</h3>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3}>
          {photos.map((photo, i) => {
            console.log(photo);

            return (
              <img
                key={i}
                src={photo.photo.url}
                alt={photo.photo.alt}
                style={{ width: "100%", display: "block" }}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      {/* {suggestions.length > 0 && <Suggestion suggestions={suggestions} />} */}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;

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
