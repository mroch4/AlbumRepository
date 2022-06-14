import React, { FC } from "react";
import Labels from "../common/Labels";
import { TAGS } from "../common/Tags";

interface Tag {
  tag: string;
}

const Desc: FC<Tag> = (props): JSX.Element => {
  const getDesc = (tag: string): string => {
    switch (tag) {
      case TAGS[0]:
        return Labels.TAGS_DESC[0];
      case TAGS[1]:
        return Labels.TAGS_DESC[1];
      case TAGS[2]:
        return Labels.TAGS_DESC[2];
      case TAGS[3]:
        return Labels.TAGS_DESC[3];
      case TAGS[4]:
        return Labels.TAGS_DESC[4];
      case TAGS[5]:
        return Labels.TAGS_DESC[5];
      case TAGS[6]:
        return Labels.TAGS_DESC[6];
      case TAGS[7]:
        return Labels.TAGS_DESC[7];
      case TAGS[8]:
        return Labels.TAGS_DESC[8];
      case TAGS[9]:
        return Labels.TAGS_DESC[9];
      default:
        return "";
    }
  };

  return <span className="fw-lighter fst-italic">{getDesc(props.tag)}</span>;
};

export default Desc;
