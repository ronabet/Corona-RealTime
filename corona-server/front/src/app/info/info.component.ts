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
        title: "",
        description: ""
      },
      {
        title: "",
        description: ""
      },
      {
        title: "",
        description: ""
      },
      {
        title: "",
        description: ""
      },
      {
        title: "",
        description: ""
      },
      {
        title: "",
        description: ""
      }
    ];
    return this.FactsArray;
  }

}
