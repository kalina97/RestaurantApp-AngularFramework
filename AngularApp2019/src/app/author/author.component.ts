import { Component, OnInit } from '@angular/core';
import { scale } from '../sharing/animations/scale';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  animations:[
    scale
  ]
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
