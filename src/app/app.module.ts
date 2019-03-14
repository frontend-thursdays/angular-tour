import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CanDeactivateGuard} from 'src/app/can-deactivate.guard';
import {ChuckNorrisGuard} from 'src/app/chuck-norris.guard';
import {SecondCompComponent} from 'src/app/components/second-comp/second-comp.component';
import {ConfirmDeactivateComponent} from 'src/app/shared/confirm-deactivate/confirm-deactivate.component';
import {UserService} from 'src/app/user-service.service';
import {AppComponent} from './app.component';
import {FirstCompComponent} from './components/first-comp/first-comp.component';
import {FormsModule} from '@angular/forms';
import {App} from './app.routing.module';
import {EditorComponent} from 'src/app/components/editor/editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    EditorComponent,
    ConfirmDeactivateComponent
  ],
  imports:      [
    BrowserModule,
    FormsModule,
    App,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule
  ],
  entryComponents: [ConfirmDeactivateComponent],
  providers:    [UserService, ChuckNorrisGuard, CanDeactivateGuard],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
