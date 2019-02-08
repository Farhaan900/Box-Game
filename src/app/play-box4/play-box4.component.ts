import { Component, OnInit } from '@angular/core';
import { PlayAreaComponent } from '../play-area/play-area.component'


@Component({
  selector: 'app-play-box4',
  templateUrl: './play-box4.component.html',
  styleUrls: ['./play-box4.component.css']
})
export class PlayBox4Component implements OnInit {

  constructor(private parent: PlayAreaComponent) { }

  ngOnInit() {
  }
  colorExp = this.parent.color4;
}
