import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { StaffComponent } from './staff/staff.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { DessertComponent } from './dessert/dessert.component';
import { DrinkComponent } from './drink/drink.component';
import { NewsComponent } from './news/news.component';
import { SingleNewComponent } from './single-new/single-new.component';
import { CommentComponent } from './comment/comment.component';
import { ShowCommentComponent } from './show-comment/show-comment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigacijaComponent,
    HomeComponent,
    AuthorComponent,
    StaffComponent,
    ReservationComponent,
    SpecialitiesComponent,
    BreakfastComponent,
    DessertComponent,
    DrinkComponent,
    NewsComponent,
    SingleNewComponent,
    CommentComponent,
    ShowCommentComponent,
    PageNotFoundComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path : "",
        component : HomeComponent
      },
      {
        path : "author",
        component : AuthorComponent
      },
      {
        path : "staff",
        component : StaffComponent
      },
      {
        path : "reservation",
        component : ReservationComponent
      },
      {
        path : "specialities",
        component : SpecialitiesComponent
      },
      {
        path : "breakfast",
        component : BreakfastComponent
      },
      {
        path : "dessert",
        component : DessertComponent
      },
      {
        path : "drink",
        component : DrinkComponent
      },
      {
        path : "blog",
        component : NewsComponent
      },
      {
        path : "blog/:id",
        component : SingleNewComponent
      },
      {
        path: "**",
        component: PageNotFoundComponent
      }
    ])
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent,NavigacijaComponent]
})
export class AppModule { }
