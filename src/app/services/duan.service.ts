import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DuanService {

  constructor(private http: HttpClient) { }

  // các phương thức khác
  getList(): Observable<any> {
    return this.http.get<any>('http://localhost:4301/projects')
  }
  getByID(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:4301/projects/${id}`)
  }
  // addProject(newProjectData: any): Observable<any> {
  //   return this.http.post<any>('http://localhost:4301/projects/add', newProjectData);
  // }
  addProject(newProject: any): Observable<any> {
    return this.http.post('http://localhost:4301/projects/add', newProject);
  }
  deleteProject(id: number): Observable<any> {
    return this.http.delete(`http://localhost:4301/projects/delete/${id}`);
  }
  update(id: string, data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:4301/projects/edit/${id}`, data)
  }
}
