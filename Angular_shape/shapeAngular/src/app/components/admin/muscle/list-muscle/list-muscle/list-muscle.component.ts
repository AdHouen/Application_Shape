import { ExerciceService } from './../../../../../services/exercice/exercice.service';
import { Exercice } from './../../../../../models/exercice/exercice';
import { Mensuration } from './../../../../../models/mensuration/mensuration';
import { MensurationService } from './../../../../../services/mensuration/mensuration.service';
import { MuscleService } from './../../../../../services/muscle/muscle.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-muscle',
  templateUrl: './list-muscle.component.html',
  styleUrls: ['./list-muscle.component.css']
})
export class ListMuscleComponent implements OnInit{

  declare muscles : any;
  declare mensurations : Mensuration[];
  declare exercices : Exercice[]

  constructor(
    private muscleService : MuscleService,
    private mensurationService : MensurationService,
    private exerciceService : ExerciceService,
    private router : Router,
    private route : ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.muscleService.findAllMuscles().subscribe(
      data => {
        console.log(data);
        this.muscles = data;

      }
    );
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.remove();
      this.router.navigate(['/muscle'])
    }

    this.mensurationService.findAllMensurations().subscribe(
      data => {
        console.log(data);
        this.mensurations = data as Mensuration[];

      }
    );
    this.exerciceService.findAllExercices().subscribe(
      data => {
        console.log(data);
        this.exercices = data as Exercice[];

      }
    );
  }
  remove() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.muscleService.deleteMuscle(id).subscribe(
      () => {


      }
    )
  }

}
