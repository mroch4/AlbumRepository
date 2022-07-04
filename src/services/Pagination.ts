import { SETTINGS } from "../common/Settings";
import Album from "../interfaces/Album";

class Pagination {
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

export default Pagination;
