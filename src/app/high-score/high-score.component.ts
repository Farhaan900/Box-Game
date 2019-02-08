import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { ColorerService } from '../colorer.service';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css']
})
export class HighScoreComponent implements OnInit {

  players: any;

  constructor(private playerService: PlayerService, private colorer: ColorerService) { }

  ngOnInit() {

    this.getPlayers();



  }

  getPlayers() {
    this.playerService.getPlayers().subscribe((x) => {
      this.players = x
      console.log(this.players)
    });
  }

}
