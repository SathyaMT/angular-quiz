import { Component, OnInit } from '@angular/core';
import {Coins} from "../coins";
import {CoinServiceService} from "../coin-service.service";

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  public coins : Coins;
  constructor(private coinServices : CoinServiceService) {
    this.coins = coinServices.coin;

  }
  ngOnInit() {
  }

}
