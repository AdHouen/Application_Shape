import { Router, ActivatedRoute } from '@angular/router';
import { EntrainementService } from './../../../../services/entrainement/entrainement.service';
import { Entrainement } from './../../../../models/entrainement/entrainement';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-entrainement',
  templateUrl: './edit-entrainement.component.html',
  styleUrls: ['./edit-entrainement.component.css']
})
export class EditEntrainementComponent implements OnInit{

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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //récupere le produit via l'id
    this.entrainementService.editEntrainement(id).subscribe(
      data => {
        console.log(data);
        //complete le form avec le produit récupéré
        this.editForm.setValue(data);

      }
    )
  }
  update(){

    if(this.editForm.valid) {

      this.entrainementService.updateEntrainement(this.editForm.value).subscribe(
        () =>{
          this.router.navigate(['/entrainement'])
        }
      )
    }
  }


}
