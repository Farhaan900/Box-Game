import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Players } from '../players';
import { PlayerService } from '../player.service';
import { ColorerService } from '../colorer.service'

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

 

  constructor(private playerService: PlayerService, private colorer: ColorerService, private router :Router ) { }


  players: any;
  curPlayer:string;
  curPlayerScore:number;


  ngOnInit() {

    console.log("am i getting executed ???")
    this.getPlayers();
    
    console.log(this.playerService.currentPlayerName)
    console.log(this.colorer.score)
    this.curPlayer = this.playerService.currentPlayerName;
    this.curPlayerScore = this.colorer.score;

    if(!this.curPlayer){
      alert("No name entered");
      this.router.navigate(['/', 'start']);
    }

    // console.log("gameover : " + this.playerService.currentPlayerName)
    // this.playerService.setPlayers(this.playerService.currentPlayerName,this.colorer.score)
    

  }
  getPlayers() {
    this.playerService.getPlayers().subscribe((x) => {
      this.players = x
      console.log(this.players)
    });
    
  }

  




}
