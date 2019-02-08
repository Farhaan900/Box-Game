import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from '../player.service';



@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private playerService: PlayerService) { }
  // constructor(private http: HttpClient ) { }

  ngOnInit() {
  }





  onClick(value):any {

    this.playerService.setPlayerName(value);
    console.log(value)
  }

  // onClick(value):any{
  //   return this.http
  //   .post("http://localhost:3004/players", {
  //     value
  //   })
  //   .subscribe(console.log);
 
    // console.log(event.target.id);
  // }


}
