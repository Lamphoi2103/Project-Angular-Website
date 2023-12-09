import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { NhanvienService } from '../services/nhanvien.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent implements OnInit {
  Nv: NhanVien = <NhanVien>{};
  myFormAdd: FormGroup;
  constructor(
    private NhanvienService: NhanvienService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.myFormAdd = this.formBuilder.group({
      ho: ['', Validators.required],
      ten: ['', Validators.required],
      ngaySinh: ['', Validators.required],
      gioiTinh: ['', Validators.required],
      khuVuc: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      img: ['', Validators.required],
      role: [1, Validators.required]
    });
  }
  ngOnInit(): void {

  }
  onSubmit() {
    if (this.myFormAdd.valid) {
      console.log(this.myFormAdd.value);
      this.NhanvienService.addStaff(this.myFormAdd.value).subscribe(() => {
        alert('Thêm Nhân Viên Thành Công');
        this.router.navigate(['/nhanvien']);
      });
    }

    else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  }
}
