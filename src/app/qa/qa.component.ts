import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  questions: Object[] = [];

  ngOnInit(): void {
    this.QuestionsData();
  }

  QuestionsData(){
    this.questions = [
      {
        title:  `WHAT IS SARS-CoV-2 / COVID-19?`,
        description: "Severe Acute Respiratory Syndrome Coronavirus-2 (SARS-CoV-2) is the name given to the 2019 novel coronavirus. COVID-19 is the name given to the disease associated with the virus. SARS-CoV-2 is a new strain of coronavirus that has not been previously identified in humans."
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
    return this.questions;
  }

  

}
