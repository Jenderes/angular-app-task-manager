import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../_service/token-storage.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  nowDate = new Date();
  dateString: any;
  constructor(private tokenStorageService: TokenStorageService, private datePipe: DatePipe) {
    this.dateString = this.datePipe.transform(this.nowDate, 'dd.MM.yyy');
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }
  signOut(): void {
    this.isLoggedIn = false;
    this.tokenStorageService.signOut();
  }
}
