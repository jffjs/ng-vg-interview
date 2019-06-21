import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersViewComponent } from './users-view.component';

const routes: Routes = [
  {
    path: '',
    component: UsersViewComponent
  }
  // Question #1
  // {
  //   path: ':id',
  //   component: UserDetailViewComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
