import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MensurationService } from './../../../../services/mensuration/mensuration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-mensuration-data',
  templateUrl: './add-mensuration-data.component.html',
  styleUrls: ['./add-mensuration-data.component.css']
})
export class AddMensurationDataComponent implements OnInit{

  declare form : FormGroup;

  constructor(
    private mensurationService: MensurationService,
    private router : Router,
    private formBuilder: FormBuilder,
  ){

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({

      id: ['', Validators.required],
	    date: ['', Validators.required],
	    valeur: ['', Validators.required],
	    muscle_id: ['', Validators.required],

    })
  }
  create(){
    console.log(this.form.value);

    this.mensurationService.saveMensuration(this.form.value).subscribe(

      ()=> {
        this.router.navigate(['/mensurationData'])
      }
    )



  }


}
