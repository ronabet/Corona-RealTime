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
      this.resReturn = true;
      console.log(res);
      this.CountryStatsObject = {
        "active_cases": res.latest_stat_by_country[0].active_cases,
        "new_cases": res.latest_stat_by_country[0].new_cases,
        "new_deaths": res.latest_stat_by_country[0].new_deaths,
        "total_deaths": res.latest_stat_by_country[0].total_deaths,
        "total_recovered": res.latest_stat_by_country[0].total_recovered,
        "total_tests": res.latest_stat_by_country[0].total_tests
      }
    });
  }

}
