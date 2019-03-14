import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from 'src/app/user';
import {UserService} from 'src/app/user-service.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute,
              private service: UserService) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }

}
