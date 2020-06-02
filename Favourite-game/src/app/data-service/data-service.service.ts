import { Injectable } from "@angular/core";
import { Team } from "./team/team";
import { Game } from "./game/game";
import * as nextGames from "../data-service/next-matches/next-matches.json";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  public favouriteTeam: Subject<Team> = new Subject<Team>();

  public allMatches: Game[];
  upComingMatches = (nextGames as any).default;

  constructor(private http: HttpClient) {
    this.setAllMatches();
  }

  getTeams(): Observable<Team[]> {
    return this.http
      .get("https://api.squiggle.com.au/?q=teams")
      .pipe(
        map((data: any) =>
          data.teams.map(
            (item: any) => new Team(item.name, item.id, item.abbrev, item.logo)
          )
        )
      );
  }

  getAllMatches() {
    return this.allMatches;
  }

  setAllMatches() {
    this.getAllGames().subscribe((data) => {
      this.allMatches = data;
    });
  }

  getAllGames(): Observable<Game[]> {
    return this.http
      .get("https://api.squiggle.com.au/?q=games;year=2019")
      .pipe(
        map((data: any) =>
          data.games.map(
            (item: any) =>
              new Game(
                item.hteam,
                item.is_grand_final,
                item.ascore,
                item.upated,
                item.hgoals,
                item.abehinds,
                item.hbehinds,
                item.hscore,
                item.ateamid,
                item.id,
                item.is_final,
                item.complete,
                item.winner,
                item.round,
                item.year,
                item.venue,
                item.winnerteamid,
                item.agoals,
                item.ateam,
                item.date,
                item.hteamid,
                item.tz
              )
          )
        )
      );
  }

  favTeam(team: Team) {
    this.favouriteTeam.next(team);
  }

  getUpcomingMatches(id) {
    const matches = this.upComingMatches.games
      .filter((m) => m.ateamid == id || m.hteamid == id)
      .sort((a, b) => b.date - a.date)
      .slice(0, 5);

    return matches;
  }

  getAllRivalTeams(teamName) {
    // let data = [{}];
    // this.allTeams.teams.forEach((team) => {
    //   if (team.name != this.favouriteTeam.name) {
    //     data.push(team);
    //   }
    // });
    // data.shift();
    // return data;
  }

  getMatchesRivals(team1, team2) {
    // let data = [{}];
    // this.allMatches.games.forEach((match) => {
    //   if (
    //     (match.hteam == team1 || match.ateam == team1) &&
    //     (match.hteam == team2 || match.ateam == team2)
    //   ) {
    //     data.push(match);
    //   }
    // });
    // data.shift();
    // return data;
  }
}
