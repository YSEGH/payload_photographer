import Image from "next/image";
import React from "react";

const Photo = ({ url }) => {
  return <Image className="photo" src={url} alt="" width={400} height={400} />;
};

export default Photo;
