import { Router } from '@angular/router';
import { ExerciceService } from './../../../../services/exercice/exercice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-exercice',
  templateUrl: './add-exercice.component.html',
  styleUrls: ['./add-exercice.component.css']
})
export class AddExerciceComponent implements OnInit{

  declare form : FormGroup;

  constructor(
    private exerciceService: ExerciceService,
    private router : Router,
    private formBuilder: FormBuilder,
  ){

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({

      exercice_id: ['', Validators.required],
	    exercice_nom: ['', Validators.required],
	    exercice_description: ['', Validators.required],
	    exercice_photo: ['', Validators.required],
	    muscle_id: ['', Validators.required],

    })
  }
  create(){
    console.log(this.form.value);

    this.exerciceService.saveExercice(this.form.value).subscribe(

      ()=> {
        this.router.navigate(['/exercice'])
      }
    )



  }


}
