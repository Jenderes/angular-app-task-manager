import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../_service/token-storage.service';
import {ShareService} from '../_service/share.service';
interface UserData {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  token: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  nameBlock;
  userEmail: string;
  userFullName: string;
  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService) { }

  ngOnInit(): void {
    if (!this.tokenStorageService.getToken()) {
      window.location.replace('/#/login');
    }
    const userData: UserData = this.tokenStorageService.getUser();
    this.userEmail = userData.email;
    this.userFullName = userData.firstname + ' ' + userData.lastname;
  }
  nameThis(nameBlock: any): void{
    this.nameBlock = nameBlock;
  }
}
