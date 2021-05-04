import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../_service/task.service';
import {AuthService} from '../../_service/auth.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {

  constructor(private taskService: TaskService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  CreateTask(): void {
    this.authService.login({
      username: 'username',
      password: 'password'
    }).subscribe();
  }
}
