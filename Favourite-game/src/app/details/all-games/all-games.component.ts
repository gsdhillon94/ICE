import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../../data-service/data-service.service";

@Component({
  selector: "app-all-games",
  templateUrl: "./all-games.component.html",
  styleUrls: ["./all-games.component.css"],
})
export class AllGamesComponent implements OnInit {
  constructor(private data: DataServiceService) {}
  favTeam;
  ngOnInit() {
    this.favTeam = this.data.getFavTeam();
  }

  getAllMatches() {
    let data = this.data.getAllMatches().games;
    console.log(data);

    return data;
  }
}
