import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataServiceService } from "../data-service/data-service.service";
import { Team } from "./team";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  favouriteTeam: Team;
  teams: Team[];

  constructor(private dataservice: DataServiceService) {
    this.allTeams();
  }

  ngOnInit() {}

  allTeams(): void {
    this.dataservice.getAllTeamsHttp().subscribe((temp) => {
      this.teams = temp;
    });
  }

  navigation(team) {
    this.favouriteTeam = team;
  }

  setfavouriteTeam(team) {
    this.dataservice.favTeam(team);
    this.favouriteTeam = team;
  }
}
