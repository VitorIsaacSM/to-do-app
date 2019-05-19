import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { toDo } from '../to-do/toDo';
import { GetTodosService } from '../services/get-todos.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  todos: toDo[] = [];

  constructor(private service: GetTodosService) { }

  ngOnInit() {
    this.service.getTodos().subscribe(todos => { this.todos = todos});
    console.log(this.todos);
  }

  
  updateList(param : string){
    if(param == 'update') {
      console.log('refreshed');
      this.service.refreshTodos(this.todos).subscribe( (todos) => {
        this.todos = todos;
      });
    }
    else {
      this.service.eraseAllTodos().subscribe(() => {
        this.todos = [];
      });
    }
    window.scrollTo(0,0);
  }

  addTodo(todo: toDo){
    console.log(todo);
    this.service.addTodo(todo).subscribe( (todos) => {
      this.todos = todos;
    })
  }

  checkBox(todo: toDo){
    setTimeout(() => {
      this.todos[todo.index - 1] = todo;
      console.log(this.todos);
    }, 100);
  }

}
