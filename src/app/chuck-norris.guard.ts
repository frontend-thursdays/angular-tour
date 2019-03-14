import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {User} from 'src/app/user';
import {UserService} from 'src/app/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisGuard implements CanActivate, Resolve<User> {

  public constructor(private service: UserService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.service.getUserById(+route.params['id']);
  }
}
