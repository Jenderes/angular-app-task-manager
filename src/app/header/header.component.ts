import { Component, OnInit, DoCheck } from '@angular/core';
import {TokenStorageService} from '../_service/token-storage.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, DoCheck {
  isLoggedIn = false;
  nowDate = new Date();
  dateString: any;
  constructor(private tokenStorageService: TokenStorageService, private datePipe: DatePipe) {
    this.dateString = this.datePipe.transform(this.nowDate, 'dd.MM.yyy');
  }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }
  signOut(): void {
    this.isLoggedIn = false;
    this.tokenStorageService.signOut();
  }
}
