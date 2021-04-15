import { Component, OnInit } from '@angular/core';
import {ShareService} from '../../_service/share.service';
import {UserService} from '../../_service/user.service';
import {Router} from '@angular/router';
interface ContactData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  work: string;
}
@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.less']
})
export class ContactProfileComponent implements OnInit {
  contactData: ContactData;
  contactId: number;
  constructor(private shareService: ShareService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.shareService.getId() !== -1){
      this.contactId = this.shareService.getId();
      sessionStorage.setItem('contactId', String(this.contactId));
    } else {
      this.contactId = +sessionStorage.getItem('contactId');
    }
    this.userService.getProfileContact(this.contactId)
      .subscribe(
        data => {
          this.getUserData(data);
        }
      );
  }
  returnContact(): void {
    this.router.navigate(['/contacts']);
  }

  private getUserData(data: any): void {
    this.contactData = data;
    console.log(data);
    this.contactData.work = 'Разработчик';
  }
}
