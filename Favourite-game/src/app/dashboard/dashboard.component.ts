import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teams } from './team';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private apiUrl: string ="https://api.squiggle.com.au/?q=teams"
  public data: Teams;

  constructor(
    private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Teams>(this.apiUrl).subscribe((data: Teams)=>{
      console.log(data.teams[0]);
      this.data = data;
    })  
  }

  selected(team: any) {
    console.log("Selected " , team);
    alert(team.name);
  }
}
