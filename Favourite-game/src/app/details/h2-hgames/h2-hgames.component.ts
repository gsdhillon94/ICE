import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../../data-service/data-service.service";

@Component({
  selector: "app-h2-hgames",
  templateUrl: "./h2-hgames.component.html",
  styleUrls: ["./h2-hgames.component.css"],
})
export class H2HGamesComponent implements OnInit {
  constructor(private data: DataServiceService) {}
  rivalTeams;
  rivalTeam = "";
  ngOnInit() {
    this.rivalTeams = this.data.getAllRivalTeams(this.data.favouriteTeam);
  }

  onOptionsSelected(event) {
    console.log(event.target.value);
    this.rivalTeam = event.target.value;
  }

  getAllMatches() {
    return this.data.getMatchesRivals(this.rivalTeam, this.data.favouriteTeam);
  }
}
