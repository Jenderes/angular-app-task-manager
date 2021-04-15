import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service';
import { TokenStorageService } from '../../_service/token-storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';
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
  taskForm: any = {};
  errorMessage = '';
  selectedValue: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  works: Work[] = [
    {value: 'DEVELOPE', viewValue: 'Разработка'},
    {value: 'DESIGNER', viewValue: 'Дизайн'},
    {value: 'BUSINESS', viewValue: 'Бизнес аналитика'},
    {value: 'TESTING', viewValue: 'Тестирование'},
  ];
  dateStart: string;
  nowDate = new Date();
  isEditable = true;
  isLoggedIn = false;
  isLoginFailed = false;
  isLinear = false;
  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.dateStart = this.datePipe.transform(this.nowDate, 'yyy-MM-dd');
  }

}
