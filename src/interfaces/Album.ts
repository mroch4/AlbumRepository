export interface Album {
  id: number;
  artist: string;
  title: string;
  year: number;
  tags: string[] | undefined;
}
