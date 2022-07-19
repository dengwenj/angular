import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DomComponent implements OnInit {
  @ViewChild('mybox') myBox: any
  constructor() { }

  ngOnInit(): void {
  }

  // 获取 dom
  ngAfterViewInit() {
    this.myBox.nativeElement.style.color = 'red'
  }

}
