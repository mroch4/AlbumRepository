import { ChangeEventHandler } from "react";

export interface ICheckbox {
  checked: boolean;
  onChangeEvent: ChangeEventHandler<HTMLInputElement>;
  label: string;
}
