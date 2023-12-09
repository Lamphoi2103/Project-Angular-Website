import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { DuanDetailComponent } from './duan-detail/duan-detail.component';
import { NvDetailComponent } from './nv-detail/nv-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'duan', component: DuanListComponent, canActivate: [authGuard] },
  { path: 'duan/them', component: DuanThemComponent, canActivate: [authGuard] },
  { path: 'duan/sua/:id', component: DuanSuaComponent, canActivate: [authGuard] },
  { path: 'duan/:id', component: DuanDetailComponent, canActivate: [authGuard] },
  { path: 'nhanvien', component: NvListComponent, canActivate: [authGuard] },
  { path: 'nhanvien/them', component: NvThemComponent, canActivate: [authGuard] },
  { path: 'nhanvien/sua/:id', component: NvSuaComponent, canActivate: [authGuard] },
  { path: 'nhanvien/:id', component: NvDetailComponent, canActivate: [authGuard] },
  { path: 'task', component: TaskListComponent, canActivate: [authGuard] },
  { path: 'task/them', component: TaskThemComponent, canActivate: [authGuard] },
  { path: 'task/sua/:id', component: TaskSuaComponent, canActivate: [authGuard] },
  { path: 'task/:id', component: TaskDetailComponent, canActivate: [authGuard] },
  { path: 'dangnhap', component: DangnhapComponent },
  { path: 'dangky', component: DangkyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
