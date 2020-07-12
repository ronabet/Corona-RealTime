import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SympComponent } from './symp/symp.component';
import { QaComponent } from './qa/qa.component';
import { ChartsComponent } from './charts/charts.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'symptoms', component: SympComponent },
  { path: 'protectyourself', component: SympComponent },
  { path: 'qa', component: QaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
