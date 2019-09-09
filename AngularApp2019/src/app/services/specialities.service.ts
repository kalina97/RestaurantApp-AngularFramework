import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialitiesService {
  constructor(private service:HttpClient) { }

  getSpec(){
    var spec=this.service.get("http://localhost:4200/assets/data/specialities.json");
    return spec;
  }
}
