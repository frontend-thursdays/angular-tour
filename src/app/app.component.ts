import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from 'src/app/user';
import {UserService} from 'src/app/user-service.service';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.css']
})
export class AppComponent implements OnInit {

  public constructor(public service: UserService) {
  }

  public text = 'emek';
  public usersFromChild: User[] = [];

  public users: Observable<User[]>;

  public ngOnInit() {
    this.users = this.service.getUsers();
  }

  public isClicked($event) {
    this.usersFromChild = $event;
  }


  title = 'sample';
}
