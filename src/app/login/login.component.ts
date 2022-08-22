import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = null;
  token: number;
  isValid = true;
  userName: string;
  password: string;
  message: string;
  error: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    this.token = null;
    this.isValid = true;
    this.error = false;
  }
  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value.userName);
      this.authService.username = this.loginForm.value.userName;
      this.authService.password = this.loginForm.value.password;
      console.log(this.authService.username);
      let response = this.authService.loginSecurity(
        this.loginForm.value.userName,
        this.loginForm.value.password
      );

      response.subscribe(
        (data) => {
          this.router.navigate(['list']);
          console.log(data);

          localStorage.setItem('token', 'abcd123');
        },
        (error) => {
          this.error = true;
          this.loginForm.reset();
          console.log('username mile na');
        }
      );
    } else {
      this.isValid = false;
    }
  }

  // onLogin() {
  //   let resp = this.authService.loginSecurity(this.userName, this.password);
  //   resp.subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
