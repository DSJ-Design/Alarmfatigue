import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient ?: Patient ;
  patients !: Patient[];

  constructor(private route:ActivatedRoute, private patientService: PatientService) { }

  ngOnInit(): void {
    const patientId = this.route.snapshot.paramMap.get("id");
    // this.patientService.getPatientById(patientId).subscribe(
    this.patientService.getPatients().subscribe(
      (res) => {
        this.patients = res.record;
        console.log("patient", this.patients)
        this.patients.forEach(p => {
          if (p.id == +patientId!) {
            this.patient = p
          }
        });

      }, (err) => {
        console.log("fuck")
      }
    );
  }

}
