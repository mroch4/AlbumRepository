import { SETTINGS } from "./Settings";
import { Album } from "./Album";

export class Pagination {
  data: Album[];

  constructor(data: Album[]) {
    this.data = data;
  }

  getPage(n: number) {
    const offset = n * SETTINGS.PAGINATION_PAGESIZE;
    return this.data.slice(offset, offset + SETTINGS.PAGINATION_PAGESIZE);
  }

  getTotalPages() {
    return Math.ceil(this.data.length / SETTINGS.PAGINATION_PAGESIZE);
  }
}
