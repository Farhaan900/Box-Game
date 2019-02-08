import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { PlayBox1Component } from './play-box1/play-box1.component';
import { PlayBox2Component } from './play-box2/play-box2.component';
import { PlayBox3Component } from './play-box3/play-box3.component';
import { PlayBox4Component } from './play-box4/play-box4.component';



import { HttpClientModule } from '@angular/common/http';
import { GameoverComponent } from './gameover/gameover.component';
import { DummyComponent } from './dummy/dummy.component';
import { HighScoreComponent } from './high-score/high-score.component';
 
 


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    PlayAreaComponent,
    PlayBox1Component,
    PlayBox2Component,
    PlayBox3Component,
    PlayBox4Component,
    GameoverComponent,
    DummyComponent,
    HighScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
