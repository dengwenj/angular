import { Component, OnInit } from '@angular/core';


interface IUserInfo {
  name: string
  age: number
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  /**
   * public 共有（默认）可以在这个类里面使用、也可以在类外面使用
   * protected 保护类型 他只有在当前类和他的子类里面吗可以访问
   * private 私有 只有在当前类才可以访问这个属性
   */

  // 绑定数据
  // 定义数据
  public title = '我输title'
  data = '绑定数据'

  private msg = '我只能在这个类里面才可以访问'

  public userInfo: IUserInfo = {
    name: '小邓',
    age: 18
  }

  message: string

  constructor() {
    console.log(this.msg);
    console.log(this.userInfo)
    this.message = 'message'
  }

  ngOnInit(): void {
    this.message = '我在 ngOnInit 钩子里面改变数据'
  }

}
