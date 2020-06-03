import { Injectable } from "@angular/core";
import { Team } from "./team/team";
import { Game } from "./game/game";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Tips } from "../tips";
import { map } from "rxjs/operators";
import { of, from } from "rxjs";
import { Teams } from "../teams";
import { AbstractWebDriver } from "protractor/built/browser";
import { Standings } from "../standings";
import { isNgTemplate } from "@angular/compiler";
import { Tip } from "./prediction/Tip";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  public favouriteTeam: Subject<Team> = new Subject<Team>();
  teams: Team[];
  public allMatches: Game[];

  constructor(private http: HttpClient) {
    this.setAllMatches();
  }

  setTeams(teams) {
    this.teams = teams;
  }

  getSavedTeams(): Team[] {
    return this.teams;
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

  getAllMatches(): Game[] {
    return this.allMatches;
  }

  getStandings(): Observable<Standings[]> {
    return this.http
      .get("https://api.squiggle.com.au/?q=standings")
      .pipe(
        map((data: any) =>
          data.standings.map(
            (item: any) =>
              new Standings(
                item.goals_against,
                item.id,
                item.rank,
                item.behinds_against,
                item.pts,
                item.behinds_for,
                item.draws,
                item.forr,
                item.wins,
                item.against,
                item.losses,
                item.name,
                item.played,
                item.goals_for,
                item.percentage
              )
          )
        )
      );
  }

  getAllTeamsHttp(): Observable<Teams[]> {
    return this.http
      .get("https://api.squiggle.com.au/?q=teams")
      .pipe(
        map((data: any) =>
          data.teams.map(
            (item: any) => new Teams(item.logo, item.id, item.abbrev, item.name)
          )
        )
      );
  }

  getTips(): Observable<Tips[]> {
    return this.http
      .get("https://api.squiggle.com.au/?q=tips;year=2019;round=20")
      .pipe(
        map((data: any) =>
          data.tips.map(
            (item) =>
              new Tips(
                item.hteamid,
                item.tip,
                item.ateamid,
                item.year,
                item.venue,
                item.tipteamid,
                item.sourceid,
                item.date,
                item.source,
                item.ateam,
                item.round,
                item.confidence,
                item.correct,
                item.gameid,
                item.updated,
                item.margin,
                item.hconfidence,
                item.err,
                item.bits,
                item.hteam
              )
          )
        )
      );
  }

  getTipsPast(): Observable<Tips[]> {
    return this.http
      .get("https://api.squiggle.com.au/?q=tips;year=2018;source=1")
      .pipe(
        map((data: any) =>
          data.tips.map(
            (item) =>
              new Tips(
                item.hteamid,
                item.tip,
                item.ateamid,
                item.year,
                item.venue,
                item.tipteamid,
                item.sourceid,
                item.date,
                item.source,
                item.ateam,
                item.round,
                item.confidence,
                item.correct,
                item.gameid,
                item.updated,
                item.margin,
                item.hconfidence,
                item.err,
                item.bits,
                item.hteam
              )
          )
        )
      );
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

  getUpcomingMatches() {
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
    // const matches = this.upComingMatches.games
    //   .filter((m) => m.ateamid == id || m.hteamid == id)
    //   .sort((a, b) => b.date - a.date)
    //   .slice(0, 5);
    // return matches;
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
    let data = [{}];
    this.allMatches.forEach((match) => {
      if (
        (match.hteam == team1 || match.ateam == team1) &&
        (match.hteam == team2 || match.ateam == team2)
      ) {
        data.push(match);
      }
    });
    console.log(data);

    // data.shift();
    return data;
  }
}
