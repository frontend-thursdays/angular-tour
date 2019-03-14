import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {CanDeactivateGuard} from 'src/app/can-deactivate.guard';
import {ChuckNorrisGuard} from 'src/app/chuck-norris.guard';
import {EditorComponent} from 'src/app/components/editor/editor.component';
import {FirstCompComponent} from 'src/app/components/first-comp/first-comp.component';
import {SecondCompComponent} from 'src/app/components/second-comp/second-comp.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: FirstCompComponent},
  {
    path:      'second/user/:id', component: SecondCompComponent, canActivate: [ChuckNorrisGuard]
    , resolve: {user: ChuckNorrisGuard}
  },
  {
    path:      'editor',
    component: EditorComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path:      'editor/:id',
    component: EditorComponent,
    canDeactivate: [CanDeactivateGuard],
    resolve:   {user: ChuckNorrisGuard},
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class App {
}
