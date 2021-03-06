import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { TokenStorageService } from '../_service/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: any = {};
  errorMessage = '';

  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  // метод авторизации пользователя с занесением данных в sessionStorage
  login(): void {
    this.authService.login(this.loginForm).subscribe(
      loginData => {
        this.tokenStorage.saveToken(loginData.token);
        this.tokenStorage.saveUser(loginData);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/task']);
      },
      err => {
        this.errorMessage = 'Неправильный логин или пароль';
        this.isLoginFailed = true;
      }
    );
  }
}
