import { Router } from '@angular/router';
import { EntrainementService } from './../../../../services/entrainement/entrainement.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.css']
})
export class AddPlanningComponent implements OnInit {

  declare form : FormGroup;

  constructor(
    private entrainementService: EntrainementService,
    private router : Router,
    private formBuilder: FormBuilder,
  ){

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
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
  }
  create(){
    console.log(this.form.value);

    this.entrainementService.saveEntrainement(this.form.value).subscribe(

      ()=> {
        this.router.navigate(['/planning'])
      }
    )



  }

}
