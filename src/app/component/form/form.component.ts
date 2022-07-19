import { Component, OnInit } from '@angular/core';

import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userInfo: any = {
    name: '小邓',
    sex: '1',
    city: ['北京', '上海', '重庆'],
    y: '上海'
  }

  // storage: StorageService 相当于 new StorageService()
  constructor(public storage: StorageService) {
    console.log(this.storage.get());
  }

  // 组件和指令初始化完成，并不是真正的 dom 加载完成
  ngOnInit(): void {
    console.log(this.storage.get(), '111');

  }

  // dom 加载完成（dom 操作放在这里面）
  ngAfterViewInit() {
    console.log(11);

  }

  handleGetValue() {
    console.log(this);

  }

}
