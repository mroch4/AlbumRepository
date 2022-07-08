import { ChangeEventHandler } from "react";

export interface ICheckboxProps {
  checked: boolean;
  onChangeEvent: ChangeEventHandler<HTMLInputElement>;
  label: string;
}
