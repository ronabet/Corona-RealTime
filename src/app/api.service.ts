import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './../environments/config.dev';

export interface CountryStatisticModel {
  "title": string;
  "total_cases": string;
  "total_recovered": string;
  "total_deaths": string;
  "total_new_cases_today": string,
  "total_new_deaths_today": string,
  "total_active_cases": string
}


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }

  getAllCountriesStat(){
    return this.http.get(config.GET_ALL_COUNTRIE_STAT_URL);
  }

}
