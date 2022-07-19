import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }


  handleGetValue() {
    console.log(this);

  }

}
