import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TokenStorageService} from '../../_service/token-storage.service';
import {TaskService} from '../../_service/task.service';
import {ShareService} from '../../_service/share.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  dataSource: any[];

  constructor(private taskService: TaskService, private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private  router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()){
      this.shareService.setPage('Задачи');
      this.taskService.getSendTasks().subscribe(
        data => {
          this.getTaskList(data);
        }
      );
    }
  }
  getTaskList(data: any[]): any {
    this.dataSource = data;
  }
  getId(id): void {
    console.log(id);
  }

  createTask(): void {
    this.router.navigate(['/create_task']).then();
  }
}
