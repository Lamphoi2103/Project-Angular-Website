import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';
  info: any;
  defaultImg: string = 'https://www.antiagingya.com/es/wp-content/uploads/2015/01/img-default-autores.jpg';
  roles: number = 0;
  constructor(

    private router: Router,
    private authService: AuthenticationService,
  ) { }
  ngOnInit(): void {
    initFlowbite();
    this.getUserInfo();
    this.getAndDecodeToken();
  }

  logout() {
    this.authService.logout();
  }
  getAndDecodeToken() {
    const decodedToken = this.authService.decodeToken();
    if (decodedToken) {
      this.roles = decodedToken.role;
      console.log('Token giải mã:', this.roles);
    } else {
      console.log('Token không tồn tại hoặc không thể giải mã');
    }
  }
  getUserInfo() {
    // Giải mã token và lấy ID
    const decodedToken = this.authService.decodeToken();
    if (decodedToken && decodedToken.userId) {
      const userId = decodedToken.userId;

      // Sử dụng dịch vụ UserService để lấy thông tin người dùng
      this.authService.getUserInfoById(userId).subscribe(
        (userInfo) => {
          console.log(userInfo);
          this.info = userInfo;
          // this.router.navigateByUrl('/');

        },
        (error) => {
          console.error('Lỗi khi lấy thông tin người dùng:', error);
        }
      );
    } else {
      console.log('Không thể lấy ID từ token hoặc token không tồn tại.');
    }
  }
}