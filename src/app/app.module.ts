import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientsComponent } from './patients/patients.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientGridComponent } from './patient-grid/patient-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientsComponent,
    PatientGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
