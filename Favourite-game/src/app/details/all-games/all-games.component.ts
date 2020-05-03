import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../../data-service/data-service.service";

@Component({
  selector: "app-all-games",
  templateUrl: "./all-games.component.html",
  styleUrls: ["./all-games.component.css"],
})
export class AllGamesComponent implements OnInit {
  constructor(private data: DataServiceService) {}
  favTeam: string;
  ngOnInit() {
    this.favTeam = this.data.getFavTeam().name;
  }

  getAllMatches() {
    let data = [{}];
    let x = 0;
    let y = 0;
    this.data.getAllMatches().games.forEach((i) => {
      if (i.hteam == this.favTeam || i.ateam == this.favTeam) {
        data[y] = i;
        y++;
      }
      x++;
    });

    return data;
  }
}
