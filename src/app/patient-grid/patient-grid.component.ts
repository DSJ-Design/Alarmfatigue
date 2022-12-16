import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-patient-grid',
  templateUrl: './patient-grid.component.html',
  styleUrls: ['./patient-grid.component.css']
})
export class PatientGridComponent implements OnInit {
  @Input() patient!: any;

  constructor(private router: Router) { }
  beademingsToestel!:boolean
  bademingValue!:string
  spuitPomp!:number
  medicatiePomp!:number
  ngOnInit(): void {
    this.changeAlarms();
  }

  detail(id: number) {
    this.router.navigate(["patient/", id])
  }

  animation(id: number) {
    return `animation-delay: ${id}s;`
  }

  changeAlarms(){
    this.medicatiePomp = 20;
    console.log(this.medicatiePomp)
    this.sleep(2000)
    this.medicatiePomp = 5;
    console.log(this.medicatiePomp)
  }

  sleep(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}


