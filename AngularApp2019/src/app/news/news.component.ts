import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private service:NewsService) { }

  news;
  ngOnInit() {
    this.service.getNews().subscribe(
      Response => {
        this.news = Response;
      },
      error => {
        console.log(error);
      }
    );

  }
}
