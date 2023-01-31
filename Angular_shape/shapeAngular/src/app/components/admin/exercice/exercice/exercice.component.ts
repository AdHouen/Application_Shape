import { Router } from '@angular/router';
import { ExerciceService } from './../../../../services/exercice/exercice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  declare exercices : any[];
  declare form : FormGroup;

  constructor(

    private exerciceService : ExerciceService,
    private router : Router,
    private formBuilder : FormBuilder

  ){

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      exercice_id: ['', Validators.required],
	    exercice_nom: ['', Validators.required],
	    exercice_description: ['', Validators.required],
	    exercice_photo: ['', Validators.required],
	    muscle_id: ['', Validators.required],
      listEntrainement: [[], Validators.required],


    })
    this.getExercices();
  }
  getExercices() {
    return this.exerciceService.findAllExercices().subscribe(
      data => {
        console.log(data);
        this.exercices = data as any[];

      }
    )
  }
  deleteExercice(id : number){
    return this.exerciceService.deleteExercice(id).subscribe(
      () => {

      }
    )
  }

}

