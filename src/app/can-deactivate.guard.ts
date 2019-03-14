import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subscriber} from 'rxjs';
import {ConfirmDeactivateComponent} from 'src/app/shared/confirm-deactivate/confirm-deactivate.component';

export interface CanDeactivateComponent {
   canDeactivate: () => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

  public constructor(public modal: NgbModal) {}

  canDeactivate(
    component: CanDeactivateComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!component.canDeactivate || component.canDeactivate()) {
      return true;
    }

    return Observable.create((observer: Subscriber<boolean>) => {
        this.modal.open(ConfirmDeactivateComponent, {windowClass: 'modal-warning'}).result.then(
          () => {
            observer.next(false);
            observer.complete();
          },
          () => {
            observer.next(true);
            observer.complete();
          }
        );
    });
  }

}
