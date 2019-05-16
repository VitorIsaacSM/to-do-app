import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toDo } from '../to-do/toDo';

@Injectable({
  providedIn: 'root'
})
export class GetTodosService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<toDo[]>{
    return this.http.get<toDo[]>('https://angular-todo-list-app.herokuapp.com/getTodos');
  }

  addTodo(todo: toDo): Observable<toDo>{
    return this.http.post<toDo>('https://angular-todo-list-app.herokuapp.com/addTodo', todo);
  }

  refreshTodos(todos: toDo[]){
    return this.http.post<toDo[]>('https://angular-todo-list-app.herokuapp.com/refresh', todos);
  }

}
