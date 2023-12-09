import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  ListTask: any;
  list: any;
  filteredList: any = [];
  searchQuery: string = '';
  deleteID: any;
  name: any
  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.Rendertask();
  }
  Rendertask(): void {
    this.taskService.getList().subscribe(res => {
      console.log(res);
      // this.ListTask = res;

      this.list = res
      this.list.sort((a: any, b: any) => b.priority - a.priority);
      this.filteredList = res
    })
  }
  performSearch() {
    if (this.searchQuery.trim() === '') {
      // Nếu truy vấn tìm kiếm trống, hiển thị tất cả nhân viên
      this.filteredList = this.list;
    } else {
      // Nếu có truy vấn tìm kiếm, lọc danh sách dựa trên số item trên mỗi trang
      this.filteredList = this.list.filter((employee: any) =>
        employee.tenTask.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        employee.moTa.toLowerCase().includes(this.searchQuery.toLowerCase())
        // employee.thanhVien.toLowerCase().includes(this.searchQuery.toLowerCase())
      ); // Lấy số item trên mỗi trang hiện tại
    }
  }
  // setDeleteID(id: number): void {
  //   this.deleteID = id;
  //   this.taskService.getByID(this.deleteID).subscribe(res => {
  //     // console.log(res);
  //     this.name = res
  //     console.log(this.name);

  //   });

  // }
  deleteNV(id: number = 0) {
    confirm(` Bạn có muốn xóa task này không `)
    this.taskService.delete(id).subscribe(() => {
      window.location.reload();
    });
    return false;
  }
}
