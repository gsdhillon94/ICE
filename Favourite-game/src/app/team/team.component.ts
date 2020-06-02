import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DataServiceService } from "../data-service/data-service.service";
import { Team } from "../dashboard/team";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent implements OnInit {
  favouriteTeam: Team;
  allTeams: Team[];
  constructor(private dataservice: DataServiceService) {
    this.getTeams();
  }
  teams: Team[];
  favTeam: Team;

  ngOnInit() {
    // this.teams = teamData.teams;
  }

  getTeams() {
    this.dataservice.getTeams().subscribe((data) => {
      this.setAllTeams(data);
    });
  }

  setAllTeams(data) {
    this.allTeams = data;
  }

  onTeamSelect(team) {
    this.favTeam = team;
    this.dataservice.favTeam(team);
  }

  isFav(name) {
    // console.log(this.favTeam);

    if (this.favTeam != null) {
      if (name === this.favTeam.name) {
        return true;
      } else {
        return false;
      }
    }
  }
}
