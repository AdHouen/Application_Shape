import { MuscleService } from './../../../../services/muscle/muscle.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muscle',
  templateUrl: './muscle.component.html',
  styleUrls: ['./muscle.component.css']
})
export class MuscleComponent implements OnInit {

  declare muscles : any[];
  declare form : FormGroup;

  constructor(

    private muscleService : MuscleService,
    private router : Router,
    private formBuilder : FormBuilder

  ){

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      muscle_id: ['', Validators.required],
	    muscle_nom: ['', Validators.required],
	    muscle_image: ['', Validators.required],
	    utilisateur_id: ['', Validators.required],
	    listMensuration: [[], Validators.required],
	    listExercice: [[], Validators.required],

    })
    this.getMuscles();
  }
  getMuscles() {
    return this.muscleService.findAllMuscles().subscribe(
      data => {
        console.log(data);
        this.muscles = data as any[];

      }
    )
  }
  deleteMuscle(id : number){
    return this.muscleService.deleteMuscle(id).subscribe(
      () => {
        
      }
    )
  }

}
