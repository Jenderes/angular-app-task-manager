import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  nameblock = "ЗАДАЧИ";
  constructor() { }

  ngOnInit(): void {
  }

  nameThis(nameblock: any){
    this.nameblock = nameblock;
  }
}
