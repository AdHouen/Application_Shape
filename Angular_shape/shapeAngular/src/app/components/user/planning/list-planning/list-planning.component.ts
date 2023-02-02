import { EntrainementService } from './../../../../services/entrainement/entrainement.service';
import { ExerciceService } from './../../../../services/exercice/exercice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MuscleService } from './../../../../services/muscle/muscle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-planning',
  templateUrl: './list-planning.component.html',
  styleUrls: ['./list-planning.component.css']
})
export class ListPlanningComponent implements OnInit {

  declare muscles : any;
  declare exercices : any;
  declare entrainements : any;

  constructor(
    private muscleService : MuscleService,
    private exerciceService : ExerciceService,
    private entrainementService : EntrainementService,
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
      this.removeMuscle();
      this.router.navigate(['/planning'])
    }

    this.exerciceService.findAllExercices().subscribe(
      data => {
        console.log(data);
        this.exercices = data;

      }
    );
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.removeExercice();
      this.router.navigate(['/planning'])
    }

    this.entrainementService.findAllEntrainements().subscribe(
      data => {
        console.log(data);
        this.entrainements = data;

      }
    );
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.removeEntrainement();
      this.router.navigate(['/entrainement'])
    }
  }
  removeEntrainement() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.entrainementService.deleteEntrainement(id).subscribe(
      () => {


      }
    )
  }
  removeExercice() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.exerciceService.deleteExercice(id).subscribe(
      () => {


      }
    )
  }
  removeMuscle() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.muscleService.deleteMuscle(id).subscribe(
      () => {


      }
    )
  }

}
