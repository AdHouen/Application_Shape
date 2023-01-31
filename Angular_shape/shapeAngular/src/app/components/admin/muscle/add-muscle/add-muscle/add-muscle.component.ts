import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MuscleService } from './../../../../../services/muscle/muscle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-muscle',
  templateUrl: './add-muscle.component.html',
  styleUrls: ['./add-muscle.component.css']
})
export class AddMuscleComponent implements OnInit{

  declare form : FormGroup;

  constructor(
    private muscleService: MuscleService,
    private router : Router,
    private formBuilder: FormBuilder,
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
  }
  create(){
    console.log(this.form.value);

    this.muscleService.saveMuscle(this.form.value).subscribe(

      ()=> {
        this.router.navigate(['/muscle'])
      }
    )



  }

}
