import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit {

  public counter: number = 1

  constructor() {
  }

  // created  初始化操作
  ngOnInit(): void {
    console.log('ngOnInit-请求数据放在这里面');

  }

  // mounted dom操作
  ngAfterViewInit() {
    console.log('ngAfterViewInit');

  }

  // 数据改变都会触发关于 check 相关的生命周期函数
  // updated
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    console.log(this.counter);

  }

  // destoryed
  ngOnDestory() {
    console.log('ngOnDestory');

  }

  handleClick() {
    this.counter = this.counter + 1
  }
}
