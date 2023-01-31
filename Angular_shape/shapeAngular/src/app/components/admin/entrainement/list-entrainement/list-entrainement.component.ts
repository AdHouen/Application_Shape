import { Router, ActivatedRoute } from '@angular/router';
import { EntrainementService } from './../../../../services/entrainement/entrainement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-entrainement',
  templateUrl: './list-entrainement.component.html',
  styleUrls: ['./list-entrainement.component.css']
})
export class ListEntrainementComponent implements OnInit {

  declare entrainements : any;

  constructor(
    private entrainementService : EntrainementService,
    private router : Router,
    private route : ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.entrainementService.findAllEntrainements().subscribe(
      data => {
        console.log(data);
        this.entrainements = data;

      }
    );
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.remove();
      this.router.navigate(['/entrainement'])
    }
  }
  remove() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.entrainementService.deleteEntrainement(id).subscribe(
      () => {


      }
    )
  }


}
