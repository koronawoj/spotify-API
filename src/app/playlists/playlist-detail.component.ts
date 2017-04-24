import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService, Playlist } from './playlist.service'

@Component({
  selector: 'playlist-detail',
  template: `
  <div *ngIf="!playlist">
  <p>Wybierz <b>playlistę</b>!</p>
</div>
<div *ngIf="playlist">
  <h3 class="card-title">{{playlist.name}}</h3>
  <app-track-list [tracks]="playlist.tracks"></app-track-list>
  <div class="form-group">
    <button class="btn btn-default float-xs-right" (click)="edit(playlist)">Edytuj</button>
  </div>
</div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  playlist;


    edit(playlist){
      this.router.navigate(['playlist',playlist.id,'edit'])
    }

    constructor(private activeRoute:ActivatedRoute,
                private playlistsService: PlaylistService,
                private router: Router) {

    }

    ngOnInit() {

              this.activeRoute.params.subscribe(params => {
                let id = parseInt(params['id']);
                if(id){
                  this.playlistsService.getPlaylist(id)
                  .subscribe((playlist:Playlist) => {
                    this.playlist = playlist
                  })
                }
              })
    }

  }
