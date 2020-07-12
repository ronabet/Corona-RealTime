import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  panelOpenState = false;
  kak: any;

  constructor(public EventEmitter: EventEmitterService) { }

  questions: Object[] = [];

  ngOnInit() {
    this.QuestionsData();
  }

  QuestionsData(){
    this.questions = [
      {
        title:  `WHAT IS SARS-CoV-2 / COVID-19?`,
        description: "Severe Acute Respiratory Syndrome Coronavirus-2 (SARS-CoV-2) is the name given to the 2019 novel coronavirus. COVID-19 is the name given to the disease associated with the virus. SARS-CoV-2 is a new strain of coronavirus that has not been previously identified in humans."
      },
      {
        title: `When is a person infectious?`,
        description: "The infectious period may begin one to two days before symptoms appear, but people are likely most infectious during the symptomatic period, even if symptoms are mild and very non-specific. The infectious period is now estimated to last for 7-12 days in moderate cases and up to two weeks on average in severe cases."
      },
      {
        title: `Can COVID-19 spread in warm sunny weather?`,
        description: "COVID-19 can survive temperatures higher than 25C. You can catch it no matter how sunny and warm it is. So, whatever the weather you should follow the official advice to protect yourself from the virus. Getting out into the sunshine, if you can, is still a good idea as this helps your body produce vitamin D which is important for your immune system. "
      },
      {
        title: `Will drinking lots of hot drinks stop COVID-19?`,
        description: "There is no drink hot or cold that will protect you from COVID-19 or cure the illness. So far, there’s no proven cure for COVID-19 but most people recover by themselves. Taking paracetamol, drinking lots of liquids, and getting enough rest can help you manage your symptoms. "
      },
      {
        title: `Can Chloroquine cure COVID-19?`,
        description: "At the moment there is no proven cure for COVID-19, but most people will recover on their own without needing professional medical care. If you think you have COVID-19 and are having difficulty breathing, contact your local health facility as you will need professional medical care. "
      },
      {
        title: `Can Black and African people get COVID-19?`,
        description: "Anyone can get COVID-19, regardless of race or skin colour. Older people and people with other health conditions, such as asthma, heart diseases and diabetes, are more at risk of getting seriously ill. "
      }
    ];
  }



}
