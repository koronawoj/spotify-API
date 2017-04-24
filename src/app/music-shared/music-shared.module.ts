import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistSelectorComponent } from './playlist-selector.component';
import { TrackListComponent } from './track-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PlaylistSelectorComponent,
    TrackListComponent
  ],
  exports: [
    PlaylistSelectorComponent,
    TrackListComponent
  ]
})
export class MusicSharedModule { }
