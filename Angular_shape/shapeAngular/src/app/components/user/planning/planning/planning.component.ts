import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EntrainementService } from './../../../../services/entrainement/entrainement.service';
import { ExerciceService } from './../../../../services/exercice/exercice.service';
import { MuscleService } from './../../../../services/muscle/muscle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit{

  declare muscles : any[];
  declare exercices : any[];
  declare entrainements : any[];
  declare form : FormGroup;

  constructor(
    private muscleService : MuscleService,
    private exerciceService : ExerciceService,
    private entrainementService : EntrainementService,
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

    this.form = this.formBuilder.group({
      exercice_id: ['', Validators.required],
	    exercice_nom: ['', Validators.required],
	    exercice_description: ['', Validators.required],
	    exercice_photo: ['', Validators.required],
	    muscle_id: ['', Validators.required],
      listEntrainement: [[], Validators.required],


    })
    this.getExercices();

    this.form = this.formBuilder.group({
      entrainement_id: ['', Validators.required],
      entrainement_date: ['', Validators.required],
      entrainement_nom: ['', Validators.required],
      entrainement_serie: ['', Validators.required],
      entrainement_repetition: ['', Validators.required],
      entrainement_poids: ['', Validators.required],
      entrainement_pause: ['', Validators.required],
      entrainement_tempsSeconde: ['', Validators.required],
      entrainement_distance: ['', Validators.required],
      exercice_id: ['', Validators.required],

    })
    this.getEntrainements();


  }

  getExercices() {
    return this.exerciceService.findAllExercices().subscribe(
      data => {
        console.log(data);
        this.exercices = data as any[];

      }
    )
  }
  getMuscles() {
    return this.muscleService.findAllMuscles().subscribe(
      data => {
        console.log(data);
        this.muscles = data as any[];

      }
    )
  }

  getEntrainements() {
    return this.entrainementService.findAllEntrainements().subscribe(
      data => {
        console.log(data);
        this.entrainements = data as any[];

      }
    )
  }

}
