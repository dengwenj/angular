import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-cmp',
  templateUrl: './child-cmp.component.html',
  styleUrls: ['./child-cmp.component.scss']
})
export class ChildCmpComponent implements OnInit {

  title: string = '我是 title'

  constructor() { }

  ngOnInit(): void {
  }

  run() {
    console.log('this is run')
  }
}
