import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CanDeactivateComponent} from 'src/app/can-deactivate.guard';
import {User} from 'src/app/user';
import {UserService} from 'src/app/user-service.service';

@Component({
  selector:    'app-editor',
  templateUrl: './editor.component.html',
  styleUrls:   ['./editor.component.css']
})
export class EditorComponent implements OnInit, CanDeactivateComponent {

  public form: FormGroup;
  public user: User;
  public submitted = false;

  constructor(private builder: FormBuilder, private service: UserService,
              private router: Router, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    this.form = this.builder.group({
      name:     ['', Validators.required],
      lastName: ['', Validators.required],
      age:      ['', Validators.required]
    });
    if (this.user) {
      this.form.patchValue(this.user);
    }
  }

  public canDeactivate(): boolean {
    return this.form.disabled || this.form.untouched;
  }

  public touch() {
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
    });
  }



  public onSubmit() {
    if (!this.form.valid) {
      this.touch();
      return;
    }
    const properties = this.form.value;
    this.user ? this.service.editUser(this.user.id, properties) :  this.service.addUser(properties);
    this.router.navigate(['/main']);
  }

}
