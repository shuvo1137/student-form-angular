import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { List } from '../list/list.model';
import { ServiceService } from '../service.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  studentForm: FormGroup = null;
  isSubmitted = false;
  errorMsg: string;

  constructor(private service: ServiceService, private auth: AuthService) {}

  ngOnInit() {
    this.studentForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null, Validators.required),
    });
    this.isSubmitted = false;
    this.errorMsg = null;
  }

  onSubmit() {
    console.log(this.studentForm);
    const newList = new List(
      this.studentForm.value['firstName'],
      this.studentForm.value['lastName'],
      this.studentForm.value['address'],
      this.studentForm.value['email'],
      this.studentForm.value['age']
    );
    this.auth.addList(newList).subscribe(
      (res) => {
        console.log(res);

        this.isSubmitted = !this.isSubmitted;
        this.studentForm.reset();
      },
      (error) => {
        this.errorMsg = error.error.message;
        console.log(error.error.message);
      }
    );

    // (error) => {
    //   console.log('ERROR');
    // }
  }
}
