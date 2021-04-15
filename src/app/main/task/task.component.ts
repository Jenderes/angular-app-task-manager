import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TokenStorageService} from '../../_service/token-storage.service';
import {TaskService} from '../../_service/task.service';
import {ShareService} from '../../_service/share.service';
import {Router} from '@angular/router';
interface TaskData {
  dateEnd: string;
  dateStart: string;
  id: number;
  taskDescription: string;
  taskFullNameSender: string;
  taskGetEmployeeId: string;
  taskHead: string;
  workVariant: string;
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  dataSource: TaskData[];
  variant: Map<string, string>;
  constructor(private taskService: TaskService, private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private  router: Router) {
    this.variant = new Map<string, string>();
    this.variant.set('BUSINESS', 'Бизнесс аналитика');
    this.variant.set('DEVELOP', 'Разработка');
    this.variant.set('DESIGN', 'Дизайн');
    this.variant.set('TESTING', 'Тестирование');
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
  getTaskList(data: TaskData[]): any {
    this.dataSource = data;
    for (const elem of this.dataSource){
      elem.workVariant = this.variant.get(elem.workVariant);
      elem.dateStart = this.changeDateFormat(elem.dateStart);
      elem.dateEnd = this.changeDateFormat(elem.dateEnd);
    }
  }
  getId(id: number): void {
    console.log(id);
  }

  createTask(): void {
    this.router.navigate(['/create_task']).then();
  }

  cancelTask(id: number): void {

  }

  completeTask(id: number): void {

  }
  changeDateFormat(dateTask: string): string {
    return dateTask.split('-').reverse().join('.');
  }
}
