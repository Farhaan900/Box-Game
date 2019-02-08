import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';



@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }
  onClick(value): any {
    this.playerService.setPlayerName(value);
  }

}
