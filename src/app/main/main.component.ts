import {Component, OnInit, DoCheck} from '@angular/core';
import {TokenStorageService} from '../_service/token-storage.service';
import {ShareService} from '../_service/share.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, DoCheck {
  nameBlock;
  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService) { }

  ngOnInit(): void {
    if (!this.tokenStorageService.getToken()) {
      window.location.replace('/#/login');
    }
  }
  ngDoCheck(): void {
    this.nameBlock = this.shareService.getPage();
  }
  nameThis(nameBlock: any): void{
    this.nameBlock = nameBlock;
  }
}
