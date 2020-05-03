import { Component, OnInit } from "@angular/core";
import * as teamData from "../data-service/team/teams.json";
import { DataServiceService } from "../data-service/data-service.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent implements OnInit {
  constructor(private dataservice: DataServiceService) {}
  teams;
  favTeam;

  ngOnInit() {
    this.teams = teamData.teams;
  }

  onTeamSelect(team, event) {
    this.favTeam = team.name;
    this.dataservice.setFavTeam(team);
    console.log(team);
  }

  isFav(name) {
    if (name === this.favTeam) {
      return true;
    } else {
      return false;
    }
  }
}
