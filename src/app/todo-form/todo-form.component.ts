import { Component, OnInit } from '@angular/core';
import { toDo } from '../to-do/toDo';
import { GetTodosService } from '../services/get-todos.service';


let timer;

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  
  title: string = '';
  description: string = ''
  limit : Date;

  constructor(private service: GetTodosService) { }

  ngOnInit() {
  }

  addTodo(){
    let todo : toDo = {
      title: this.title,
      description: this.description,
      limit: this.limit,
      isDone: false,
      index: 0
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      this.service.addTodo(todo).subscribe(todo => console.log(todo));
      window.location.reload();
    }, 500);
  }

}
