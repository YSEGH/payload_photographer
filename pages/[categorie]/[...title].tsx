import payload from "payload";
import React from "react";
import PhotoContainer from "../../components/Container/PhotoContainer";

interface Props {
  photos: any[];
}
const Page: React.FC<Props> = ({ photos }) => {
  return (
    <div>
      <h1>TEST SLUG</h1>
      <PhotoContainer photos={photos} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { title } = context.params;

  const { docs } = await payload.find({
    collection: "photo",
    where: {
      title: { equals: title[0] },
    },
  });

  return {
    props: {
      photos: docs[0].slider,
    },
  };
}

export default Page;
