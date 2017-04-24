import { Component, OnInit, Inject } from '@angular/core';
import { PlaylistService } from './playlist.service'

import playlistsData from './playlists.data'

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {


  constructor(private playlistsService:PlaylistService) {

  }


  ngOnInit() {
  }





}
