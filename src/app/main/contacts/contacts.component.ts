import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_service/user.service';
import {TokenStorageService} from '../../_service/token-storage.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {
  dataSource: any[];
  private currentUsername;
  isContact = false;
  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()){
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
    console.log(id);
  }
}
