import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl = "http://localhost:3000/patients/";
  constructor(private httpClient: HttpClient) {
  }

  getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.baseUrl);
  }

  getPatientById(id: any): Observable<Patient> {
    return this.httpClient.get<Patient>(this.baseUrl + id);
  }

  /*updateAlarm(id: any, name:string, value:number): Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({value:value});
    return this.httpClient.patch(this.baseUrl+id,body,{'headers':headers});
  }*/
}
