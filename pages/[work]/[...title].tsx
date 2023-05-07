import payload from "payload";
import React from "react";
import PhotoContainer from "../../components/Container/PhotoContainer";
import global from "../../css/global.module.css";
import Breadcrumb from "../../components/Breadcrumb";

interface Props {
  title: string;
  photos: any[];
}

const Page: React.FC<Props> = ({ title, photos }) => {
  return (
    <div>
      <Breadcrumb />
      <PhotoContainer photos={photos} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { title } = context.params;
  const { docs } = await payload.find({
    collection: "photo",
    where: {
      title: { like: title[0] },
    },
  });

  return {
    props: {
      title: title[0],
      photos: docs[0].slider,
    },
  };
}

export default Page;
