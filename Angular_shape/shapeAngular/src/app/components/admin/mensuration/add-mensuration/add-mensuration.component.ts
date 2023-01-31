import { Router } from '@angular/router';
import { MensurationService } from './../../../../services/mensuration/mensuration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-mensuration',
  templateUrl: './add-mensuration.component.html',
  styleUrls: ['./add-mensuration.component.css']
})
export class AddMensurationComponent implements OnInit {

  declare form : FormGroup;

  constructor(
    private mensurationService: MensurationService,
    private router : Router,
    private formBuilder: FormBuilder,
  ){

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({

      mensuration_id: ['', Validators.required],
	    mensuration_date: ['', Validators.required],
	    mensuration_valeur: ['', Validators.required],
	    muscle_id: ['', Validators.required],

    })
  }
  create(){
    console.log(this.form.value);

    this.mensurationService.saveMensuration(this.form.value).subscribe(

      ()=> {
        this.router.navigate(['/mensuration'])
      }
    )



  }


}
