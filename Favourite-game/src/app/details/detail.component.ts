import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../data-service/data-service.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  constructor(private dataservice: DataServiceService) {}
  favouriteTeam = {
    logo: "",
    id: 2,
    abbrev: "ADE",
    name: "Adelaide",
  };
  activeTab = "All Games";
  ngOnInit() {
    // this.favouriteTeam = this.dataservice.favouriteTeam;
    // console.log("fave team", this.favouriteTeam);
  }

  setActive(event) {
    this.activeTab = event.target.value;
  }

  isSelected(tab) {
    if (tab === this.activeTab) {
      return true;
    }
    return false;
  }
}
