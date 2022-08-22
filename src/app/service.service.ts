import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './list/list.model';
import { AuthService } from './shared/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService implements OnInit {
  studentSelected = new EventEmitter<List>();
  // private lists: List[] = [
  //   new List('zahid', 'shuvo', 'kuddusBAri-1120', 'shuvo2220@gmail.com', 26),
  //   new List('robin', 'khan', 'kuddusBAri-1122', 'sdddd@gmail.com', 25),
  //   new List('kobir', 'lol', 'kuddusBAri-1124', 'acd@gmail.com', 24),
  // ];
  lists: any;
  httpObserve: any;
  httpData: Observable<List>;

  // getLists() {
  //   console.log(this.lists);
  //    this.http
  //     .get('http://localhost:8080/info')
  //     .subscribe((data) => {
  //       console.log(data);
  //       this.lists.push(data);
  //     });
  //   return this.lists;
  // return this.lists.slice();
  // }
  getLists() {
    let lists = this.auth.getUsers();
    lists.subscribe((data) => {
      console.log(data);
    });

    // return this.lists.slice();
  }
  // getLists() {
  //   console.log(this.httpData);
  //   return this.httpData;
  //   // return this.lists.slice();
  // }
  // getList() {
  //   // console.log(this.lists[id]);
  //   return this.http.get('http://localhost:8080/info');
  // }
  // getList(id) {
  //   // console.log(this.httpData[id]);
  //   this.httpObserve.subscribe((res) => {
  //     console.log(res[id]);
  //     let student = res;
  //     return student[id];
  //   });
  // }
  getList(id) {
    // console.log(this.httpData[id]);
    return this.http.get('http://localhost:8080/info');
  }

  addList(list: List) {
    // this.httpData.push(list);
    return this.http.post('http://localhost:8080/info', list);
    // console.log(this.lists);
  }
  // addList(list: List) {
  //   this.lists.push(list);
  //   // console.log(this.lists);
  // }

  constructor(private http: HttpClient, private auth: AuthService) {}
  // httpGet() {
  //   this.http.get('http://localhost:8080/info').subscribe((res) => {
  //     console.log(res);
  //     this.lists = res;
  //     return this.lists;
  //   });
  // }
  httpGet() {
    console.log(this.httpData);
    return this.http.get('http://localhost:8080/info');
  }
  ngOnInit() {
    this.httpObserve = this.http.get('http://localhost:8080/info');
    this.httpObserve.subscribe((res) => {
      this.httpData = res;
      console.log(this.httpData);
      this.getLists();
    });
  }
}
