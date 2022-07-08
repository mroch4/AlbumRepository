import { ChangeEventHandler } from "react";

export interface ISelectProps {
  value: string;
  onChangeEvent: ChangeEventHandler<HTMLSelectElement>;
}
