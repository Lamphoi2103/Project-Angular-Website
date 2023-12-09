import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../services/nhanvien.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit {

  id: any;
  constructor(
    private NhanvienService: NhanvienService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  myFormEdit: FormGroup = new FormGroup({
    ten: new FormControl(),
    ho: new FormControl(),
    ngaySinh: new FormControl(),
    gioiTinh: new FormControl(),
    khuVuc: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    img: new FormControl(),
    role: new FormControl(),
  })
  IdNv: string = String(this.route.snapshot.params['id']);
  ngOnInit(): void {
    console.log(this.IdNv);
    this.NhanvienService.getById(this.IdNv).subscribe(data => {
      this.myFormEdit = new FormGroup({
        ten: new FormControl(data.ten, Validators.required),
        ho: new FormControl(data.ho, Validators.required),
        ngaySinh: new FormControl(data.ngaySinh, Validators.required),
        gioiTinh: new FormControl(data.gioiTinh, Validators.required),
        khuVuc: new FormControl(data.khuVuc, Validators.required),
        email: new FormControl(data.email, Validators.required),
        password: new FormControl(data.password, Validators.required),
        img: new FormControl(data.img, Validators.required),
        role: new FormControl(data.role, Validators.required),
      })
    })

  }
  onSubmit() {
    if (this.myFormEdit.valid) {
      this.NhanvienService.update(this.IdNv, this.myFormEdit.value).subscribe(data => {
        alert('Sửa Nhân Viên Thành Công');
        this.router.navigate(['/nhanvien'])
      })
    } else {
      alert('Vui lòng nhập đủ thông tin')
    }
  }
}
