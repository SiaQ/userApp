import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[] = [];

  @Input()
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  @Output() onChange = new EventEmitter();

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

  onSubmit(): void {
    const newUser: User = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName
    };
    this.users.push(newUser);
    this.userForm.reset();
  }
}
