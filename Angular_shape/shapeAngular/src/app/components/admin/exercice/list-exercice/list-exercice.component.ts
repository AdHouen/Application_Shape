import { Router, ActivatedRoute } from '@angular/router';
import { ExerciceService } from './../../../../services/exercice/exercice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-exercice',
  templateUrl: './list-exercice.component.html',
  styleUrls: ['./list-exercice.component.css']
})
export class ListExerciceComponent implements OnInit {

  declare exercices : any;

  constructor(
    private exerciceService : ExerciceService,
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
      this.router.navigate(['/exercice'])
    }
  }
  remove() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.exerciceService.deleteExercice(id).subscribe(
      () => {


      }
    )
  }

}
