import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsertIntoFileService {

  constructor(private service : HttpClient) { }

  save(name:string, email:string, date:string,time:string,guests:string){

    //console.log(naziv);
    //console.log(opis);
    //console.log(trailer);
    var data = {
      "name" : name,
      "email" : email,
      "date" : date,
      "time":time,
      "guests":guests
    }
    this.service.get("http://localhost/ng-serverSide/insertReservationIntoFile.php?name="+name+"&email="+email+"&date="+date+"&time="+time+"&guestsNumber="+guests).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    )
  }
}
