import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: any;
  constructor(public service: TodoService) {
  }
  ngOnInit() {
    this.service.getToDo()
      .subscribe(response => {
        console.log(response);
        this.todos = response;
      }, error => console.log(error));
  }

}