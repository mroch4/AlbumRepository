import IAlbum from "../interfaces/IAlbum";
import SETTINGS from "../common/Settings";

class Pagination {
  data: IAlbum[];

  constructor(data: IAlbum[]) {
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
