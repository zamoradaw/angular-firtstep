import { Component, OnInit, ViewChild } from '@angular/core';
import { Todos } from '@data/interfaces/api/todos';
import { JsonPlaceHolderService } from '@data/services/json-place-holder.service';
import { CardsComponent } from '@shared/components/cards/cards.component';

@Component({
  selector: 'app-delectus-list',
  templateUrl: './delectus-list.component.html',
  styleUrls: ['./delectus-list.component.css']
})
export class DelectusListComponent implements OnInit {

  public todos: Array<Todos>;
  public filterTodos: Array<Todos>;

  constructor(
    private jph: JsonPlaceHolderService
  ) { }

  ngOnInit(): void {
    this.saveTodos();
  }

  lengthTodo = () => this.todos.length;

  saveTodos = () => this.jph.getTodosAll().subscribe(value => {
                    this.todos = value
                    this.filterTodos = value.slice(0,10)});

  paginationTodos(start: number, end: number): void{
    this.filterTodos = this.todos.slice(start, end);
  }

  getElementPagination(element: number){
    this.paginationTodos(element-10, element);
  }

}
