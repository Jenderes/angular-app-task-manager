import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_service/user.service';
import {TokenStorageService} from '../../_service/token-storage.service';
import {ShareService} from '../../_service/share.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {
  dataSource: any[];
  private currentUsername;
  isContact = false;
  constructor(private userService: UserService,
              private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()){
      this.shareService.setPage('Контакты');
      this.currentUsername = this.tokenStorageService.getUser().username;
      this.userService.getContacts().subscribe(
        data => {
          this.getContactList(data);
        }
      );
    }
  }
  getContactList(data: any[]): any {
    if (data != null){
      this.isContact = true;
      this.dataSource = data;
      console.log(data);
    }
  }
  getId(id): void {
    this.shareService.setId(id);
    this.router.navigate(['/profile_contact']);
  }
}
