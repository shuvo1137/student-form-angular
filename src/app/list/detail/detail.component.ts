import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { AuthService } from 'src/app/shared/auth.service';
import { List } from '../list.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  // @Input() studentDetails: List;
  studentDetails: List;
  id: number;

  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // this.service.getList(this.id);
      this.auth.getUsers().subscribe((data) => {
        this.studentDetails = data[this.id];
      });
    });
  }
}
