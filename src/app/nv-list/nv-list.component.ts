import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../services/nhanvien.service';

@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css']
})
export class NvListComponent implements OnInit {

  listnv: any;
  deleteID: any;
  name: any;
  nhanvienApis: any
  filteredList: any = []; // Tạo một danh sách lọc để lưu trữ kết quả tìm kiếm
  searchQuery: string = ''; // Tạo biến để lưu trữ truy vấn tìm kiếm
  n: number = 1; // Mặc định là trang 1
  itemsPerPage: number = 9;
  constructor(public nhanvienApi: NhanvienService) { }
  ngOnInit(): void {
    this.nhanvienApi.getList().subscribe(res => {
      console.log(res);
      this.nhanvienApis = res
      this.listnv = res
      this.filteredList = res
    })

  }
  performSearch() {
    if (this.searchQuery.trim() === '') {
      // Nếu truy vấn tìm kiếm trống, hiển thị tất cả nhân viên
      this.filteredList = this.listnv;
    } else {
      // Nếu có truy vấn tìm kiếm, lọc danh sách dựa trên số item trên mỗi trang
      this.filteredList = this.listnv.filter((employee: any) =>
        employee.ten.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        employee.ho.toLowerCase().includes(this.searchQuery.toLowerCase())
        // employee.gioitinh.toLowerCase().includes(this.searchQuery.toLowerCase())
      ); // Lấy số item trên mỗi trang hiện tại
    }
    this.n = 1;
  }
  // setDeleteID(id: number): void {
  //   this.deleteID = id;
  //   this.nhanvienApi.getById(this.deleteID).subscribe(res => {
  //     // console.log(res);
  //     this.name = res
  //   });

  // }
  deleteNV(id: number = 0) {
    confirm(` Bạn có muốn xóa nhân viên này không `)
    this.nhanvienApi.deleteStaff(id).subscribe(() => {
      window.location.reload();
    });
    return false;
  }
}
