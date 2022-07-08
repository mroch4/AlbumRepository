import { MouseEventHandler } from "react";

export interface IPaginationProps {
  nextPageHandler: MouseEventHandler;
  previuosPageHandler: MouseEventHandler;
  currentPage: number;
  totalPages: number;
}
