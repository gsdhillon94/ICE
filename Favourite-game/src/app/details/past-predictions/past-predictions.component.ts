import { Component, OnInit,Input } from '@angular/core';
import { Team } from 'src/app/dashboard/team';
import { Tips} from 'src/app/tips'
import { DataServiceService } from 'src/app/data-service/data-service.service';

@Component({
  selector: 'past-predictions',
  templateUrl: './past-predictions.component.html',
  styleUrls: ['./past-predictions.component.css']
})
export class PastPredictionsComponent implements OnInit {

  
  @Input() favouriteTeam: Team;
  
  tips:Tips[];
  temps:Tips[];
 
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.tipsForFavTeam(this.favouriteTeam.id);
  }

  
  tipsForFavTeam(id:any): void {
    this.dataService.getTipsPast().subscribe(
    temp => { 
      this.tips = temp.filter( x=> {
        return x.ateamid == id || x.hteamid == id;
      });
      console.log("tips", this.tips);
  }); 
}

}
