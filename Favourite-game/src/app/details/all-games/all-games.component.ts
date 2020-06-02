import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { DataServiceService } from "../../data-service/data-service.service";
import { Team } from "../../data-service/team/team";
import { Game } from "../../data-service/game/game";

@Component({
  selector: "app-all-games",
  templateUrl: "./all-games.component.html",
  styleUrls: ["./all-games.component.css"],
})
export class AllGamesComponent implements OnInit {
  @Input() favouriteTeam: Team;
  allGames: Game[];
  constructor(private data: DataServiceService) {
    this.allGames = this.data.getAllMatches();
  }

  ngOnInit() {}

  getAllMatches() {
    let data: Game[] = [];
    let x = 0;
    let y = 0;
    this.data.getAllMatches().forEach((i: Game) => {
      if (
        i.hteam == this.favouriteTeam.name ||
        i.ateam == this.favouriteTeam.name
      ) {
        data.push(i);
      }
      x++;
    });

    return data;
  }
}
