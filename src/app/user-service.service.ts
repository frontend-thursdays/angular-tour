import { Injectable } from '@angular/core';
import {users} from 'src/app/mock-users';
import {User} from 'src/app/user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUsers(): Observable<User[]> {
    return of(users);
  }

  public getUserById(id: number): Observable<User> {
    return of(users.find(user => user.id === id));
  }

  public addUser(user: User) {
    user.id = users.length + 1;
    users.push(user);
  }
  public editUser(id: number, user: User) {
    const index = users.findIndex(searchedUser => searchedUser.id === id);
    if (index !== -1) {
      users[index] = user;
    }
  }
}
