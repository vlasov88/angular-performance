import {Injectable, OnDestroy} from '@angular/core';
import {interval, map, Observable, Subject, take, tap} from "rxjs";
import {TestDecorator} from "./test-decorator";

@Injectable()
export class DecoratorService implements OnDestroy {

  public unsubscribe: Subject<null> = new Subject<null>();

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
      take(15),
    );
  }

  @TestDecorator<number>()
  public count2(): Observable<number> {
    console.log('DecoratorService#count2');
    return interval(1000).pipe(
      map((value: number) => value + 100),
      tap((value:number) => {
        console.log(value);
      }),
      take(15),
    );
  }

  public ngOnDestroy(): void {
    console.log('DecoratorService#ngOnDestroy');
    this.unsubscribe.next(null);
  }
}
