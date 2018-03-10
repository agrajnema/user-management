import {Component, OnInit} from '@angular/core';
import {IUser, USERS} from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-list',
  templateUrl : '/userlist.component.html'
})

export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {}

  users: IUser[];
  selectedUser: IUser;

ngOnInit() {
  this.userService.getUsers().subscribe(users => this.users = users);
}

  selectUser(user: IUser) {
     this.selectedUser = user;
  }

}

