import { Component, OnInit, ViewChild } from '@angular/core';

// ViewChild 还可以获取子组件 调用子组件的方法
@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DomComponent implements OnInit {
  @ViewChild('mybox') myBox: any
  @ViewChild('childCmp') childCmp: any

  constructor() { }

  ngOnInit(): void {
  }

  // 获取 dom
  ngAfterViewInit() {
    this.myBox.nativeElement.style.color = 'red'

    this.childCmp.run()
    console.log(this.childCmp);

  }

}
