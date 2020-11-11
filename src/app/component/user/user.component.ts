import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[] = [];

  constructor() {
  }

  ngOnInit(): void {
    const firstUser: User = {
      firstName: 'Kuba',
      lastName: 'Gabrysiak'
    };

    const secondUser: User = {
      firstName: 'Adam',
      lastName: 'Kowalski'
    };

    this.users.push(firstUser);
    this.users.push(secondUser);
  }
}
