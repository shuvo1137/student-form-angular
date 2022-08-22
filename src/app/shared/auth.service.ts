import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../list/list.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: string;
  password: string;

  constructor(private http: HttpClient) {}
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  // public loginSecurity(userName: String, password: String) {
  //   const headers = new HttpHeaders({
  //     Authorization: 'Basic' + btoa(userName + ':' + password),
  //   });
  //   return this.http.get('http://localhost:8080/', {
  //     headers,
  //     responseType: 'text' as 'json',
  //   });
  // }
  public loginSecurity(userName: String, password: String) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(userName + ':' + password),
    });
    return this.http.get('http://localhost:8080/info/login', {
      headers,
      responseType: 'text' as 'json',
    });
  }

  getUsers() {
    let username = this.username;
    let password = this.password;
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.get('http://localhost:8080/info', { headers });
  }

  addList(list: List) {
    let username = this.username;
    let password = this.password;
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.post('http://localhost:8080/info', list, { headers });
    // console.log(this.lists);
  }
}
