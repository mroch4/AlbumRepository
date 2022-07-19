import React, { FC } from "react";

import { getInfo } from "../helpers/getInfo";
import { useAppContext } from "../hooks/useAppContext";

const Info: FC = (): JSX.Element => {
  const { labels, tag } = useAppContext();

  const info = getInfo(labels, tag);

  return <span className="fw-lighter fst-italic">{info}</span>;
};

export default Info;
