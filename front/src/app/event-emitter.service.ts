import { Injectable, EventEmitter } from '@angular/core';
import { CountryStatisticModel } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  ChartsData = new EventEmitter();

  constructor() { }

  sendChartsData(data: any) {
    this.ChartsData.emit(data);
  }
}
