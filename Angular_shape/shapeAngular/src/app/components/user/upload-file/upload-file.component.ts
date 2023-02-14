import { Gallerie } from './../../../models/gallerie/gallerie';
import { GallerieService } from './../../../services/gallerie/gallerie.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploadServiceService } from './../../../services/fileUploadService/file-upload-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit{

  file!: File ; // valeur defini qui ne peut pas etre nul

  fileDetails!: any;
  fileUris: Array<string> = []; // stock les urls des images
  declare form : FormGroup;
  declare gallerie : any [];

  constructor(
    private fileUploadService: FileUploadServiceService,
    private router: Router,
    private formBuilder : FormBuilder,
    private gallerieService : GallerieService
    ) {

    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gallerie_id:  ['', Validators.required],
	    galleriefilename:  ['', Validators.required],
      gallerie_date:[new Date(), Validators.required],
	    utilisateur_id :  ['1', Validators.required],

    })
    this.getGalleries();

  }

  selectFile(event: any) {
    this.file = event.target.files.item(0);
  }

  uploadFile() {
    this.form.value.galleriefilename =  this.file.name
    this.fileUploadService.upload(this.form.value).subscribe({
      next: (data) => {
        console.log("Data : "+data);
        console.log("File : "+this.file);


      },
      error: (e) => {
        console.log(e);
      }
    });
    this.fileUploadService.upload2(this.file).subscribe({
      next: (data) => {
        this.fileDetails = data;
        this.fileUris.push(this.fileDetails.fileUri);
        alert("File Uploaded Successfully")
        location.reload();
      },
      error: (e) => {
        console.log(e);
      }
    })

  }
  getGalleries() {
    return this.gallerieService.findAllGalleries().subscribe(
      (data=>{

        this.gallerie = data as any [];



      }
        )

    )
  }

}
