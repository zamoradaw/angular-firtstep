import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-implement-onchage',
  templateUrl: './implement-onchage.component.html',
  styleUrls: ['./implement-onchage.component.css']
})
export class ImplementOnchageComponent implements OnInit {

  protected priceDollar: number;
  viewConvert: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.viewConvert = true;
      this.priceDollar = 0;
    }, 3000);
  }

  addValue(): void{
    this.priceDollar += 10;
  }

}
