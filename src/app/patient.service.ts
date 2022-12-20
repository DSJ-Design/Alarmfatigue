import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  //baseUrl = "https://api.jsonbin.io/v3/qs/639f912301a72b59f233f453/";
  baseUrl = "https://api.jsonbin.io/v3/qs/63a1d959dfc68e59d56d15f9"
  constructor(private httpClient: HttpClient) {
  }

  getPatients(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }

  getPatientById(id:any): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+id);
  }



  /*updateAlarm(id: any, name:string, value:number): Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({value:value});
    return this.httpClient.patch(this.baseUrl+id,body,{'headers':headers});
  }*/
}
