import { Component, OnInit } from '@angular/core';
import { DessertService } from '../services/dessert.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  constructor(private service:DessertService) { }

  dessert;
  ngOnInit() {
    this.service.getDessert().subscribe(
      Response => {
        this.dessert = Response;
      },
      error => {
        console.log(error);
      }
    );

  }
}
