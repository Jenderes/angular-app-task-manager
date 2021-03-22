import {Component, OnInit } from '@angular/core';
import {UserService} from '../../_service/user.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.less']
})

export class StatisticComponent implements OnInit {
  dataSource = {
    countAnalyseTask: 0,
    countBusinessTask: 0,
    countCompleteTask: 0,
    countDesignTask: 0,
    countDevelopTask: 0,
    countGetTask: 0,
    countSendTask: 0,
    countTask: 0
  };
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getStatistic().subscribe(
      data => {
        this.getStatistic(data);
      }
    );
  }
  getStatistic(data): void {
    this.dataSource = data;
    console.log(this.dataSource);
  }
}
