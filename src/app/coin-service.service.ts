import { Injectable } from '@angular/core';
import {Coins} from "./coins";

@Injectable()
export class CoinServiceService {
  public coin : Coins = new Coins(5);
  constructor() { }

  addCoinCount(value: number) {
     this.coin.coinCount += value;
  }

  decreaseCoinCount(value: number) {
    if(this.coin.coinCount >= value) {
      this.coin.coinCount -= value;
      return true;
    } else {
      return false;
    }
  }


}
