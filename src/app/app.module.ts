import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlickrComponent } from './flickr/flickr.component';

import { FlickrService } from './services/flickr.service';

@NgModule({
  declarations: [
    AppComponent,
    FlickrComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],

  providers: [
    FlickrService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
