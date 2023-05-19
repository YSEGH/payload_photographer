import payload from "payload";
import React, { useEffect, useState } from "react";
import style from "../../css/pages/[...title].module.css";
import cx from "classnames";
import Carousel from "../../components/Carousel";
import { josefin } from "../../utils/fonts";
import Suggestion from "../../components/Suggestion";

interface Props {
  title: string;
  photos: any[];
  suggestions: any[];
}

const Page: React.FC<Props> = ({ title, photos, suggestions }) => {
  const [data, setData] = useState([]);
  const sortData = () => {
    setData(
      photos.map((photo) => {
        return {
          image: photo.photo.url,
          caption: photo.legend,
        };
      })
    );
  };

  useEffect(() => {
    sortData();
  }, []);

  return (
    <div className={style.portfolio_item}>
      <div className={cx()}>
        <h2 className={cx(style.title, josefin.className)}>{title}</h2>
      </div>
      {data.length > 0 && <Carousel data={data} />}
      <Suggestion suggestions={suggestions} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const items = await payload.find({
    collection: "photo",
  });
  console.log("totalDocs", items.totalDocs);

  const currentItem = await payload.find({
    collection: "photo",
    where: {
      slug: { like: slug[0] },
    },
  });

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
      title: currentItem.docs[0].title,
      photos: currentItem.docs[0].slider,
      suggestions: [prevItem, nextItem],
    },
  };
}

export default Page;
