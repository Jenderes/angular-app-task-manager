import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../_service/token-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  nameBlock = 'Задачи';
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if (!this.tokenStorageService.getToken()){
      window.location.replace('/#/login');
    }
  }

  nameThis(nameBlock: any): void{
    this.nameBlock = nameBlock;
  }
}
