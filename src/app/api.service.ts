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


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }


  params1 = new HttpParams()
  .set('country', 'israel');

  headersOptios = new HttpHeaders()
  .set('x-rapidapi-key', 'fd565ad5a2msh8156f64d17d4454p1c66fdjsn1f30d420a80a')

  options = { params: this.params1, headers: this.headersOptios };

  getAllCountriesStat(){
    return this.http.get(config.GET_ALL_COUNTRIE_STAT_URL);
  }

  getAllCountriesSecondery(){
    return this.http.get(config.GET_ALL_COUNTRIES_API_URL2, { headers: this.headersOptios});
  }

  getIsraelStat(){
    return this.http.get(config.GET_ISRAEL, this.options);
  }

}
