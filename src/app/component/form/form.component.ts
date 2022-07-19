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

  ngOnInit(): void {
    console.log(this.storage.get(), '111');

  }


  handleGetValue() {
    console.log(this);

  }

}
