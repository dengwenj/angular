/**
 * 这个文件是 Angular 根模块，告诉 Angular 如何组装应用
 */

// NgModule Angular 核心模块
import { NgModule } from '@angular/core';
// BrowserModule 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

// 路由模块
import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FormComponent } from './component/form/form.component';

// 服务
import { StorageService } from './services/storage.service';
import { DomComponent } from './component/dom/dom.component';
import { ChildCmpComponent } from './component/child-cmp/child-cmp.component';
import { HooksComponent } from './component/hooks/hooks.component'

// @NgModule 装饰器， @NgModule 接收一个元数据对象，告诉 Angular 如何编译和启动应用
@NgModule({
  // 配置当前项目运行的组件
  declarations: [ // 放的组件
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    DomComponent,
    ChildCmpComponent,
    HooksComponent
  ],
  // 配置当前项目运行依赖的其他模块
  imports: [ // 放的模块
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // 配置项目所需要的服务
  providers: [StorageService],
  // 指定应用的主视角（称为根组件）
  bootstrap: [AppComponent]
})
// 根模块不需要导出任何东西， 因为其他组件不需要导入根模块
export class AppModule { }
