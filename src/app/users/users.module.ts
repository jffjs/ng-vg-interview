import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersViewComponent } from './users-view.component';

@NgModule({
  declarations: [UsersViewComponent],
  imports: [CommonModule, UsersRoutingModule],
  providers: [],
  bootstrap: []
})
export class UsersModule {}
