import {Injectable, OnDestroy} from '@angular/core';
import {interval, map, Observable, take, tap} from "rxjs";
import {TestDecorator} from "./test-decorator";

@Injectable()
export class DecoratorService implements OnDestroy {

  constructor() {
    console.log('DecoratorService#constructor');
  }

  @TestDecorator<number>()
  public count(): Observable<number> {
    console.log('DecoratorService#count');
    return interval(1000).pipe(
      map((value: number) => value + 1),
      tap((value:number) => {
        console.log(value);
      }),
      take(30),
    );
  }

  public ngOnDestroy(): void {
    console.log('DecoratorService#ngOnDestroy');
  }
}
