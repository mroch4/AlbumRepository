import IAlbum from "../common/interfaces/IAlbum";

const PAGINATION_PAGESIZE = 12;

class Pagination {
  data: IAlbum[];

  constructor(data: IAlbum[]) {
    this.data = data;
  }

  getPage(n: number) {
    const offset = n * PAGINATION_PAGESIZE;
    return this.data.slice(offset, offset + PAGINATION_PAGESIZE);
  }

  getTotalPages() {
    return Math.ceil(this.data.length / PAGINATION_PAGESIZE);
  }
}

export default Pagination;
