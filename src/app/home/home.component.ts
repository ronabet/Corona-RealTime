import { Component, OnInit } from '@angular/core';
import { ApiService, CountryStatisticModel } from '../api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  ILStatsArray: CountryStatisticModel[] = [];
  ResStat: CountryStatisticModel[] = [];
  AllCountriesArray: CountryStatisticModel[] = [];
  StatsToDisplay: CountryStatisticModel[] = [];
  searchText: string = "";
  open = true;

  animal: string;
  name: string;


  constructor(public api: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getIsrael();
    // this.getAllCountries();
    this.searchTextChanged(this.searchText);
    this.getAllCountries();
  }

// 
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, { width: '400px', height: '450px' , data: {name: this.name, animal: this.animal}, panelClass: 'myapp-background'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  

    getAllCountries(){
      this.api.getAllCountriesSecondery().subscribe((res: any) => {
        let resCountries = res.countries_stat;
        resCountries.forEach(element => {
            this.AllCountriesArray.push({
            "title": element.country_name,
            "total_cases": element.cases,
            "total_recovered": element.total_recovered,
            "total_deaths": element.deaths,
            "total_new_cases_today": element.new_cases,
            "total_new_deaths_today": element.new_deaths,
            "total_serious_cases": element.serious_critical
          }) 
        });
        this.StatsToDisplay = this.AllCountriesArray;
      });
    }

    getIsrael(){
      this.api.getIsraelStat().subscribe((res: any) => {
        let latestStatIL = res.latest_stat_by_country["0"];
        console.log(res.latest_stat_by_country);
        this.ILStatsArray.push({
          "title": latestStatIL.country_name,
          "total_cases": latestStatIL.total_cases,
          "total_recovered": latestStatIL.total_recovered,
          "total_deaths": latestStatIL.total_deaths,
          "total_new_cases_today": latestStatIL.new_cases,
          "total_new_deaths_today": latestStatIL.new_deaths,
          "total_serious_cases": latestStatIL.serious_critical
      })
      console.log(this.ILStatsArray);
      
    })
    }


    searchTextChanged(text: string) {
      this.searchText = this.stripWhiteSpaces(text);
      this.StatsToDisplay = [];
     this.addTasksToDisplay(this.AllCountriesArray);
    }
  
    addTasksToDisplay(countriesStats: CountryStatisticModel[]) {
      countriesStats.forEach((AllCountriesArray) => {
        if ((AllCountriesArray.title).includes(this.searchText)) {
          this.StatsToDisplay.push(AllCountriesArray);
        }
      })
    }
  
    stripWhiteSpaces(str) {
      return str.replace(/^\s+|\s+$/g, '');
    }
  

}



    

    

  



