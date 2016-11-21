import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ROUTE} from "./app.route";

import {QuizComponentComponent} from "./quiz-component/quiz-component.component";

import {DashboardComponentComponent} from "./dashboard-component/dashboard-component.component";
import {CategoryListComponentComponent} from "./category-list-component/category-list-component.component";
import {QuizAttenComponentComponent} from "./quiz-atten-component/quiz-atten-component.component";
import {QuizServiceService} from "./quiz-service.service";
import {CoinServiceService} from "./coin-service.service";
import {HeaderComponentComponent} from "./header-component/header-component.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentComponent,
    QuizComponentComponent,
    CategoryListComponentComponent,
    QuizAttenComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTE
  ],
  providers: [QuizServiceService, CoinServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
