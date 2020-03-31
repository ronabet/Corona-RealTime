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
  AllCountriesArray: CountryStatisticModel[] = [];
  StatsToDisplay: CountryStatisticModel[] = [];
  searchText: string = "";
  open = true;


  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getIsrael();
    this.getAllCountries();
    this.searchTextChanged(this.searchText);
  }

  
  getAllCountries() {
    this.api.getAllCountriesStat().subscribe((res: any) => {
      this.ResStat = res.countryitems["0"];
      Object.keys(this.ResStat).forEach(element => {
           this.AllCountriesArray.push({
          "title": this.ResStat[element].title,
          "total_cases": this.ResStat[element].total_cases,
          "total_recovered": this.ResStat[element].total_recovered,
          "total_deaths": this.ResStat[element].total_deaths,
          "total_new_cases_today": this.ResStat[element].total_new_cases_today,
          "total_new_deaths_today": this.ResStat[element].total_new_deaths_today,
          "total_serious_cases": this.ResStat[element].total_serious_cases
        }) 
      });

      this.StatsToDisplay = this.AllCountriesArray;
    });
  }

    getIsrael(){
        this.api.getAllCountriesStat().subscribe((res: any) => {
          this.ResStat = res.countryitems;
          let index = 76;
          this.StatsArray.push({
            "title": this.ResStat["0"][index].title,
            "total_cases": this.ResStat["0"][index].total_cases,
            "total_recovered": this.ResStat["0"][index].total_recovered,
            "total_deaths": this.ResStat["0"][index].total_deaths,
            "total_new_cases_today": this.ResStat["0"][index].total_new_cases_today,
            "total_new_deaths_today": this.ResStat["0"][index].total_new_deaths_today,
            "total_serious_cases": this.ResStat["0"][index].total_serious_cases
        })
          console.log(this.StatsArray);
      })
    }

    searchTextChanged(text: string) {
      this.searchText = this.stripWhiteSpaces(text);
      this.StatsToDisplay = [];
     this.addTasksToDisplay(this.AllCountriesArray);
    }
  
    addTasksToDisplay(countriesStats: CountryStatisticModel[]) {
      countriesStats.forEach((AllCountriesArray) => {
        if ((AllCountriesArray.title).match(this.searchText)) {
          this.StatsToDisplay.push(AllCountriesArray);
        }
      })
    }
  
    stripWhiteSpaces(str) {
      return str.replace(/^\s+|\s+$/g, '');
    }
  






}



    

    

  



