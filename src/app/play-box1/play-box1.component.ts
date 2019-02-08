import { Component, OnInit } from '@angular/core';
import { PlayAreaComponent } from '../play-area/play-area.component'

@Component({
  selector: 'app-play-box1',
  templateUrl: './play-box1.component.html',
  styleUrls: ['./play-box1.component.css']
})
export class PlayBox1Component implements OnInit {

  constructor(private parent: PlayAreaComponent) { }

  ngOnInit() {
  }
  colorExp = this.parent.color1;
}
