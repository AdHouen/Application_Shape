import { Router, ActivatedRoute } from '@angular/router';
import { ExerciceService } from './../../../../services/exercice/exercice.service';
import { Exercice } from './../../../../models/exercice/exercice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-exercice',
  templateUrl: './edit-exercice.component.html',
  styleUrls: ['./edit-exercice.component.css']
})
export class EditExerciceComponent implements OnInit {

  declare editForm : FormGroup;
  declare exercice : Exercice;

  constructor(
    private exerciceService : ExerciceService,
    private router : Router,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder,

  ){

  }
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({

      exercice_id: ['', Validators.required],
	    exercice_nom: ['', Validators.required],
	    exercice_description: ['', Validators.required],
	    exercice_photo: ['', Validators.required],
	    muscle_id: ['', Validators.required],

    })
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //récupere le produit via l'id
    this.exerciceService.editExercice(id).subscribe(
      data => {
        console.log(data);
        //complete le form avec le produit récupéré
        this.editForm.setValue(data);

      }
    )
  }
  update(){

    if(this.editForm.valid) {

      this.exerciceService.updateExercice(this.editForm.value).subscribe(
        () =>{
          this.router.navigate(['/exercice'])
        }
      )
    }
  }

}
