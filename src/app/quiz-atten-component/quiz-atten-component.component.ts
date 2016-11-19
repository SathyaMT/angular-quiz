import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {QuizServiceService} from "../quiz-service.service";
import {CoinServiceService} from "../coin-service.service";

@Component({
  selector: 'app-quiz-atten-component',
  templateUrl: './quiz-atten-component.component.html',
  styleUrls: ['./quiz-atten-component.component.css']
})
export class QuizAttenComponentComponent implements OnInit, OnDestroy {
  private subscription : Subscription;
  private categoryName : string;
  private questionList : any = [];
  private question : any = [];
  private questionIndex : number = 0;
  private questionTime : number = 20;
  private clearTime : any = false;

  constructor(private route : ActivatedRoute, private quizService : QuizServiceService, private coinService : CoinServiceService) {
    this.subscription = this.route.params.subscribe(
      (param : any) => {
        if(param.hasOwnProperty('category_name')) {
          this.categoryName = param['category_name'];
        }
      }
    );
  }

  ngOnInit() {
   this.quizService.getQuestions(this.categoryName).then(data => {
     this.questionList = data;
     if(this.questionList.length > 0) {
       this.question = this.questionList[this.questionIndex];
       this.timer();
     }
   });
  }
  nextQuestion(currentQuestionAnswer) {
    if(currentQuestionAnswer == this.question.answerIndex) {
      this.coinService.addCoinCount(5);
    }
    if(this.questionList.length > this.questionIndex +1) {
      this.question = this.questionList[++this.questionIndex];
      this.questionTime = 20;
      this.timer();
    } else {
      this.questionTime = null;
      this.question = [];
      if(this.clearTime) {
        clearInterval(this.clearTime);
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  timer() {
    if(this.clearTime) {
      clearInterval(this.clearTime);
    }
    this.clearTime = setInterval(() => {
      if (this.questionTime) {
        this.questionTime--;
      } else {
        clearInterval(this.clearTime);
      }
    }, 1000);
  }

  extraTime() {
    let result = this.coinService.decreaseCoinCount(5);
    if(result) {
      this.questionTime += 5;
    }
  }

  removeWrongOption() {
    let result = this.coinService.decreaseCoinCount(5);
    if(result) {
      for(let option in this.question.options) {
        if(option != this.question.answerIndex) {
          if(this.question.answerIndex > option) {
            this.question.answerIndex--;
          }
          this.question.options.splice(option, 1);
          return;
        }
      }
    }

  }




}
