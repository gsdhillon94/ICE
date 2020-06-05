import { Component, OnInit, Input } from '@angular/core';
import { Teams } from 'src/app/data-service/teams';
import { Standings } from 'src/app/data-service/standings';
import { DataServiceService } from 'src/app/data-service/data-service.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  @Input() favouriteTeam:Teams;
  Standings: Standings[];

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
    this.getStandings(this.favouriteTeam.id);
  }

  getStandings(id:number): void{
    this.dataService.getStandings().subscribe( 
      temp => {
        console.log('temp', temp);
        this.Standings=temp.filter(x=> x.id == id)
        console.log('id',id)
      });
  }

}
