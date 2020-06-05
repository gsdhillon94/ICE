import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { DataServiceService } from "../../data-service/data-service.service";
import { Team } from "../../data-service/team/team";
import { Game } from "../../data-service/game/game";

@Component({
  selector: "app-h2-hgames",
  templateUrl: "./h2-hgames.component.html",
  styleUrls: ["./h2-hgames.component.css"],
})
export class H2HGamesComponent implements OnInit {
  @Input() favouriteTeam: Team;
  @Input() teams: Team[];
  constructor(private data: DataServiceService) {}
  rivalTeams: Team[] = [];
  rivalTeamId;
  matches: Game[] = [];
  ngOnInit() {
    this.getAllRivalTeams();
  }

  onRivalTeamChange(team) {
    this.rivalTeamId = team;
    this.getAllMatches();
  }

  getAllMatches() {
    let data: Game[];
    this.matches = [];
    data = this.data.getAllMatches();
    console.log(this.rivalTeamId);

    for (let match of data) {
      if (
        (match.ateamid == this.rivalTeamId &&
          match.hteamid == this.favouriteTeam.id) ||
        (match.ateamid == this.favouriteTeam.id &&
          match.hteamid == this.rivalTeamId)
      ) {
        this.matches.push(match);
      }
    }
  }

  getAllRivalTeams() {
    for (let team of this.teams) {
      if (team.id != this.favouriteTeam.id) {
        this.rivalTeams.push(team);
      }
    }
    console.log(this.rivalTeams);
  }
  ngOnChanges(changes: SimpleChanges) {
    this.favouriteTeam = changes.favouriteTeam.currentValue;
    this.matches = [];
    this.rivalTeamId = 0;
  }
}
