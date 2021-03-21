import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_service/token-storage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    console.log(this.currentUser);
  }
}
