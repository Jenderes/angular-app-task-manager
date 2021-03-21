import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from './_service/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService){}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      window.location.replace('/#/task');
    } else {
      window.location.replace('/#/login');
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
