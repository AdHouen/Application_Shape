import { Mensuration } from './../../../../models/mensuration/mensuration';
import { Router, ActivatedRoute } from '@angular/router';
import { MuscleService } from './../../../../services/muscle/muscle.service';
import { MensurationService } from './../../../../services/mensuration/mensuration.service';
import { Muscle } from './../../../../models/muscle/muscle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-mensuration-data',
  templateUrl: './list-mensuration-data.component.html',
  styleUrls: ['./list-mensuration-data.component.css']
})
export class ListMensurationDataComponent implements OnInit{

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
    this.mensurationService.findAllMensurationsByDate().subscribe(
      data => {
        this.mensurations = data as Mensuration[];

      }
    );
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.remove();


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
        this.router.navigate(['/mensurationData'])




      }
    )
  }



}
