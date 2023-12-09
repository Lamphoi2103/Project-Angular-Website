import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NhanvienService {

  constructor(private http: HttpClient) { }


  getList(): Observable<any> {
    return this.http.get<any>('http://localhost:4301/staffs')
  }
  getById(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:4301/staffs/${id}`)
  }
  addStaff(newStaffData: any): Observable<any> {
    return this.http.post<any>('http://localhost:4301/staffs/add', newStaffData);
  }
  deleteStaff(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:4301/staffs/delete/${id}`)
  }
  update(id: string, data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:4301/staffs/edit/${id}`, data)
  }
}
