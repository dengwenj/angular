import { Component } from '@angular/core';

// @Component 是个装饰器
// Angular 就是把 html css ts 分离出去了
@Component({
  selector: 'app-root', // 使用这个组件的名称
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.scss'] // css
})
export class AppComponent {
  title = 'angular_lear';
}
