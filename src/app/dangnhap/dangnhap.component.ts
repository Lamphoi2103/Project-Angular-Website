import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  formLogin: FormGroup;
  info: any
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {

  }
  login() {
    const val = this.formLogin.value;
    // console.log(val);
    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(
          (res) => {
            // console.log("Đăng nhập thành công ", res);
            window.alert("Đăng nhập thành công ");
            // var data = JSON.parse(res);
            const data = res;
            console.log(data);
            // this.router.navigateByUrl('/');
            const expiresAt = moment().add(data.expiresIn, 'second');
            localStorage.setItem('id_token', data.idToken);
            localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
            // this.getUserInfo()
            location.reload()
            // this.router.navigate(['/']);
          },
          error => {
            // console.log('oops', error);
            // this.router.navigateByUrl('/login');
            window.alert('Email hoặc mật khẩu không đúng vui lòng thử lại')
          }
        );
    }


  }
  // getUserLogin() {
  //   if (this.authService.isLogIn()) {
  //     this.authService.getUserLogin().subscribe(
  //       (userInfo: any) => {
  //         console.log('Thông tin người dùng:', userInfo);

  //         // Lưu thông tin người dùng vào localStorage
  //         localStorage.setItem('userInfo', JSON.stringify(userInfo));

  //         // Cập nhật biến userLogin trong component của bạn
  //         // this.userLogin = userInfo;
  //       },
  //       (error: any) => {
  //         console.error('Lỗi khi lấy thông tin người dùng:', error);
  //       }
  //     );
  //   }
  // }

}






// getUserLogin() {
//   const token = this.getToken();
// if (token) {
//   // Sử dụng token ở đây
// } else {
//   // Token không tồn tại, xử lý tương ứng
// }
// }
