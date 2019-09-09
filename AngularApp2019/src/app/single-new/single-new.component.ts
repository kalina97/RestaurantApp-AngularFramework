import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { NewsService } from '../services/news.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-new',
  templateUrl: './single-new.component.html',
  styleUrls: ['./single-new.component.css']
})
export class SingleNewComponent implements OnInit {
  vest;
  id;
  constructor(private service: NewsService, private http: HttpClient,
    private router : Router,
    private route : ActivatedRoute
    )  
    { 
      this.route.params.subscribe((params : Params)=>{
        this.id = params["id"];
      })
    }
 
    //probanje
    comments = [];
  
    @Input() comment: {name: string};

    onAddComment(newComment: {name: string}) {
      this.comments.push(newComment);
    }

  ngOnInit() {
    this.service.getNews().subscribe(
      Response => {
        this.vest=Response[this.id-1]
        console.log(this.vest)
      },
      error => {
        console.log(error);
      }
    );
  }

}
