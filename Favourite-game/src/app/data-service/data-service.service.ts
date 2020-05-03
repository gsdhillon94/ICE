import { Injectable } from "@angular/core";
import * as games from "../data-service/game/previous-gamedata.json";
import * as teams from "../data-service/team/teams.json";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  public favouriteTeam = {
    logo: "",
    id: 1,
    abbrev: "ADE",
    name: "Adelaide",
  };

  allMatches = (games as any).default;
  allTeams = (teams as any).default;
  constructor() {}

  setFavTeam(team) {
    this.favouriteTeam = team;
  }
  getFavTeam() {
    return this.favouriteTeam;
  }

  getAllMatches() {
    return this.allMatches;
  }

  getAllRivalTeams(teamName) {
    let data = [{}];

    this.allTeams.teams.forEach((team) => {
      if (team.name != this.favouriteTeam.name) {
        data.push(team);
      }
    });
    data.shift();
    return data;
  }

  getMatchesRivals(team1, team2) {
    let data = [{}];

    this.allMatches.games.forEach((match) => {
      if (
        (match.hteam == team1 || match.ateam == team1) &&
        (match.hteam == team2 || match.ateam == team2)
      ) {
        data.push(match);
      }
    });
    data.shift();
    return data;
  }
}
