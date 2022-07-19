import { ILabels } from "../labels/interfaces/ILabels";
import { TAGS } from "../common/Tags";

export const getInfo = (labels: ILabels, tag: string): string => {
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
