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

  declare entrainements : any[];
  declare semaines : any[];
  declare form : FormGroup;

  constructor(
    private entrainementService : EntrainementService,
    private router : Router,
    private formBuilder : FormBuilder

  ){

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      entrainement_id: ['', Validators.required],
      entrainement_jour: ['', Validators.required],
      entrainement_muscle: ['', Validators.required],
      entrainement_exo: ['', Validators.required],
      entrainement_serie: ['', Validators.required],
      entrainement_repetition: ['', Validators.required],
      entrainement_poids: ['', Validators.required],
      entrainement_recup: ['', Validators.required],
      entrainement_temps: ['', Validators.required],
      entrainement_distance: ['', Validators.required],
      utilisateur_id: ['', Validators.required],

    })
    this.getEntrainements();

  }


  getEntrainements() {
    return this.entrainementService.findAllEntrainements().subscribe(
      data => {
        console.log(data);
        this.entrainements = data as any[];

      }
    )
  }

  deleteEntrainement(id : number){
    return this.entrainementService.deleteEntrainement(id).subscribe(
      () => {

      }
    )
  }

}
