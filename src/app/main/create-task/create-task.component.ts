import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service';
import { TokenStorageService } from '../../_service/token-storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {DialogContactComponent} from '../dialog-contact/dialog-contact.component';
import {Router} from '@angular/router';
import {TaskService} from '../../_service/task.service';

interface Work {
  value: string;
  viewValue: string;
}
interface DialogData {
  id: number;
  firstName: string;
  lastName: string;
}
interface TaskData {
  textHeader: string;
  textBody: string;
  dateStart: string;
  dateEnd: string;
  useIdList: number[];
  workVariant: string;
}
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.less']
})
export class CreateTaskComponent implements OnInit {
  errorMessage = '';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  task: TaskData;
  works: Work[] = [
    {value: 'DEVELOPE', viewValue: 'Разработка'},
    {value: 'DESIGNER', viewValue: 'Дизайн'},
    {value: 'BUSINESS', viewValue: 'Бизнес аналитика'},
    {value: 'TESTING', viewValue: 'Тестирование'},
  ];
  dateStart: string;
  nowDate = new Date();
  contactArray: DialogData[];
  isDisabled: boolean;
  currentDate: string;
  dt: string;
  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private taskService: TaskService,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private dialog: MatDialog,
              private router: Router) {
    this.task = {
      textHeader: '',
      textBody: '',
      dateStart: '',
      dateEnd: '',
      useIdList: [],
      workVariant: ''
    };
  }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.currentDate = this.datePipe.transform(this.nowDate, 'yyy-MM-dd');
    this.task.dateStart = this.currentDate;
    this.task.dateEnd = this.currentDate;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContactComponent, {
      width: '400px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.length !== 0) {
        this.contactArray = result;
        this.task.useIdList = [];
        console.log(result);
        for (const contactId of  result) {
          this.task.useIdList.push(contactId.userId);
        }
      }
    });
  }

  createTask(): void {
    console.log(this.task);
    this.taskService.saveTask(this.task);
    // this.router.navigate(['/task']).then();
  }

  returnTask(): void {
    this.router.navigate(['/task']).then();
  }

  disable(): void {
    this.isDisabled = !this.isDisabled;
    if (!this.isDisabled) {
      this.task.dateStart = this.currentDate;
    }
  }

  setMinDate(): void {
    this.task.dateEnd = this.task.dateStart;
  }
}
