import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config } from './../environments/config.dev';

export interface CountryStatisticModel {
  "title": string;
  "total_cases": string;
  "total_recovered": string;
  "total_deaths": string;
  "total_new_cases_today": string,
  "total_new_deaths_today": string,
  "total_serious_cases": string
}

export interface WorldStatisticModel {
  "total_cases": string;
  "total_deaths": string;
  "total_recovered": string;
  "new_cases": string;
  "new_deaths": string;
}


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }


  params1 = new HttpParams()
  .set('country', 'israel');

  Countryparams = new HttpParams()
  .set('country', "");

  headersOptions = new HttpHeaders()
  .set('x-rapidapi-key', config.ACCESS_TOKEN)

  options = { params: this.params1, headers: this.headersOptions };

  Countryoptions = { params: this.Countryparams, headers: this.headersOptions };

  getAllCountriesStat(){
    return this.http.get(config.GET_ALL_COUNTRIE_STAT_URL);
  }

  getAllCountriesSecondery(){
    return this.http.get(config.GET_ALL_COUNTRIES_API_URL2, { headers: this.headersOptions});
  }

  getIsraelStat(){
    return this.http.get(config.GET_ISRAEL, this.options);
  }

  getWorldStat(){
    return this.http.get(config.GET_WORLD_STAT, { headers: this.headersOptions });
  }

  getCountryStat(headers){
    return this.http.get(config.GET_ISRAEL, headers);
  }



}
