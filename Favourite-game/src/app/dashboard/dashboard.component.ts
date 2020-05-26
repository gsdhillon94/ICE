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
  private apiUrl: string = "https://api.squiggle.com.au/?q=teams";
  favouriteTeam: Team;
  constructor(private dataservice: DataServiceService) {}

  // ngOnInit() {
  // this.http.get<Teams>(this.apiUrl).subscribe((data: Teams) => {
  //   console.log(data.teams);
  //   this.data = data;
  // });
  // }

  // selected(team: any) {
  //   console.log("Selected ", team);
  //   alert(team.name);
  // }

  ngOnInit() {}
  setfavouriteTeam(event) {
    this.favouriteTeam = event;
    this.dataservice.setFavTeam(this.favouriteTeam);
  }
}
