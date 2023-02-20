import { Router, ActivatedRoute } from '@angular/router';
import { MensurationService } from './../../../../services/mensuration/mensuration.service';
import { Mensuration } from './../../../../models/mensuration/mensuration';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-mensuration-data',
  templateUrl: './edit-mensuration-data.component.html',
  styleUrls: ['./edit-mensuration-data.component.css']
})
export class EditMensurationDataComponent {

  declare editForm : FormGroup;
  declare mensuration : Mensuration;

  constructor(
    private mensurationService : MensurationService,
    private router : Router,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder,

  ){

  }
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({

      id: ['', Validators.required],
	    date: ['', Validators.required],
	    valeur: ['', Validators.required],
	    muscle_id: ['', Validators.required],

    })
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //récupere le produit via l'id
    this.mensurationService.editMensuration(id).subscribe(
      data => {
        console.log(data);
        //complete le form avec le produit récupéré
        this.editForm.setValue(data);

      }
    )
  }
  update(){

    if(this.editForm.valid) {

      this.mensurationService.updateMensuration(this.editForm.value).subscribe(
        () =>{
          this.router.navigate(['/mensurationData'])
        }
      )
    }
  }


}
