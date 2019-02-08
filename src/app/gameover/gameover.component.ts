import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { ColorerService } from '../colorer.service'

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  constructor(private playerService: PlayerService, private colorer: ColorerService, private router: Router) { }

  players: any;
  curPlayer: string;
  curPlayerScore: number;

  ngOnInit() {
    this.getPlayers();
    this.curPlayer = this.playerService.currentPlayerName;
    this.curPlayerScore = this.colorer.score;

    if (!this.curPlayer) {
      alert("No name entered");
      this.router.navigate(['/', 'start']);
    }
  }
  getPlayers() {
    this.playerService.getPlayers().subscribe((x) => {
      this.players = x
    });
  }
}
