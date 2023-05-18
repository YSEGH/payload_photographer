import payload from "payload";
import React from "react";
import PhotoContainer from "../../components/Containers/PhotoContainer";

interface Props {
  title: string;
  photos: any[];
}

const Page: React.FC<Props> = ({ title, photos }) => {
  return (
    <div>
      <PhotoContainer photos={photos} />
      <div className="text-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { title } = context.params;
  const currentItem = await payload.find({
    collection: "photo",
    where: {
      title: { like: title[0] },
    },
  });

  return {
    props: {
      title: currentItem.docs[0].title,
      photos: currentItem.docs[0].slider,
    },
  };
}

export default Page;
