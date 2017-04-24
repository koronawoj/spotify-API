import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="container">
        <h3>
          <a routerLink="/" class="navbar-brand">Muzyka z Angular2</a>
        </h3>
        <ul class="nav navbar-nav float-xs-right">
          <li class="nav-item">
            <a class="nav-link" routerLink="/music" routerLinkActive="active"> Szukaj Muzyki </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/playlist" routerLinkActive="active"> Twoje Playlisty </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
