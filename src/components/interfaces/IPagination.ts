import { MouseEventHandler } from "react";

export interface IPagination {
  nextPageHandler: MouseEventHandler;
  previuosPageHandler: MouseEventHandler;
  currentPage: number;
  totalPages: number;
}
