import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { DataServiceService } from "src/app/data-service/data-service.service";
import { Team } from "src/app/dashboard/team";

@Component({
  selector: "app-upcoming-games",
  templateUrl: "./upcoming-games.component.html",
  styleUrls: ["./upcoming-games.component.css"],
})
export class UpcomingGamesComponent implements OnInit {
  constructor(private dataService: DataServiceService) {}
  @Input() favouriteTeam: Team;
  public matches = [];
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.matches = this.dataService.getUpcomingMatches(this.favouriteTeam.id);
  }
}
