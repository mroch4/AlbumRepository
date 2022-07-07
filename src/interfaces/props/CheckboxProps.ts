import { ChangeEventHandler } from "react";

export interface CheckboxProps {
  checked: boolean;
  onChangeEvent: ChangeEventHandler<HTMLInputElement>;
  label: string;
}
