import React from "react";
import { Props } from "payload/components/views/Cell";
import "../style/styles.scss";

const Cell: React.FC<Props> = (props) => {
  const { cellData } = props;

  console.log(cellData);

  if (!cellData) return null;

  return (
    <div className="chip" style={{ backgroundColor: cellData as string }} />
  );
};

export default Cell;
