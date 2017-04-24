import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-cart',
  template: `
    <img class="card-img-top img-fluid" [src]="image.url">
    <div class="card-img-overlay">
      <h5 class="card-title">{{album.name}}</h5>
    </div>
  `,
  styles: [`
    :host(){
      flex: 0 0 31% !important;
      margin-bottom: 0.625rem  !important;
      overflow:hidden;
      margin-left: 10px !important;
      margin-right: 10px !important;
    }

    :host():hover .card-img-overlay{
      top: 100%;
    }

    .card{
      margin-left: 10px;
      margin-right: 10px;
    }

    .card-img-overlay{
      background: rgba(0,0,0,0.8);
      top:70%;
      color: #fff;
      font-size: 1em !important;
      transition: .2s top ease-out;
    }
  `]
})
export class AlbumCartComponent implements OnInit {

  @Input('album')
  set setAlbum(album){
    this.album = album;
    this.image = album.images[0];
  }

album

image

  constructor() { }

  ngOnInit() {
  }

}
