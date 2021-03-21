import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../_service/token-storage.service';
import {TaskService} from '../../_service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  private dataSource: any[];
  constructor(private taskService: TaskService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()){
      this.taskService.getSendTasks().subscribe(
        data => {
          this.getTaskList(data);
        }
      );
    }
  }
  getTaskList(data: any[]): any {
    this.dataSource = data;
    console.log(data);
  }
  getId(id): void {
    console.log(id);
  }
}
