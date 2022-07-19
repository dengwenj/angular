import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  hhh: string[] = []

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.hhh.push('这是' + index)
    }
  }
}
