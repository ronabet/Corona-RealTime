import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { SympComponent } from './symp/symp.component';
import { QaComponent } from './qa/qa.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'information', component: InfoComponent },
  { path: 'symptoms', component: SympComponent },
  { path: 'protectyourself', component: SympComponent },
  { path: 'qa', component: QaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
