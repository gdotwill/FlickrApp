import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlickrPhoto, FlickrDisplay } from '../models/flickr.model';

@Injectable()
export class FlickrService {
  result$: Observable<string[]>;
  key = '44180b90b9d9ccd18406a1682fd172d9';

  constructor(private http: HttpClient) {}

  getPhotos(query: string) {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=${query}&per_page=48&format=json&nojsoncallback=1`;
    return this.http
      .get(url)
      .pipe(
        map((val: FlickrDisplay) => {
          if (val.stat === 'ok') {
            return val.photos.photo.map((photo: FlickrPhoto ) => {
              return {
                url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
                title: photo.title,
              };
            });
          }
          else {
            return [];
          }
        })
      )
  }

}
