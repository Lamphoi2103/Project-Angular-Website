import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get<any>('http://localhost:4301/tasks')
  }
  getByID(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:4301/tasks/${id}`)
  }
  addTask(newStaffData: any): Observable<any> {
    return this.http.post<any>('http://localhost:4301/tasks/add', newStaffData);
  }
  update(id: string, data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:4301/tasks/edit/${id}`, data)
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:4301/tasks/delete/${id}`)
  }
}
