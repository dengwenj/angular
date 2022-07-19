import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  // 绑定数据
  // 定义数据
  public title = '我输title'
  data = '绑定数据'

  constructor() { }

  ngOnInit(): void {
  }

}
