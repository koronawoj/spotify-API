import { Component, OnInit } from '@angular/core';
import { PlaylistSelectionService } from './playlist-selection.service';
import { PlaylistService } from '../playlists/playlist.service';

@Component({
  selector: 'app-playlist-selector',
  template:`
  <div class="input-group">
    <label class="col-xs-4 col-form-label">Aklywna Playlista: </label>
    <select class="form-control"
            [ngModel]="selectedId"
            (ngModelChange)="setSelected($event)">
            <option *ngFor="let playlist of playlists" [value]="playlist.id">
              {{playlist.name}} ({{playlist.tracks.length}})
            </option>
    </select>
  </div>
  `
})
export class PlaylistSelectorComponent implements OnInit {

  selectedId;

  playlists = [];

  setSelected(id){
    this.selectionService.select(id);
  }

  constructor(private selectionService: PlaylistSelectionService,
              private playlistService: PlaylistService) { }

  ngOnInit() {
    this.selectionService.getSelectionStream()
    .subscribe( id => {
      this.selectedId = id;
    })

    this.playlistService.getPlaylistStream()
    .subscribe( playlists =>{
      this.playlists = playlists;
    })
  }

}
