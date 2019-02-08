import { Component, OnInit } from '@angular/core';
import { ColorerService } from '../colorer.service';
import { PlayAreaComponent } from '../play-area/play-area.component'


@Component({
  selector: 'app-play-box3',
  templateUrl: './play-box3.component.html',
  styleUrls: ['./play-box3.component.css']
})
export class PlayBox3Component implements OnInit {

  constructor(private parent: PlayAreaComponent) { }

  ngOnInit() {
  }

  colorExp = this.parent.color3;


}
