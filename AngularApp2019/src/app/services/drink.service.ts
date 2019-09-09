import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {


  constructor(private service:HttpClient) { }

  getDrink(){
    var drink=this.service.get("http://localhost:4200/assets/data/drink.json");
    return drink;
  }
}
