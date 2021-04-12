import { Component, OnInit } from '@angular/core';
import {ShareService} from '../../_service/share.service';
import {UserService} from '../../_service/user.service';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.less']
})
export class ContactProfileComponent implements OnInit {
  contactUser: any;
  idUser = -1;
  constructor(private shareService: ShareService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.contactUser = this.userService.getProfileContact(this.shareService.getId()).subscribe(
      data => {
        this.setContactProfile(data);
      }
    );
  }
  setContactProfile(profileData): void{
    this.contactUser = profileData;
  }
}
