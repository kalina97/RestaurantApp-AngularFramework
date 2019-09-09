import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit {

  @Input() comment: {name: string};
  constructor() { }

  ngOnInit() {
  }

}
