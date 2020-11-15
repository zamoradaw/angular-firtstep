import { Component, OnInit } from '@angular/core';
import { URL_POKEMON1, URL_POKEMON2, URL_POKEMON3, URL_POKEMON4 } from '@data/constants/url-image';
import { Pokemon } from '@data/interfaces/ui/pokemon';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private currentPosition: number = 0;
  public items: Array<Pokemon> = [];

  constructor() { }

  savePokemon():void{
    this.items.push({id: 0, url: URL_POKEMON1, marginLeft: 0})
    this.items.push({id: 1, url: URL_POKEMON2})
    this.items.push({id: 2, url: URL_POKEMON3})
    this.items.push({id: 3, url: URL_POKEMON4})
  }

  ngOnInit(): void {
    this.savePokemon();
  }

  setNext(): void{
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;

    if(nextPosition <= this.items.length - 1){
      finalPercentage = -100 * nextPosition;
    }else{
      nextPosition = 0;
    }

    this.changePosition(finalPercentage, nextPosition);
  }

  setBack(): void{
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;

    if(backPosition >= 0){
      finalPercentage = -100 * backPosition;
    }else{
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }

    this.changePosition(finalPercentage, backPosition);
  }

  changePosition(finalPercentage: number, position: number){
    this.items.find(value => value.id === 0).marginLeft = finalPercentage;
    this.currentPosition = position;
  }
}
