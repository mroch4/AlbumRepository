import { MouseEventHandler } from "react";

export interface PaginationProps {
  nextPageHandler: MouseEventHandler;
  previuosPageHandler: MouseEventHandler;
  currentPage: number;
  totalPages: number;
}
