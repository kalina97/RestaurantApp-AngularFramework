import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  constructor(private service:HttpClient) { }

  getDessert(){
    var dessert=this.service.get("http://localhost:4200/assets/data/dessert.json");
    return dessert;
  }
}
