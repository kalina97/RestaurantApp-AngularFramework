import { Component, OnInit } from '@angular/core';
import { DrinkService } from './../services/drink.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

 
  constructor(private service:DrinkService) { }

  drink;
  ngOnInit() {
    this.service.getDrink().subscribe(
      Response => {
        this.drink = Response;
      },
      error => {
        console.log(error);
      }
    );

  }
}
