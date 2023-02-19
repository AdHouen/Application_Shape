import { SemaineService } from './../../../../services/semaine/semaine.service';
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
  declare entrainements : any;
  declare semaines : any;

  constructor(
    private entrainementService : EntrainementService,
    private semaineService : SemaineService,
    private router : Router,
    private route : ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.entrainementService.findAllEntrainements().subscribe(
      data => {
        console.log(data);
        this.entrainements = data;

      }
    );
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.removeEntrainement();
      this.router.navigate(['/planning'])
    }

    this.semaineService.findAllSemaines().subscribe(
      data => {
        console.log(data);
        this.semaines = data;

      }
    );


  }
  removeEntrainement() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.entrainementService.deleteEntrainement(id).subscribe(
      () => {


      }
    )
  }



}
