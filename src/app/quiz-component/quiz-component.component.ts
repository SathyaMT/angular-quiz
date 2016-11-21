import { Component, OnInit } from '@angular/core';
import {CoinServiceService} from "../coin-service.service";
import {Coins} from "../coins";

@Component({
  selector: 'app-quiz-component',
  templateUrl: './quiz-component.component.html',
  styleUrls: ['./quiz-component.component.css']
})
export class QuizComponentComponent implements OnInit {
  public coins : Coins;
  constructor(private coinServices : CoinServiceService) {
    this.coins = coinServices.coin;

  }

  ngOnInit() {
  }

}
