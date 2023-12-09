import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import * as moment from 'moment';

import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {

  }

  getToken(): string | null {
    return localStorage.getItem('id_token');
  }
  decodeToken(): any | null {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        return decodedToken;
      } catch (error) {
        console.error('Lỗi khi giải mã token:', error);
      }
    }
    return null;
  }
  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:4301/staffs/login', {
      email,
      password,
    });
    // this is just the HTTP call,
    // we still need to handle the reception of the token
  }
  addUser(newStaffData: any): Observable<any> {
    return this.http.post<any>('http://localhost:4301/staffs/add', newStaffData);
  }
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('userInfo');
    location.reload()
  }
  // Check đăng nhập
  // public isLogIn() {
  //   const str = localStorage.getItem("expires_at") || "";
  //   if (str == "") return false; //chưa dn
  //   const expiresAt = JSON.parse(str);
  //   return moment().isBefore(moment(expiresAt));
  // }
  // getUserLogin(): Observable<any> {
  //   const token = localStorage.getItem('id_token');
  //   console.log(`Token máy khách gửi lên máy chủ:${token}`);
  //   if (token) {
  //     // Gửi yêu cầu đến máy chủ với mã thông báo JWT
  //     return this.http.get<any>('http://localhost:4301/staffs/infoUserLogin', {
  //       headers: {
  //         Authorization: `${token}`,
  //       },
  //     });
  //   } else {
  //     // Trả về một Observable bị lỗi để xử lý ở phía máy khách
  //     return throwError('Mã thông báo JWT không tồn tại');
  //   }
  // }

  getUserInfoById(id: string) {
    // Thực hiện một yêu cầu GET để lấy thông tin người dùng dựa trên ID từ máy chủ của bạn.
    return this.http.get(`http://localhost:4301/staffs/${id}`); // Thay đổi URL của yêu cầu GET tùy theo cấu trúc API của bạn.
  }
}