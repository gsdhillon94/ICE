import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { ComingUpComponent } from './coming-up/coming-up.component';
import { PreviousComponent } from './previous/previous.component';
import { RivalGamesComponent } from './rival-games/rival-games.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  {path:'comingUp', component: ComingUpComponent},
  {path:'predictions', component: PredictionsComponent},
  {path:'previous', component: PreviousComponent},
  {path:'rivalGames', component: RivalGamesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
