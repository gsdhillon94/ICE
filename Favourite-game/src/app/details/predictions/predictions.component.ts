import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/dashboard/team';
import { Tips} from 'src/app/tips'
import { DataServiceService } from 'src/app/data-service/data-service.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent implements OnInit {

  @Input() favouriteTeam: Team;
  
  tips:Tips[];
  temps:Tips[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.tipsForFavTeam(this.favouriteTeam.id);
  }
  
  tipsForFavTeam(id:any): void {
    this.dataService.getTips().subscribe(
    temp => { 
      this.tips = temp.filter( x=> x.ateamid == id || x.hteamid == id);
      console.log("tips", this.tips);
  }); 
}
}
