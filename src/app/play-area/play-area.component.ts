import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Players } from '../players';
import { PlayerService } from '../player.service';
import { Observable, of } from 'rxjs';
import { ColorerService } from '../colorer.service';


@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.css']
})

export class PlayAreaComponent implements OnInit {

  timeLeft: any = this.colorer.timeLeftServe
  timer: any = this.colorer.intervalServe
  players: any = [];
  playerName: string;
  playerScore: number;
  interval;
  intTimeLeft = Math.floor(this.timeLeft)

  constructor(private colorer: ColorerService, private playerService: PlayerService, private router: Router) { }

  ngOnInit() {

    this.playerName = this.playerService.currentPlayerName;
    this.playerScore = this.colorer.score;
    if (!this.playerName) {
      alert("No name entered");
      this.router.navigate(['/', 'start']);
    }
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft = this.timeLeft - 0.01;
        this.timer = this.timer - 0.01;
        this.intTimeLeft = Math.floor(this.timeLeft) + 1
        // console.log("time left " + this.timeLeft + "interval timer" + this.timer)

        if (this.timer < 0) {
          console.log("timer " + this.timeLeft)
          // console.log("interval " + this.timer)
          this.onClick(5)


        }
      }
      else {

        clearInterval(this.interval)
        this.playerService.setPlayers(this.playerName, this.playerScore)
        alert("Game over");
        this.router.navigate(['/', 'gameover']);
      }
    }, 10)

    // console.log("am i getting executed ???")
    // this.getPlayers();
  }
  // getPlayers() {
  //   this.playerService.getPlayers().subscribe((x)  => {
  //     this.players = x
  //     console.log(this.players)
  //   });
  // }


  color1 = this.colorer.colorExp1;
  color2 = this.colorer.colorExp2;
  color3 = this.colorer.colorExp3;
  color4 = this.colorer.colorExp4;

  onClick(value) {

    // console.log("before clicking color : " + this.color1)
    this.colorer.clicked(value);
    this.color1 = this.colorer.colorExp1;
    this.color2 = this.colorer.colorExp2;
    this.color3 = this.colorer.colorExp3;
    this.color4 = this.colorer.colorExp4;
    this.timer = this.colorer.intervalServe;
    this.playerScore = this.colorer.score;


    // this.router.navigateByUrl('/dummy', { skipLocationChange: true }).then(() => {
    //   this.router.navigate(['/playarea'])
    // })
    // console.log("after clicking color : " + this.color1)
    // window.location.reload()
  }



}
