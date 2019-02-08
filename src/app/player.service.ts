import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  currentPlayerName: string;

  constructor(private http: HttpClient) { }

  setPlayerName(name) {
    this.currentPlayerName = name;
  }

  getPlayers() {
    return this.http.get(environment.dbUrl);
  }

  setPlayers(name, score) {
    return this.http
      .post(environment.dbUrl, {
        name, score
      })
      .subscribe(console.log);
  }

}
