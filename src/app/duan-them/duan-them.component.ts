import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuanService } from '../services/duan.service';
import { Router } from '@angular/router';
import { NhanvienService } from '../services/nhanvien.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent implements OnInit {
  myFormAdd: FormGroup;
  constructor(
    private duanApi: DuanService,
    private nhanvienApi: NhanvienService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.myFormAdd = this.formBuilder.group({
      tenDuAn: ['', Validators.required],
      img: ['', Validators.required],
      ngayStart: ['', Validators.required],
      tien: ['', Validators.required],
      leader: ['', Validators.required],
      thanhVien: ['', Validators.required],
    });
  }
  selectedMembers: string[] = [];

  Da: DuAn = <DuAn>{};
  nhanvien: any;
  ngOnInit(): void {

    this.getlistNV()
  }
  getlistNV(): void {
    this.nhanvienApi.getList().subscribe(res => {
      console.log(res);
      this.nhanvien = res;
    });
  }
  onSubmit() {
    if (this.myFormAdd.valid) {
      const formValue = this.myFormAdd.value;

      // Gán giá trị từ form vào biến Da
      this.Da.tenDuAn = formValue.tenDuAn;
      this.Da.img = formValue.img;
      this.Da.ngayStart = formValue.ngayStart;
      this.Da.tien = formValue.tien;
      this.Da.leader = formValue.leader;
      this.Da.thanhVien = formValue.thanhVien;

      // Tiếp theo, bạn có thể sử dụng biến Da cho việc gửi dữ liệu lên server hoặc thực hiện các tác vụ khác.
      console.log(this.Da);
      // const tenDuAn = this.Da.tenDuAn;
      // const ngayStart = this.Da.ngayStart;
      // const tien = this.Da.tien;
      // const newProject: DuAn = {
      //   id: '',
      //   thanhVien: this.selectedMembers,
      //   tenDuAn: tenDuAn,
      //   ngayStart: ngayStart,
      //   tien: tien,
      //   leader: this.selectedLeader,
      // };
      // console.log(newProject);
      this.duanApi.addProject(this.Da).subscribe(() => {
        alert('Thêm Dự Án Thành Công')
        this.router.navigate(['/duan'])
      })
    } else {
      alert('Vui lòng nhập đầy đủ thông tin')
    }
  }
}