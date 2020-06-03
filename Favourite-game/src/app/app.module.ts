import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { HttpClientModule } from "@angular/common/http";
import { TeamComponent } from "./team/team.component";
import { DetailComponent } from "./details/detail.component";
import { AllGamesComponent } from "./details/all-games/all-games.component";
import { H2HGamesComponent } from "./details/h2-hgames/h2-hgames.component";
import { UpcomingGamesComponent } from "./details/upcoming-games/upcoming-games.component";
import { NearbyVenueComponent } from "./details/nearby-venue/nearby-venue.component";
import { PredictionsComponent } from "./details/predictions/predictions.component";
import { PastPredictionsComponent } from "./details/past-predictions/past-predictions.component";
import { StandingsComponent } from "./details/standings/standings.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamComponent,
    DetailComponent,
    AllGamesComponent,
    H2HGamesComponent,
    UpcomingGamesComponent,
    NearbyVenueComponent,
    PredictionsComponent,
    PastPredictionsComponent,
    StandingsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
