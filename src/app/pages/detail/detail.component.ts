import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  data: any

  constructor(public route: ActivatedRoute) {
    // get 传值
    this.route.queryParams.subscribe((res: any) => {
      this.data = res.id
    })

    // 动态路由
    this.route.params.subscribe((data) => {
      console.log(data)
    })


  }

  ngOnInit(): void {
  }

}
