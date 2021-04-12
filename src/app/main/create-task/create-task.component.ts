import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../_service/auth.service";
import { TokenStorageService } from "../../_service/token-storage.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Work {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.less']
})
export class CreateTaskComponent implements OnInit {
  taskForm: any ={}
  errorMessage = '';
  selectedValue: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  isEditable = true;
  isLoggedIn = false;
  isLoginFailed = false;
  isLinear = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    // }
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

    works: Work[] = [
    {value: 'DEVELOPE', viewValue: 'Разработка'},
    {value: 'DESIGNER', viewValue: 'Дизайн'},
    {value: 'BUSINESS', viewValue: 'Бизнес логика'},
    {value: 'ANALYZE', viewValue: 'Анализ'},
  ];

}
