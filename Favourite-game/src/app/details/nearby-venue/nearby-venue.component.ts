import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { DataServiceService } from "../../data-service/data-service.service";
import { VenueDistance } from "../../data-service/venueDistance/venue-distance";
import { Game } from "../../data-service/game/game";

@Component({
  selector: "app-nearby-venue",
  templateUrl: "./nearby-venue.component.html",
  styleUrls: ["./nearby-venue.component.css"],
})
export class NearbyVenueComponent implements OnInit {
  lng: number = 0;
  lat: number = 0;
  allGames: Game[];
  distinctVenues: VenueDistance[];
  constructor(private dataService: DataServiceService) {
    this.allGames = this.dataService.getAllMatches();
    this.distinctVenues = Array.from(
      new Set(this.allGames.map((x) => x.venue))
    ).map((venue) => {
      return {
        venue: venue,
        distance: 0,
      };
    });
    this.formatVenues();
    this.getCurrentLocation();
    this.getDistanceForVenues();
  }
  ngOnInit() {}
  formatVenues() {
    let i = 0;
    this.distinctVenues.forEach((venue) => {
      this.distinctVenues[i].venue = venue.venue.replace(/ /, "+");
      i++;
    });
    console.log(this.distinctVenues);
  }
  getDistanceForVenues() {
    let x = 0;
    this.distinctVenues.forEach((venue) => {
      this.dataService
        .getDistance(venue, this.lng, this.lat)
        .subscribe((data) => {
          this.distinctVenues[x].distance = data;
        });
    });
    let y = 0;
    let z = 0;
    this.allGames.forEach((game) => {
      this.distinctVenues.forEach((venue) => {
        z = 0;
        if (game.venue == venue.venue) {
          this.allGames[y].distance = this.distinctVenues[z].distance;
        }
      });
    });
  }
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }
      });
    }
  }

  getMatchesNearby() {
    return this.allGames;
  }
}
