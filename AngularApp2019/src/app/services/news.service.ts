import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private service:HttpClient) { }

  getNews(){
    var news=this.service.get("http://localhost:4200/assets/data/news.json");
    return news;
  }
}
