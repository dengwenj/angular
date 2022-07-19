import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-cmp',
  templateUrl: './child-cmp.component.html',
  styleUrls: ['./child-cmp.component.scss']
})
export class ChildCmpComponent implements OnInit {
  @Input() dwj: any
  @Input() ww: any
  @Input() dddFn: any

  @Output() handleFz = new EventEmitter()

  title: string = '我是 title'

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.dwj, 'ggg');
    console.log(this.ww, 'fddd');
    this.dddFn()

    this.handleFz.emit('传给父组件')
  }

  run() {
    console.log('this is run')
  }
}
