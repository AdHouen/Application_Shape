import { MuscleService } from './../../../../services/muscle/muscle.service';
import { MensurationService } from './../../../../services/mensuration/mensuration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensuration',
  templateUrl: './mensuration.component.html',
  styleUrls: ['./mensuration.component.css']
})
export class MensurationComponent implements OnInit{
  declare mensurations : any[];
  declare form : FormGroup;

  constructor(

    private mensurationService : MensurationService,
    private router : Router,
    private formBuilder : FormBuilder

  ){

  }

ngOnInit(): void {
  this.form = this.formBuilder.group({
    mensuration_id: ['', Validators.required],
	  mensuration_date: ['', Validators.required],
	  mensuration_valeur: ['', Validators.required],
	  muscle_id: ['', Validators.required],

  })
  this.getMensurations();
}
  getMensurations() {
    return this.mensurationService.findAllMensurations().subscribe(
      data => {
        console.log(data);
        this.mensurations = data as any[];

      }

    )
  }
  deleteMensuration(id : number){
    return this.mensurationService.deleteMensuration(id).subscribe(
      () => {

      }
    )
  }


}


