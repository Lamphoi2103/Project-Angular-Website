import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../services/task.service';
import { DuanService } from '../services/duan.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NhanvienService } from '../services/nhanvien.service';
@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit {

  id: any;
  nhanvien: any;
  Ta: Task = <Task>{};
  idDuAn: any;
  allmember: any;
  constructor(
    private taskApi: TaskService,
    private DuanService: DuanService,
    private nhanVienApi: NhanvienService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  myFormEdit: FormGroup = new FormGroup({
    tenTask: new FormControl(),
    duAnID: new FormControl(),
    moTa: new FormControl(),
    nhanvienID: new FormControl(),
    priority: new FormControl(),
    status: new FormControl(),
  })
  IdTask: string = String(this.route.snapshot.params['id']);
  ngOnInit(): void {
    this.taskApi.getByID(this.IdTask).subscribe(data => {
      console.log(data);
      this.myFormEdit = new FormGroup({
        tenTask: new FormControl(data.tenTask, Validators.required),
        duAnID: new FormControl(data.duAnID),
        moTa: new FormControl(data.moTa, Validators.required),
        nhanvienID: new FormControl(data.nhanvienID, Validators.required),
        priority: new FormControl(data.priority, Validators.required),
        status: new FormControl(data.status, Validators.required),
      });
      // console.log(this.myFormEdit.value.duAnID);
      this.idDuAn = this.myFormEdit.value.duAnID._id;
      this.DuanService.getByID(this.idDuAn).subscribe(res => {
        console.log(res);
        const { leader, thanhVien } = res;
        this.allmember = [leader, ...thanhVien];
        console.log(this.allmember);
      });
    })
  }
  // getlistNV(): void {
  //   this.nhanVienApi.getList().subscribe(res => {
  //     console.log(res);
  //     this.nhanvien = res;
  //   });
  // }
  onSubmit() {
    if (this.myFormEdit.valid) {
      console.log(this.myFormEdit.value);
      this.taskApi.update(this.IdTask, this.myFormEdit.value).subscribe(data => {
        alert('Sửa Task Thành Công');
        this.router.navigate(['/task'])
      })
    } else {
      alert('Vui Lòng Nhập Đầy Đủ Thông Tin');
    }
  }
}
