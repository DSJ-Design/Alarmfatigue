import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
serverDown:boolean = false;
  patients!: Patient[];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    //this.patientService.getPatients().subscribe(res => this.patients = res)
    this.patientService.getPatients().subscribe(
      (res) => {
        this.patients = res.record;
        console.log(res.record)
        this.serverDown = false
      }, (err) => {
        this.serverDown = true
      }
    );
  }

}
