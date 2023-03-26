import { NgModule } from '@angular/core';
import { DecoratorComponent } from './decorator.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DecoratorComponent
  ],
  imports: [
    NgIf,
    AsyncPipe,
    RouterModule.forChild([{
      path: 'decorator',
      component: DecoratorComponent,
    },
      {
        path: '**',
        redirectTo: 'decorator',
      }]),
  ],
  exports: [
    DecoratorComponent
  ]
})
export class DecoratorModule { }
