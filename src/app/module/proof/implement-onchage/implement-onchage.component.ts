import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-implement-onchage',
  templateUrl: './implement-onchage.component.html',
  styleUrls: ['./implement-onchage.component.css']
})
export class ImplementOnchageComponent implements OnInit, AfterViewInit {

  protected priceDollar: number;
  viewConvert: boolean;

  constructor() { }

  ngOnInit(): void {
    this.priceDollar = 0;
    this.viewConvert = true;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewConvert = false
    }, 3000);
  }

  addValue(): void{
    this.priceDollar += 10;
  }

}
