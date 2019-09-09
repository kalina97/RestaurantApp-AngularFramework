
import { Component, OnInit } from '@angular/core';
import { NavigationService } from './../services/navigation.service';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class NavigacijaComponent implements OnInit {

  constructor(private service:NavigationService) { }

  nav;
  ngOnInit() {
    this.service.getNav().subscribe(
      Response => {
        this.nav = Response;
      },
      error => {
        console.log(error);
      }
    );

  }

}
