/**
 * 配置路由的模块
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      // {
      //   path: '',
      //   component: ''  嵌套路由 然后在 login 里面的某个地方展示这个路由组件 <router-outlet></router-outlet> 占个位
      // },
      // {
      //   path: '**', // 任意的路由
      //   redirectTo: ''
      // },
    ]
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'detail',
    // path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: '**', // 任意的路由
    redirectTo: '/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
