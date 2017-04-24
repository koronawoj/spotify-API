import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routerModule } from './playlists.routing';

import { PlaylistsComponent } from './playlists.component';
import { ContentCardComponent } from './content-card.component';
import { PlaylistFormComponent } from './playlist-form.component';
import { PlaylistsListComponent } from './playlists-list.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { PlaylistService } from './playlist.service';

import { MusicSharedModule } from '../music-shared/music-shared.module';

import playlistsData from './playlists.data';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MusicSharedModule,
    routerModule
  ],
  declarations: [
    PlaylistsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistDetailComponent
  ],
  exports:[
    PlaylistsComponent
  ],
  providers:[
    //PlaylistService,
    //{ provide: 'PlaylistsData', useValue: playlistsData },
  ]
})
export class PlaylistsModule { }
