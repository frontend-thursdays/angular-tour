import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/user';
import {UserService} from 'src/app/user-service.service';

@Component({
  selector: 'first-component',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {


public users: User[] = [];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(
        (data) => {
          this.users = data;
        }
      );
  }

}
