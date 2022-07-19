import { ILabels } from "../labels/interfaces/ILabels";
import LABELS from "../labels/Labels";

export const getLabelsPack = (intl: string): ILabels => {
  const labelsPackage = LABELS.find((set) => set.intl === intl);
  return labelsPackage.labels;
};
