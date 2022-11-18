import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  {path:"", component:PatientsComponent},
  {path:"patient/:id", component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
