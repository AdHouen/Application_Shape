import { Router } from '@angular/router';
import { EntrainementService } from './../../../../services/entrainement/entrainement.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-entrainement',
  templateUrl: './add-entrainement.component.html',
  styleUrls: ['./add-entrainement.component.css']
})
export class AddEntrainementComponent implements OnInit{
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
  }
  create(){
    console.log(this.form.value);

    this.entrainementService.saveEntrainement(this.form.value).subscribe(

      ()=> {
        this.router.navigate(['/entrainement'])
      }
    )



  }

}
