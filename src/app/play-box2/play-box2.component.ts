import { Component, OnInit } from '@angular/core';
import { ColorerService } from '../colorer.service';
import { PlayAreaComponent } from '../play-area/play-area.component'

@Component({
  selector: 'app-play-box2',
  templateUrl: './play-box2.component.html',
  styleUrls: ['./play-box2.component.css']
})
export class PlayBox2Component implements OnInit {

  constructor(private parent: PlayAreaComponent) { }

  ngOnInit() {
  }

  colorExp = this.parent.color2;

}
