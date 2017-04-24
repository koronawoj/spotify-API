import { Injectable } from '@angular/core';
import { PlaylistService } from '../playlists/playlist.service';
import { Subject } from 'rxjs';

@Injectable()
export class PlaylistSelectionService {

  constructor(private playlistService: PlaylistService) {

    this.playlistService.getPlaylistStream()
    .subscribe( playlists =>{
      if(!this.selectedId){
      this.selectedId = playlists[0];
      }
    })

  }

  selectedId;

  selectedIdStream = new Subject()

  getSelectionStream(){
    return this.selectedIdStream.startWith(this.selectedId);
  }

  select(playlistId){
    this.selectedId = playlistId;
    this.selectedIdStream.next(this.selectedId);
  }

  addToPlaylist(track){
    this.playlistService.addToPlaylist(this.selectedId, track);
  }

}
