import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { DataServiceService } from "src/app/data-service/data-service.service";
import { Team } from "src/app/dashboard/team";
import { distinct, toArray } from "rxjs/operators";
import { of } from "rxjs";
import { Game } from "../../data-service/game/game";
@Component({
  selector: "app-upcoming-games",
  templateUrl: "./upcoming-games.component.html",
  styleUrls: ["./upcoming-games.component.css"],
})
export class UpcomingGamesComponent implements OnInit {
  @Input() favouriteTeam: Team;
  public matches: Game[];
  constructor(private dataService: DataServiceService) {}
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataService.getUpcomingMatches().subscribe((data) => {
      this.matches = data
        .filter(
          (m) =>
            m.ateamid == this.favouriteTeam.id ||
            m.hteamid == this.favouriteTeam.id
        )
        .sort((a, b) => b.date - a.date)
        .slice(0, 5);
      console.log(this.matches);
    });
  }
}
