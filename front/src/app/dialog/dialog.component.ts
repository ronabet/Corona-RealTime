import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config } from '../../environments/config.dev';
import { ApiService, CountryStatisticModel, WorldStatisticModel } from '../api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  total_cases: string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>, private http: HttpClient, public api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    resReturn: boolean = false;
    Countryparams = new HttpParams();
    headersOptions = new HttpHeaders();
    Countryoptions: any;
    CountryStatsObject: any;

  ngOnInit(): void {
    this.getCountryLastStat();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getCountryLastStat(){
    this.Countryparams = new HttpParams().set('country', this.data.name);
    this.headersOptions = new HttpHeaders()
    .set('x-rapidapi-key', 'fd565ad5a2msh8156f64d17d4454p1c66fdjsn1f30d420a80a')
    this.Countryoptions = { params: this.Countryparams, headers: this.headersOptions };
    this.api.getCountryStat(this.Countryoptions).subscribe((res: any) => {
      let resFiltered = res.latest_stat_by_country[0];
      this.resReturn = true;
      console.log(res);
      this.CountryStatsObject = {
        "active_cases": resFiltered ? resFiltered.active_cases : "N/A",
        "new_cases": resFiltered.new_cases ? resFiltered.new_cases : "N/A",
        "new_deaths": resFiltered.new_deaths ? resFiltered.new_deaths : "N/A",
        "total_deaths": resFiltered.total_deaths ? resFiltered.total_deaths : "N/A",
        "total_recovered": resFiltered.total_recovered ? resFiltered.total_recovered : "N/A",
        "total_tests": resFiltered.total_tests ? resFiltered.total_tests : "N/A",
        "total_test_by_day": resFiltered.total_tests_per1m ? resFiltered.total_tests_per1m : "N/A"
      }
      console.log(res.latest_stat_by_country[0].new_cases);

    });
  }

}
