import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 
import { Players } from './players';

 

@Injectable({
  providedIn: 'root'
})



export class PlayerService {

  currentPlayerName : string; 

  constructor(private http: HttpClient ) { }

  setPlayerName(name){
    this.currentPlayerName = name;
    console.log("Player name = " + name)
  }

  getPlayers () {
    return this.http.get("http://localhost:3004/players");
    
  }

  setPlayers (name,score) {
    return this.http
  .post("http://localhost:3004/players", {
    name,score
  })
  .subscribe(console.log);

  // console.log(event.target.id);
}

}
