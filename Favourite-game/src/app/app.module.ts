import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule }    from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { RivalGamesComponent } from './rival-games/rival-games.component';
import { ComingUpComponent } from './coming-up/coming-up.component';
import { PreviousComponent } from './previous/previous.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamComponent,
    PredictionsComponent,
    RivalGamesComponent,
    ComingUpComponent,
    PreviousComponent
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
