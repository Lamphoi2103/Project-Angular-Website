import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { NhanvienService } from '../services/nhanvien.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nv-detail',
  templateUrl: './nv-detail.component.html',
  styleUrls: ['./nv-detail.component.css']
})
export class NvDetailComponent implements OnInit {

  DetailNv: any;
  constructor(
    private NhanvienService: NhanvienService,
    private router: ActivatedRoute,
  ){}
  
  IdNhanVien:string = String(this.router.snapshot.params['id']);
  ngOnInit(): void {
      this.NhanvienService.getById(this.IdNhanVien).subscribe(res => {
        console.log(res);
        this.DetailNv = res
      });
  }
}
