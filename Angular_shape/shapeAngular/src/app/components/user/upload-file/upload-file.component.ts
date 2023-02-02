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

  file!: File;
  fileDetails!: any;
  fileUris: Array<string> = [];
  declare form : FormGroup;

  constructor(
    private fileUploadService: FileUploadServiceService,
    private router: Router,
    private formBuilder : FormBuilder
    ) {

    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gallerie_id:  ['', Validators.required],
	    gallerie_filename:  ['', Validators.required],
	    data :  [[], Validators.required],
	    gallerie_date:  ['2023-02-02', Validators.required],
	    utilisateur_id :  ['1', Validators.required],

    })

  }

  selectFile(event: any) {
    this.file = event.target.files.item(0);
  }

  uploadFile() {
    this.form.value.gallerie_filename =  this.file.name
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
      },
      error: (e) => {
        console.log(e);
      }
    })

    this.fileUploadService






  }



}
