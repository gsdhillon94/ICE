import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import * as teamData from "../data-service/team/teams.json";
import { DataServiceService } from "../data-service/data-service.service";
import { Team } from "../dashboard/team";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent implements OnInit {
  @Output() favouriteTeam = new EventEmitter<Team>();
  constructor(private dataservice: DataServiceService) {}
  teams;
  favTeam: Team;

  ngOnInit() {
    this.teams = teamData.teams;
  }

  onTeamSelect(team, event) {
    this.favTeam = team;
    this.favouriteTeam.emit(this.favTeam);
  }

  isFav(name) {
    if (this.favTeam != null) {
      if (name === this.favTeam.name) {
        return true;
      } else {
        return false;
      }
    }
  }
}
