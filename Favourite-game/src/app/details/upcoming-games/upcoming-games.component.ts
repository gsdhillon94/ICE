import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service/data-service.service';

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.css']
})
export class UpcomingGamesComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
 
  public matches =[];
  ngOnInit() {
    this.matches = this.dataService.getUpcomingMatches(this.dataService.favouriteTeam.id);
    console.log('matches:', this.matches);
  }

}

