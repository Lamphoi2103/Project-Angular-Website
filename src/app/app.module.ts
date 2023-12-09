import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms"
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { DuanDetailComponent } from './duan-detail/duan-detail.component';
import { NvDetailComponent } from './nv-detail/nv-detail.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';

// import { LoaiSanphamComponent } from './loai-sanpham/loai-sanpham.component';
// import { SanphamListComponent } from './sanpham-list/sanpham-list.component';
// import { SanphamThemComponent } from './sanpham-them/sanpham-them.component';
// import { SanphamSuaComponent } from './sanpham-sua/sanpham-sua.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DuanListComponent,
    DuanThemComponent,
    DuanSuaComponent,
    TaskListComponent,
    TaskThemComponent,
    TaskSuaComponent,
    NvListComponent,
    NvThemComponent,
    NvSuaComponent,
    DuanDetailComponent,
    NvDetailComponent,
    TaskDetailComponent,
    DangnhapComponent,
    DangkyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
