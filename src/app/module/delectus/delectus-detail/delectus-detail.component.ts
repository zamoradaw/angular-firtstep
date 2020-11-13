import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todos } from '@data/interfaces/api/todos';
import { JsonPlaceHolderService } from '@data/services/json-place-holder.service';

@Component({
  selector: 'app-delectus-detail',
  templateUrl: './delectus-detail.component.html',
  styleUrls: ['./delectus-detail.component.css']
})
export class DelectusDetailComponent implements OnInit {
  public dataTodo: Todos;

  constructor(
    private jph: JsonPlaceHolderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.desencripId(this.route.snapshot.params.id);
  }

  desencripId(id: string): void{
    const idTodo = atob(id);
    this.jph.getTodosById(idTodo).subscribe(value => this.dataTodo = value);
  }

}
