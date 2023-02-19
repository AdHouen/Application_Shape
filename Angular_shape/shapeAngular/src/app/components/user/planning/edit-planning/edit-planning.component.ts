import { Router, ActivatedRoute } from '@angular/router';
import { EntrainementService } from './../../../../services/entrainement/entrainement.service';
import { Entrainement } from './../../../../models/entrainement/entrainement';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-planning',
  templateUrl: './edit-planning.component.html',
  styleUrls: ['./edit-planning.component.css']
})
export class EditPlanningComponent implements OnInit{

  declare editForm : FormGroup;
  declare entrainement : Entrainement;

  constructor(
    private entrainementService : EntrainementService,
    private router : Router,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder,

  ){

  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      entrainement_id: ['', Validators.required],
      entrainement_muscle: ['', Validators.required],
      entrainement_exo: ['', Validators.required],
      entrainement_serie: ['', Validators.required],
      entrainement_repetition: ['', Validators.required],
      entrainement_poids: ['', Validators.required],
      entrainement_pause: ['', Validators.required],
      entrainement_tempsSeconde: ['', Validators.required],
      entrainement_distance: ['', Validators.required],
      semaine_id: ['', Validators.required],

    })
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //récupere l'entrainement  via l'id
    this.entrainementService.editEntrainement(id).subscribe(
      data => {
        console.log(data);
        //complete le form avec l'entrainement récupéré
        this.editForm.setValue(data);

      }
    )
  }
  update(){
    if(this.editForm.valid) {

      this.entrainementService.updateEntrainement(this.editForm.value).subscribe(
        () =>{
          this.router.navigate(['/planning'])
        }
      )
    }
  }

}
