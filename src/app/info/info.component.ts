import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  FactsArray: Object[] = [];
  constructor() { }

  ngOnInit(): void {
    this.FactsData();
  }

  FactsData(){
    this.FactsArray = [
      {
        title: "harta1",
        description: "class InfoComponent implements OnInitexport implements OnInitexportimplements OnInitexportimplements OnInitexportimplements OnInitexport class InfoComponent implements OnInit class InfoComponent implements class InfoComponent implements class InfoComponent implements class InfoComponent implements"
      },
      {
        title: "harta2",
        description: "harta2"
      },
      {
        title: "harta2",
        description: "harta2"
      },
      {
        title: "harta2",
        description: "harta2"
      },
      {
        title: "harta2",
        description: "harta2"
      },
      {
        title: "harta2",
        description: "harta2"
      }
    ];
    return this.FactsArray;
  }

}
