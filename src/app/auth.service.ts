import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http'

@Injectable()
export class AuthService {

  constructor(private baseOptions:RequestOptions) { }

  getToken(){
    var token = localStorage.getItem('token')

    if(!token){
      var match = window.location.hash.match(/#access_token=(.*?)&/);
      token = match && match[1];
      localStorage.setItem('token', token)
    }

    if(!token){
      this.authorize()
    }

    this.baseOptions.headers.set('Authorization', 'Bearer ' + token)

    return token;
  }

  authorize(){
    localStorage.removeItem('token')

    let client_id = '9c6a79bb2af749bba593628b11ffaec9';
    let redirect_uri = 'http://localhost:4200/'

    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`)
  }

}
