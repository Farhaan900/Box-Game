import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorerService {

  constructor() { }

  colorExp1 = "black";
  colorExp2 = "white";
  colorExp3 = "white";
  colorExp4 = "white";
  score = 0;
  rand = 1;

  timeLeftServe = 60.0
  intervalStart = 3.0
  intervalServe = this.intervalStart

  clicked(value) {

    this.colorExp1 = "white";
    this.colorExp2 = "white";
    this.colorExp3 = "white";
    this.colorExp4 = "white";

    if (value === this.rand) {
      this.score = this.score + 10;
      this.intervalServe = this.intervalStart - (this.score / 100)
    }
    else if (value <= 4) {
      this.score = this.score - 5;
      this.intervalServe = this.intervalStart - (this.score / 100)
    }

    if (this.intervalServe < 0.5) {
      this.intervalServe = 0.5;
    }

    this.rand = Math.floor((Math.random() * 4) + 1);

    if (this.rand === 1) {
      this.colorExp1 = "black";
    }
    else if (this.rand === 2) {
      this.colorExp2 = "black";
    }
    else if (this.rand === 3) {
      this.colorExp3 = "black";
    }
    else if (this.rand === 4) {
      this.colorExp4 = "black";
    }
  }
}
