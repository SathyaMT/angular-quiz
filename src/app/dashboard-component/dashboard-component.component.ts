import { Component, OnInit } from '@angular/core';
import {QuizServiceService} from "../quiz-service.service";

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  constructor(private quizService : QuizServiceService) { }

  ngOnInit() {
  }
}
