import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-deactivate',
  templateUrl: './confirm-deactivate.component.html',
  styleUrls: ['./confirm-deactivate.component.css']
})
export class ConfirmDeactivateComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
