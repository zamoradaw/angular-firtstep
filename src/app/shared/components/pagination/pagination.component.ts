import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() countElement: number;
  @Output() elementView = new EventEmitter<number>();

  public allTodos: number[];
  public filterTodos: number[];
  private start:number = 1;
  private end: number = 6;

  constructor() { }

  ngOnInit(): void {
    this.paginationCustom();
  }

  movePagination(action: string){
    if(action === 'plus' && this.end < 20){
      this.start++;
      this.end++;
      this.filterTodos = this.allTodos.slice(this.start, this.end);
    }else if(action === 'subtraction' && this.start > 0){
      this.start--;
      this.end--;
      this.filterTodos = this.allTodos.slice(this.start, this.end);
    }
  }

  paginationCustom(): void{
    const data: number[] = [];

    for(let i:number =1; i<=200; i++){
      if(i%10 === 0){
        data.push(i);
      }
    }

    this.allTodos = data;
    this.filterTodos = data.slice(0,5);
  }

  sendElement = (data: number) => this.elementView.emit(data);

}
