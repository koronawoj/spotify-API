import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MusicSearchModule } from './music-search/music-search.module'
import { PlaylistsModule } from './playlists/playlists.module'
import { routerModule } from './app.route';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { PlaylistService } from './playlists/playlist.service';
import { MusicSharedModule } from './music-shared/music-shared.module';
import { PlaylistSelectionService } from './music-shared/playlist-selection.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MusicSearchModule,
    PlaylistsModule,
    MusicSharedModule,
    routerModule
  ],
  providers: [
    PlaylistService,
    PlaylistSelectionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(private auth:AuthService){
this.auth.getToken()
}
}
