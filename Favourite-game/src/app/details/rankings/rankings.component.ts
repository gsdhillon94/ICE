import { Component, OnInit,Input } from '@angular/core';
import { DataServiceService } from 'src/app/data-service/data-service.service';
import { Teams } from 'src/app/data-service/teams';
import { Standings } from 'src/app/data-service/standings';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  @Input() favouriteTeam:Teams;
  Standings: Standings[];

  constructor(private DataService:DataServiceService) { }

  ngOnInit() {
    this.getStandings(this.favouriteTeam.id);
  }

  getStandings(id:number): void{
    this.DataService.getStandings().subscribe( 
      temp => {
        this.Standings=temp;
      });
  }

}
