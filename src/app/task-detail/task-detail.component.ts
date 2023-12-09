import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  Detail: any;
  constructor(
    private taskService: TaskService,
    private router: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.DetailTask();
  }
  IdTask: string = String(this.router.snapshot.params['id']);
  DetailTask(): void {
    this.taskService.getByID(this.IdTask).subscribe(res => {
      console.log(res);
      this.Detail = res;
    })
  }
}
