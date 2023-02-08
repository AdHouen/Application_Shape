import { Muscle } from './../../../../models/muscle/muscle';
import { MuscleService } from './../../../../services/muscle/muscle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MensurationService } from './../../../../services/mensuration/mensuration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-mensuration',
  templateUrl: './list-mensuration.component.html',
  styleUrls: ['./list-mensuration.component.css']
})
export class ListMensurationComponent implements OnInit{

  declare mensurations : any;
  declare muscles : Muscle[];

  constructor(
    private mensurationService : MensurationService,
    private muscleService : MuscleService,
    private router : Router,
    private route : ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.mensurationService.findAllMensurations().subscribe(
      data => {
        console.log(data);
        this.mensurations = data;

      }
    );
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.remove();
      this.router.navigate(['/mensuration'])
    }

    this.muscleService.findAllMuscles().subscribe(
      data => {
        console.log(data);
        this.muscles = data as Muscle[];

      }
    );
  }
  remove() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mensurationService.deleteMensuration(id).subscribe(
      () => {


      }
    )
  }


}
