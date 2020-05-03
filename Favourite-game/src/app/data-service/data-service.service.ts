import { Injectable } from "@angular/core";
import * as games from "../data-service/game/previous-gamedata.json";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  public favouriteTeam = {
    logo: "",
    id: 1,
    abbrev: "ADE",
    name: "Adedlaide",
  };

  allMatches = (games as any).default;
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
}
