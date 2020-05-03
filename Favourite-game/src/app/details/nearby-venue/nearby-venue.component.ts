import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../../data-service/data-service.service";

@Component({
  selector: "app-nearby-venue",
  templateUrl: "./nearby-venue.component.html",
  styleUrls: ["./nearby-venue.component.css"],
})
export class NearbyVenueComponent implements OnInit {
  constructor(private data: DataServiceService) {}
  matches;
  ngOnInit() {
    this.getVenues();
  }

  getGeolocation() {
    console.log(navigator.geolocation);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    }
  }
  displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    console.log(`longitude: ${lng} | latitude: ${lat}`);
  }

  getVenues() {
    this.matches = this.data.getUpcomingMatches(this.data.favouriteTeam.id);
    console.log(this.matches);
  }
}
