import { ChangeEventHandler } from "react";

export interface ISelect {
  value: string;
  onChangeEvent: ChangeEventHandler<HTMLSelectElement>;
}
