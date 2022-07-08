interface IAlbum {
  id: string;
  artist: string;
  title: string;
  year: number;
  tags: string[] | null;
  coverUrl: string | null;
  spotifyUrl: string | null;
  clicked: number;
}

export default IAlbum;
