import { Muscle } from './../../../../models/muscle/muscle';
import { MuscleService } from './../../../../services/muscle/muscle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ExerciceService } from './../../../../services/exercice/exercice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-exercice-idee',
  templateUrl: './list-exercice-idee.component.html',
  styleUrls: ['./list-exercice-idee.component.css']
})
export class ListExerciceIdeeComponent implements OnInit {


  declare exercices : any;
  declare muscles : Muscle[];


  constructor(
    private exerciceService : ExerciceService,
    private muscleService : MuscleService,
    private router : Router,
    private route : ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.exerciceService.findAllExercices().subscribe(
      data => {
        console.log(data);
        this.exercices = data;

      }
    );
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.remove();
      this.router.navigate(['/exerciceIdee'])
    }

    this.muscleService.findAllMuscles().subscribe(
      data => {
        console.log(data);
        this.muscles = data as Muscle [];

      }
    )
  }
  remove() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.exerciceService.deleteExercice(id).subscribe(
      () => {


      }
    )
  }


}
