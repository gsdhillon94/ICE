import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { DataServiceService } from "../data-service/data-service.service";
import { Team } from "../dashboard/team";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  favouriteTeam: Team;
  activeTab = "All Games";

  constructor(private dataservice: DataServiceService) {
    this.getFavTeam();
  }

  getFavTeam() {
    this.dataservice.favouriteTeam.subscribe((team) => {
      this.favouriteTeam = team;
      console.log(this.favouriteTeam);
    });
  }
  ngOnInit() {}

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
