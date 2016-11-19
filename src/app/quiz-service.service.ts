import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class QuizServiceService {
  questions : any = [];
  constructor(private http : Http) {
    this.getJsonData().then( data => console.log(this.questions) );
  }

  getCategories() : Promise<any> {
    return new Promise( (resolve, reject) =>  {
      if(this.questions.length > 0) {
        resolve(this.frameCategories());
      } else {
        this.getJsonData().then( data => { resolve(this.frameCategories()); } );
      }
    });
  }

  frameCategories() {
    let categoryList: any = [];
    for(let i of this.questions) {
      categoryList.push(i.category_name);
    }
    return categoryList;
  }

  getJsonData() : Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('/app/quiz.json')
        .map(response => response.json())
        .subscribe( data => { this.questions = data; resolve(); } );
    });
  }

  getQuestions(category_name : string) : Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.questions.length > 0) {
        resolve(this.randomizedQuestions(category_name));
      } else {
        this.getJsonData().then(data => resolve(this.randomizedQuestions(category_name)));
      }
    });
  }
  randomizedQuestions (category_name) {
    for(let i of this.questions) {
      if(i.category_name == category_name) {
        return i.questions;
      }
    }

  }

}
