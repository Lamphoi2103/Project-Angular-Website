import { Component, OnInit } from '@angular/core';
import { DuanService } from '../services/duan.service';
import { DatePipe } from '@angular/common';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent implements OnInit {

  listDa: any;
  listStaff: any;
  duanAPIs: any;
  filteredList: any = []; // Tạo một danh sách lọc để lưu trữ kết quả tìm kiếm
  searchQuery: string = ''; // Tạo biến để lưu trữ truy vấn tìm kiếm
  p: number = 1; // Mặc định là trang 1
  itemsPerPage: number = 9;
  constructor(
    private DuanService: DuanService,
  ) { }

  ngOnInit(): void {
    this.renderListProjects();
  }
  renderListProjects(): void {
    this.DuanService.getList().subscribe(res => {
      console.log(res);
      this.duanAPIs = res;
      this.listDa = res
      this.filteredList = res
    });
  }
  performSearch() {
    if (this.searchQuery.trim() === '') {
      this.filteredList = this.listDa;
    } else {
      this.filteredList = this.listDa.filter((project: any) =>
        project.tenDuAn.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    this.p = 1; // Đặt lại trang về 1 sau mỗi tìm kiếm
  }
  delete(id: number = 0) {
    confirm(`Bạn có muốn xóa dự án này không `);
    this.DuanService.deleteProject(id).subscribe(() => {
      window.location.reload();
    });
    return false;
  }
}
