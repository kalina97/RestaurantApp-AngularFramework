import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreakfastService {

  constructor(private service:HttpClient) { }

  getBreakfast(){
    var dish=this.service.get("http://localhost:4200/assets/data/breakfast.json");
    return dish;
  }
}
