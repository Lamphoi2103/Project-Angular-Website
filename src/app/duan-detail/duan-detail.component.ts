import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuanService } from '../services/duan.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-duan-detail',
  templateUrl: './duan-detail.component.html',
  styleUrls: ['./duan-detail.component.css']
})
export class DuanDetailComponent implements OnInit {
  Detail: any;
  constructor(
    private DuanService: DuanService,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.DetailProject();
  }
  IdDuAn:string = String(this.route.snapshot.params['id']);
  DetailProject() : void {
    this.DuanService.getByID(this.IdDuAn).subscribe(res => {
      console.log(res);
      this.Detail = res
    });
  }
}







