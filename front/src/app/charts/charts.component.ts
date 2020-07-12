import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import * as CanvasJS from '../../assets/canvasjs.min';
import { ApiService, CountryStatisticModel } from '../api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  AllCountriesArray: CountryStatisticModel[] = [];
  chart = [];

  constructor(public EventEmitter: EventEmitterService, public api: ApiService) { }

  ngOnInit() {
    // this.getAllCountries();
    }


    getAllCountries(){
      this.api.getAllCountriesSecondery().subscribe((res: any) => {
        let resCountries = res.countries_stat;
        resCountries.forEach(element => {
            this.AllCountriesArray.push({
            "title": element.country_name.toUpperCase(),
            "total_cases": element.cases,
            "total_recovered": element.total_recovered,
            "total_deaths": element.deaths,
            "total_new_cases_today": element.new_cases,
            "total_new_deaths_today": element.new_deaths,
            "total_serious_cases": element.serious_critical
          })
        });
      });
    }

    chartsDisplaying(){
      let chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark2",
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "Top Countries Corona Chart"
        },
        data: [{
          type: "column",
          indexLabel: "{label}",
          dataPoints: [
            { y: 3000000, label: this.AllCountriesArray[0].title },
            { y: 1683738, label: "BRAZIL" },
            { y: 769052, label: "INDIA" },
            { y: 80000, label: "RUSSIA" },
            { y: 1500, label: "PERU" },
            { y: 150000, label: "CHILE"},
            { y: 2500000, label: "Others" }
          ]
        }]
      });
      chart.render();
    }
}
