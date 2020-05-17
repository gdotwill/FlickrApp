import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.scss']
})
export class FlickrComponent implements OnInit {
  searchControl = new FormControl();
  photos: Object;
  showFav: boolean;
  textInput: boolean;
  favList: Array<string>;

  constructor(private flickrService: FlickrService) {
    this.favList = [];
  }

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query: string) => this.flickrService.getPhotos(query))
      )
      .subscribe(value => {
        this.photos = value;
      }
    );
  }

  addFav(input: any, fav: string) {
    if(fav !== ''){
        this.favList.push(fav);
    }
  }

  deleteFav(fav: string) {
    const index = this.favList.indexOf(fav);
    if( index >= 0) this.favList.splice(index, 1);
  }

};







