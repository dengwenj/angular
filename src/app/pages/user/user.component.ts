import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  hhh: string[] = []

  constructor(public router: Router) { }

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.hhh.push('这是' + index)
    }
  }

  gogo() {
    // 普通路由 和 动态传值
    // this.router.navigate(['/login'])
    // this.router.navigate(['/detail', '123'])

    // get 传值
    this.router.navigate(['/detail'], {
      queryParams: {
        id: '111'
      }
    })
  }
}
