export interface FlickrPhoto {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface FlickrDisplay {
  photos: {
    photo: FlickrPhoto[];
  };
  stat: string;
}
