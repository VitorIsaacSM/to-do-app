import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toDo } from '../to-do/toDo';

let URL = 'https://angular-todo-list-app.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class GetTodosService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<toDo[]>{
    return this.http.get<toDo[]>( URL + '/getTodos');
  }

  addTodo(todo: toDo): Observable<toDo>{
    return this.http.post<toDo>( URL + '/addTodo', todo);
  }

  refreshTodos(todos: toDo[]){
    return this.http.post<toDo[]>( URL + '/refresh', todos);
  }

  eraseAllTodos(){
    let todos : toDo[] = []
    return this.http.post<toDo[]>( URL + '/erase', todos);
  }

}
