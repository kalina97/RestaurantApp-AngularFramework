import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private service:HttpClient) { }

  getStaff(){
    var staff=this.service.get("http://localhost:4200/assets/data/staff.json");
    return staff;
  }

}
