import { Component, OnInit } from '@angular/core';
import { ColorerService } from '../colorer.service';
import { PlayAreaComponent } from '../play-area/play-area.component'

@Component({
  selector: 'app-play-box1',
  templateUrl: './play-box1.component.html',
  styleUrls: ['./play-box1.component.css']
})
export class PlayBox1Component implements OnInit {


  // constructor(private colorer : ColorerService) { }
  constructor(private parent: PlayAreaComponent) { }


  ngOnInit() {



  }

  colorExp = this.parent.color1;

  // onClick(value): any {

  //   console.log("clicked : " + value)

  //   this.colorer.clicked(value).subscribe(data => {
  //     console.log(data, "this is the color we r getting from the service !!!");

  //     this.colorExp = data
  //   })

  //}

  // onClick(value): any{

  //   this.parent.onClick()

  //   console.log("click routine complete color : " + this.parent.color1)
  //   // this.colorExp = this.parent.color1;


  // }





}
