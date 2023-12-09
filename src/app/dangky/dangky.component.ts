import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { NhanvienService } from '../services/nhanvien.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  Nv: NhanVien = <NhanVien>{};
  myFormAdd: FormGroup;
  constructor(
    private Authen: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,) {
    this.myFormAdd = this.formBuilder.group({
      ho: ['', Validators.required],
      ten: ['', Validators.required],
      ngaySinh: [''],
      gioiTinh: ['true'],
      khuVuc: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      img: ['https://i.pinimg.com/736x/bc/43/98/bc439871417621836a0eeea768d60944.jpg', Validators.required],
      role: [1,]
    });
  }
  ngOnInit(): void {

  }
  onSubmit() {
    if (this.myFormAdd.valid) {
      console.log(this.myFormAdd.value);
      if (this.myFormAdd.value.password !== this.myFormAdd.value.confirmpassword) {
        // Hiển thị cửa sổ thông báo nếu mật khẩu không khớp
        alert('Mật khẩu không khớp. Vui lòng kiểm tra lại.');
        return;
      }
      // Loại bỏ trường "confirmPass" trước khi gửi dữ liệu
      // delete formData.confirmPass;
      this.Authen.addUser(this.myFormAdd.value).subscribe(() => {
        alert('Đăng ký thành công');
        this.router.navigate(['/']);
      });
    }

    else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  }
}
