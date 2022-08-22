import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { AuthService } from '../shared/auth.service';
import { List } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  isCliked = false;
  // lists: List[];
  lists: any;
  list: List;
  selectedStudent: List;
  index: number;

  constructor(private service: ServiceService, private auth: AuthService) {}

  ngOnInit(): void {
    this.isCliked = false;
    // this.lists = this.service.getLists();
    this.viewhttp();
    this.service.getLists();
  }
  viewDetails(list) {
    this.isCliked = true;
    this.selectedStudent = list;
    // this.service.getList(this.selectedStudent);
    console.log(list);
  }
  // viewhttp() {
  //   this.lists = this.service.httpGet();
  //   console.log(this.lists);
  // }
  viewhttp() {
    this.auth.getUsers().subscribe((res) => {
      this.lists = res;
      console.log(this.lists);
    });
  }
}
