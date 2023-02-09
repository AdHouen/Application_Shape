import { Router } from '@angular/router';
import { MensurationService } from './../../../../services/mensuration/mensuration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensuration-data',
  templateUrl: './mensuration-data.component.html',
  styleUrls: ['./mensuration-data.component.css']
})
export class MensurationDataComponent implements OnInit{
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
