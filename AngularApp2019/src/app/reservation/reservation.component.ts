import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InsertIntoFileService } from '../services/insert-into-file.service';
import { scale } from '../sharing/animations/scale';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  animations:[
    scale
  ]
})
export class ReservationComponent implements OnInit {

  constructor(private service:InsertIntoFileService) { }

  fileGroup:FormGroup;

  @ViewChild('name') name:ElementRef;
  @ViewChild('email') email:ElementRef;
  @ViewChild('date') date:ElementRef;
  @ViewChild('time') time:ElementRef;
  @ViewChild('guests') guests:ElementRef;


  State="";

  ngOnInit() {
    this.fileGroup = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      name:new FormControl('',[Validators.required,Validators.pattern('^[A-Z][a-z]{2,20}$')]),
      dates:new FormControl('',Validators.required),
      times:new FormControl('',Validators.required),
      guests:new FormControl('',Validators.required),
    })

  }

  onSubmit(){
    this.State="Successful Reservation!";
    this.service.save(this.name.nativeElement.value,this.email.nativeElement.value,this.date.nativeElement.value,this.time.nativeElement.value,this.guests.nativeElement.value);
  }

}
