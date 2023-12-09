import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuanService } from '../services/duan.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { NhanvienService } from '../services/nhanvien.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NhanvienService } from '../services/nhanvien.service';

@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent implements OnInit {

  id: any;
  nhanvien: any;
  Da: DuAn = <DuAn>{};
  leader: any;
  constructor(
    private nhanVienApi: NhanvienService,
    private DuanService: DuanService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  myFormEdit: FormGroup = new FormGroup({
    tenDuAn: new FormControl(),
    img: new FormControl(),
    ngayStart: new FormControl(),
    tien: new FormControl(),
    leader: new FormControl(),
    thanhVien: new FormControl(),
  })
  IdDuAn: string = String(this.route.snapshot.params['id']);
  ngOnInit(): void {
    this.DuanService.getByID(this.IdDuAn).subscribe(data => {
      this.myFormEdit = new FormGroup({
        tenDuAn: new FormControl(data.tenDuAn, Validators.required),
        ngayStart: new FormControl(data.ngayStart, Validators.required),
        img: new FormControl(data.img, Validators.required),
        tien: new FormControl(data.tien, Validators.required),
        leader: new FormControl(data.leader, Validators.required),
        thanhVien: new FormControl(data.thanhVien),
      })
      console.log(this.myFormEdit.value);
    });
    this.getlistNV();
  }

  getlistNV(): void {
    this.nhanVienApi.getList().subscribe(res => {
      console.log(res);
      this.nhanvien = res;
      // console.log(this.nhanvien);
    });
  }
  onSubmit() {
    if (this.myFormEdit.valid) {
      // const formValue = this.myFormEdit.value;

      // this.Da.tenDuAn = formValue.tenDuAn;
      // this.Da.ngayStart = formValue.ngayStart;
      // this.Da.tien = formValue.tien;
      // this.Da.leader = formValue.leader;
      // this.Da.thanhVien = formValue.thanhVien;
      // console.log(this.Da);

      console.log(this.IdDuAn, this.myFormEdit.value);
      this.DuanService.update(this.IdDuAn, this.myFormEdit.value).subscribe((data) => {
        alert('Sửa Dự Án Thành Công');
        this.router.navigate(['/duan'])
      })
    } else {
      alert('Vui lòng nhập đầy đủ thông tin')
    }

  }
}
