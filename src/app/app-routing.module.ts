import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { GameoverComponent } from './gameover/gameover.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'playarea', component: PlayAreaComponent},
  { path: 'gameover' , component: GameoverComponent},
  { path: 'dummy' , component: DummyComponent},
  { path: '**', redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
