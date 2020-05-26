import { Component, OnInit, Input } from "@angular/core";
import { DataServiceService } from "../../data-service/data-service.service";
import { Team } from "src/app/dashboard/team";

@Component({
  selector: "app-all-games",
  templateUrl: "./all-games.component.html",
  styleUrls: ["./all-games.component.css"],
})
export class AllGamesComponent implements OnInit {
  constructor(private data: DataServiceService) {}
  @Input() favouriteTeam: Team;
  ngOnInit() {}

  getAllMatches() {
    let data = [{}];
    let x = 0;
    let y = 0;
    this.data.getAllMatches().games.forEach((i) => {
      if (
        i.hteam == this.favouriteTeam.name ||
        i.ateam == this.favouriteTeam.name
      ) {
        data[y] = i;
        y++;
      }
      x++;
    });

    return data;
  }
}
