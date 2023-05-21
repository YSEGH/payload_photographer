import React, { Fragment } from "react";
import { Props } from "payload/components/views/Cell";

const Cell: React.FC<Props> = (props) => {
  const { cellData } = props;

  if (!cellData) return null;

  return <Fragment>{cellData}</Fragment>;
};

export default Cell;
