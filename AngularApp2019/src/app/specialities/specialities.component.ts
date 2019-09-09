import { Component, OnInit } from '@angular/core';
import { SpecialitiesService } from './../services/specialities.service';
import { slideLeft } from '../sharing/animations/slideLeft';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css'],
  animations:[
    slideLeft
  ]
})
export class SpecialitiesComponent implements OnInit {

  constructor(private service:SpecialitiesService) { }

  specialities;
  ngOnInit() {
    this.service.getSpec().subscribe(
      Response => {
        this.specialities = Response;
      },
      error => {
        console.log(error);
      }
    );

  }

}
