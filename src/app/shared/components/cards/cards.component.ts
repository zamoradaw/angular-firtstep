import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '@data/interfaces/api/todos';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() todo: Todos;

  constructor() { }

  ngOnInit(): void {
  }

  encriptId(id: number): string{
    return btoa(id.toString());
  }

}
