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
  taskHead: string;
  taskDescription: string;
  dateStart: string;
  dateEnd: string;
  taskGetEmployeeId: number[];
  workVariant: string;
}
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.less']
})
export class CreateTaskComponent implements OnInit {
  errorMessage = '';
  task: TaskData;
  isCreateTask: boolean;
  taskForm: FormGroup;
  works: Work[] = [
    {value: 'DEVELOP', viewValue: 'Разработка'},
    {value: 'DESIGN', viewValue: 'Дизайн'},
    {value: 'BUSINESS', viewValue: 'Бизнес аналитика'},
    {value: 'TESTING', viewValue: 'Тестирование'},
  ];
  dateStart: string;
  nowDate = new Date();
  contactArray: DialogData[];
  isDisabled: boolean;
  currentDate: string;
  employeeId: number[];
  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private taskService: TaskService,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private dialog: MatDialog,
              private router: Router) {
    this.task = {
      taskHead: '',
      taskDescription: '',
      dateStart: '',
      dateEnd: '',
      taskGetEmployeeId: [],
      workVariant: ''
    };
    this.isCreateTask = true;
    this.employeeId = [];
  }
  ngOnInit(): void {
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
        this.employeeId = [];
        for (const contactId of  result) {
          this.employeeId.push(contactId.userId);
        }
      }
    });
  }

  createTask(): void {
    this.task.taskGetEmployeeId = this.employeeId;
    this.taskService.saveTask(this.task).subscribe(
      data => {
        this.isCreateTask = true;
        console.log(data);
        this.router.navigate(['/task']).then();
      },
      error => {
        this.isCreateTask = false;
      }
    );
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
