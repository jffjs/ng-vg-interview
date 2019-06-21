import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent {
  maxUserId: number = 1;

  // Question #5
  users: User[] = [
    {
      id: this.maxUserId++,
      firstName: 'Drew',
      lastName: 'Hamblin'
    },
    {
      id: this.maxUserId++,
      firstName: 'Royal',
      lastName: 'Bopp'
    },
    {
      id: this.maxUserId++,
      firstName: 'Glennis',
      lastName: 'Jeffcoat'
    },
    {
      id: this.maxUserId++,
      firstName: 'Joy',
      lastName: 'Gleason'
    }
  ];

  // Question #6
  handleDelete(userToDelete: User) {
    this.users = this.users.filter((user: User) => {
      return user.id !== userToDelete.id;
    });

    // const idx = this.users.findIndex(user => user.id === userToDelete.id);
    // this.users.splice(idx, 1);
  }
}
