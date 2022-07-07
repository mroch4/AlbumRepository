import React, { FC, useContext } from "react";

import { TAGS } from "../common/Tags";
import ContextProps from "../interfaces/props/ContextProps";
import { AppContext } from "../services/Context";

const Desc: FC = (): JSX.Element => {
  const { labels, tag } = useContext(AppContext) as ContextProps;

  const getDesc = (): string => {
    switch (tag) {
      case TAGS[0]:
        return labels.TAGS_DESC[0];
      case TAGS[1]:
        return labels.TAGS_DESC[1];
      case TAGS[2]:
        return labels.TAGS_DESC[2];
      case TAGS[3]:
        return labels.TAGS_DESC[3];
      case TAGS[4]:
        return labels.TAGS_DESC[4];
      case TAGS[5]:
        return labels.TAGS_DESC[5];
      case TAGS[6]:
        return labels.TAGS_DESC[6];
      case TAGS[7]:
        return labels.TAGS_DESC[7];
      case TAGS[8]:
        return labels.TAGS_DESC[8];
      case TAGS[9]:
        return labels.TAGS_DESC[9];
      default:
        return "";
    }
  };

  return <span className="fw-lighter fst-italic">{getDesc()}</span>;
};

export default Desc;
