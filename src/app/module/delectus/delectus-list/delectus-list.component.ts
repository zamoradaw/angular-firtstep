import { Component, OnInit } from '@angular/core';
import { Todos } from '@data/interfaces/api/todos';
import { JsonPlaceHolderService } from '@data/services/json-place-holder.service';

@Component({
  selector: 'app-delectus-list',
  templateUrl: './delectus-list.component.html',
  styleUrls: ['./delectus-list.component.css']
})
export class DelectusListComponent implements OnInit {
  public todos: Array<Todos>;

  constructor(
    private jph: JsonPlaceHolderService
  ) { }

  ngOnInit(): void {
    this.paginationTodos(0,10);
  }

  paginationTodos(start: number, end: number): void{
    this.jph.getTodosAll().subscribe(value => this.todos = value.slice(start, end));
  }

}
