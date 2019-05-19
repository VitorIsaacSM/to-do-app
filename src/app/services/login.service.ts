import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../login/user';
import { Observable } from 'rxjs';

let url = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient ) { }

  addUser(user: User) : Observable<User> | Observable<any>{
    return this.http.post(url + '/register', user);
  }
  login(userData){
    return this.http.post(url + '/login', userData);
  }
  
  checkToken(){
    let token = window.localStorage.getItem('token');

    return this.http.post(url + '/tokenCheck', {token : token});

  }
}
