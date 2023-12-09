import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../services/task.service';
import { DuanService } from '../services/duan.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// import { Route } from '@angular/router';


@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent implements OnInit {
  listDa: any;
  listStaff: any;
  duanAPIs: any;
  filteredList: any = [];
  allmember: any = [];
  // searchQuery: string = '';
  myFormAdd: FormGroup;
  constructor(
    private taskService: TaskService,
    private DuanService: DuanService,
    private formBuilder: FormBuilder,
    private router: Router
    // private route: Route
  ) {
    this.myFormAdd = this.formBuilder.group({
      tenTask: ['', Validators.required],
      moTa: ['', Validators.required],
      duAnID: ['', Validators.required],
      nhanvienID: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  Task: Task = <Task>{};

  onSubmit() {
    // console.log(this.Task);
    // this.taskService.addTask(this.Task).subscribe(() => {
    //   alert('Thêm Nhân Viên Thành Công')
    // });
    if (this.myFormAdd.valid) {
      console.log(this.myFormAdd.value);

      this.taskService.addTask(this.myFormAdd.value).subscribe(() => {
        this.router.navigate(['/task']);
      })
    } else {
      alert('Vui lòng nhập đầy đủ thông tin');
    }
  }
  ngOnInit(): void {
    this.renderListProjects()
  }
  renderListProjects(): void {
    this.DuanService.getList().subscribe(res => {
      console.log(res);
      this.filteredList = res
    });
  }
  onSelect(event: any): void {
    // console.log(event.target.value);
    const selectedProjectID = event.target.value;
    console.log(selectedProjectID);
    this.DuanService.getByID(selectedProjectID).subscribe(res => {
      console.log(res);
      // this.listDa = res
      const { leader, thanhVien } = res;
      this.allmember = [leader, ...thanhVien];
      console.log(this.allmember);
    });
  }
}
