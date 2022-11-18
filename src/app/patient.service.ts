import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) {
  }

  getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>("http://localhost:3000/patients");
  }

  getPatientById(id: any): Observable<Patient> {
    return this.httpClient.get<Patient>("http://localhost:3000/patients/" + id);
  }
}
