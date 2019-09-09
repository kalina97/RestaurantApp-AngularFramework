import { Component, OnInit } from '@angular/core';
import { StaffService } from './../services/staff.service';
import { hover } from '../sharing/animations/hover';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
  animations:[
    hover
  ]
})
export class StaffComponent implements OnInit {

  constructor(private service:StaffService) { }

  staff;
  ngOnInit() {
    this.service.getStaff().subscribe(
      Response => {
        this.staff = Response;
      },
      error => {
        console.log(error);
      }
    );

  }

}
