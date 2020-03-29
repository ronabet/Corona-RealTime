import { Component, OnInit } from '@angular/core';
import { ApiService, CountryStatisticModel } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  StatsArray: CountryStatisticModel[] = [];
  ResStat: CountryStatisticModel[] = [];


  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getopen()
  }

  
  getopen() {
    this.api.getAllCountriesStat().subscribe((res: any) => {
      this.ResStat = res.countryitems;
      // console.log(this.ResStat["0"][1]);
      this.StatsArray.push({
        "title": this.ResStat["0"][1].title,
        "total_cases": this.ResStat["0"][1].total_cases,
        "total_recovered": this.ResStat["0"][1].total_recovered,
        "total_deaths": this.ResStat["0"][1].total_deaths,
        "total_new_cases_today": this.ResStat["0"][1].total_new_cases_today,
        "total_new_deaths_today": this.ResStat["0"][1].total_new_deaths_today,
        "total_active_cases": this.ResStat["0"][1].total_active_cases
      }
      )
      console.log(this.StatsArray);
      
      
      // this.ResStat.forEach((element: any) => {
        // for(let i=0; i< this.ResStat.length; i++){
        // this.StatsArray.push(
        //   {
        //     "country": this.ResStat[i].title,
        //     "total_cases": this.ResStat[i].total_cases,
        //     "total_recovered": this.ResStat[i].total_recovered,
        //     "total_deaths": this.ResStat[i].total_deaths,
        //     "total_new_cases_today": this.ResStat[i].total_new_cases_today,
        //     "total_new_deaths_today": this.ResStat[i].total_new_deaths_today,
        //     "total_active_cases": this.ResStat[i].total_active_cases
        //    } as CountryStatisticModel
        //    );
        // }
        })
      }
    }

  



