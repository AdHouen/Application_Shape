import { Router, ActivatedRoute } from '@angular/router';
import { MensurationService } from './../../../../services/mensuration/mensuration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-mensuration',
  templateUrl: './list-mensuration.component.html',
  styleUrls: ['./list-mensuration.component.css']
})
export class ListMensurationComponent implements OnInit{

  declare mensurations : any;

  constructor(
    private mensurationService : MensurationService,
    private router : Router,
    private route : ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.mensurationService.findAllMensurations().subscribe(
      data => {
        console.log(data);
        this.mensurations = data;

      }
    );
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.remove();
      this.router.navigate(['/mensuration'])
    }
  }
  remove() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mensurationService.deleteMensuration(id).subscribe(
      () => {


      }
    )
  }


}
