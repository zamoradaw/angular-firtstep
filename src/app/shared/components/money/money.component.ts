import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnChanges, OnInit {
  @Input() priceDollarCurrent: number;
  public pricePeso: number;
  public priceEuro: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeValueMoney(changes);
  }

  ngOnInit(): void {
    this.priceEuro = 0;
    this.pricePeso = 0;
  }

  changeValueMoney(c: SimpleChanges){
    if(c.priceDollarCurrent &&c.priceDollarCurrent.currentValue){
      this.priceDollarCurrent = c.priceDollarCurrent.currentValue;
      this.pricePeso = this.priceDollarCurrent * 20.27;
      this.priceEuro = this.priceDollarCurrent * 0.84;
    }
  }
}
