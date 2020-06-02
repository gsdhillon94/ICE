import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataServiceService } from "../data-service/data-service.service";
import { Team } from "./team";
import { Teams } from "src/app/teams";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  favouriteTeam: Team;
  teams: Teams[];

  constructor(private dataservice: DataServiceService) {}

  ngOnInit() {
    this.allTeams();
  }

  allTeams(): void {
    this.dataservice.getAllTeamsHttp().subscribe((temp) => {
      this.teams = temp;
    });
  }

  navigation(team) {
    this.favouriteTeam = team;
  }

  setFavTeam2(team) {
    this.favouriteTeam = team;
  }

  setfavouriteTeam(team) {
    this.dataservice.favTeam(team);
    this.favouriteTeam = team;
  }
}
