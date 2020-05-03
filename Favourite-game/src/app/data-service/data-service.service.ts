import { Injectable } from "@angular/core";
import * as games from "../data-service/game/previous-gamedata.json";
import * as teams from "../data-service/team/teams.json";
import * as nextGames from "../data-service/next-matches/next-matches.json";

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
  upComingMatches = (nextGames as any).default;
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

  getUpcomingMatches(id) {
    console.log("upComingMatches", this.upComingMatches.games);
    const matches = this.upComingMatches.games
      .filter((m) => m.ateamid == id || m.hteamid == id)
      .sort((a, b) => b.date - a.date)
      .slice(0, 5);
    console.log("matches", matches);
    return matches;
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
