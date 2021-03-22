import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {match} from '../validators/match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage = '';

  isRegister = false;
  isRegisterFailed = false;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      username: new FormControl('', []),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      middleName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordsForm: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.min(8)]),
        passwordConfirm: new FormControl('', [Validators.required]),
      }, match('password', 'passwordConfirm'))
    });
  }

  ngOnInit(): void {
  }
  register(): any {
    this.authService.register(this.registerForm).subscribe(
      registerData => {
        this.isRegisterFailed = false;
        this.isRegister = true;
        this.router.navigate(['/login']);
    }, err => {
        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
      }
    );
  }
}
