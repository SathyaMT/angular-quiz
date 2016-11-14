import { Component, OnInit } from '@angular/core';
import {QuizServiceService} from "../quiz-service.service";

@Component({
  selector: 'app-category-list-component',
  templateUrl: './category-list-component.component.html',
  styleUrls: ['./category-list-component.component.css']
})
export class CategoryListComponentComponent implements OnInit {
  categoryList : any = [];
  constructor(private quizService : QuizServiceService) { }

  ngOnInit() {
     this.quizService.getCategories().then( data => this.categoryList = data );
  }

}
