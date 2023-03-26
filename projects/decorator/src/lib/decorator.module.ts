import { NgModule } from '@angular/core';
import { DecoratorComponent } from './decorator.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {DecoratorComponent2} from "./decorator2.component";



@NgModule({
  declarations: [
    DecoratorComponent,
    DecoratorComponent2
  ],
  imports: [
    NgIf,
    AsyncPipe,
    RouterModule.forChild([{
      path: 'decorator',
      component: DecoratorComponent,
    },{
      path: 'decorator2',
      component: DecoratorComponent2,
    },
    {
      path: '**',
      redirectTo: 'decorator',
    }]),
  ],
})
export class DecoratorModule { }
