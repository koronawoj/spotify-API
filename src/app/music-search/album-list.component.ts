import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './music-search.service';

@Component({
  selector: 'app-album-list',
  template: `
  <h4>Albumy</h4>
  <div class="d-flex justify-content-start mb-3">
  <div class="card-deck">
   <app-album-cart [album]="album" class="card"
                    [routerLink]="['album', album.id]"
                    *ngFor="let album of albums | async"></app-album-cart>
  </div>
  </div>
  `
})
export class AlbumListComponent implements OnInit {

  albums;

  constructor(private musicService: MusicSearchService) { }

  ngOnInit() {

    this.albums = this.musicService.getAlbumsStream()

  }

}
