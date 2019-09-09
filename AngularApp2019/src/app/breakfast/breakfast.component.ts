import { Component, OnInit } from '@angular/core';
import { BreakfastService } from './../services/breakfast.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  constructor(private service:BreakfastService) { }

  breakfast;
  ngOnInit() {
    this.service.getBreakfast().subscribe(
      Response => {
        this.breakfast = Response;
      },
      error => {
        console.log(error);
      }
    );

  }
}
