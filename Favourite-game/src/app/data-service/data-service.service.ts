import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http' ;
import * as games from "../data-service/game/previous-gamedata.json";
import * as teams from "../data-service/team/teams.json";
import * as nextGames from "../data-service/next-matches/next-matches.json";

import {Tips} from "../tips"
import {map} from 'rxjs/operators';
import {Observable,of, from } from 'rxjs';
import{Teams} from '../teams'
import { AbstractWebDriver } from 'protractor/built/browser';
import {Standings} from '../standings'
import { isNgTemplate } from '@angular/compiler';

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
  
  constructor(private http: HttpClient) {}

  setFavTeam(team) {
    this.favouriteTeam = team;
  }
  getFavTeam() {
    return this.favouriteTeam;
  }

  getAllMatches(){
    return this.allMatches
  }

  getStandings(): Observable<Standings[]>{
    return this.http.get('https://api.squiggle.com.au/?q=standings')
    .pipe(map((data:any)=> data.standings.map((item:any)=> new Standings(
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
      ))));
  }

  getAllTeamsHttp(): Observable<Teams[]> {
    return this.http.get('https://api.squiggle.com.au/?q=teams')
    .pipe(map((data: any)=> data.teams.map((item:any)=> new Teams(
      item.logo,
      item.id,
      item.abbrev, 
      item.name
    ))));
  }

  getTips() : Observable<Tips[]> {
    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2019;round=20')
    .pipe(map((data: any) => data.tips.map((item) => new Tips( 
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
      ))) 
      );
  } 

  getTipsPast():Observable<Tips[]> {
    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2018;source=1')
    .pipe(map((data:any)=> data.tips.map((item)=> new Tips(
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
    ))));
  }

  // getTipsTeam(id): Tips[]{
  //   const tips= this.getTips()
  //   .filter((m) => m.ateamid==id || m.hteamid==id)
    
  //   return tips
  // }
 
  getUpcomingMatches(id) {
    const matches = this.upComingMatches.games
      .filter((m) => m.ateamid == id || m.hteamid == id)
      .sort((a, b) => b.date - a.date)
      .slice(0, 5);

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
