import { ChangeEventHandler } from "react";

export interface SelectProps {
  value: string;
  onChangeEvent: ChangeEventHandler<HTMLSelectElement>;
}
