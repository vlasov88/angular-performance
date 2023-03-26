import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DecoratorService} from "./decorator.service";
import {map, Observable} from "rxjs";

interface IModel {
  value: number;
}

@Component({
  selector: 'lib-decorator',
  template: `
    <p *ngIf="model$ | async as model">
      counter: {{model.value}}
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DecoratorService],
})
export class DecoratorComponent2 {

    public model$: Observable<IModel>;

    public constructor(public decoratorService: DecoratorService) {
      this.model$ = this.decoratorService.count2().pipe(
        map((value: number) => ({value})),
      );
    }
}
