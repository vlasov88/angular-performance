import {Observable, shareReplay, Subject, takeUntil} from "rxjs";

export interface ITestDecoratorOptions {
  unsubscribe: Subject<null>;
}

export function TestDecorator<T>(/*options: ITestDecoratorOptions*/) {
  console.log('TestDecorator#TestDecorator');
  let observable: Observable<T>;
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('TestDecorator#function');
    return {
      ...descriptor,
      value: function (...args: any[]) {
        console.log('TestDecorator#value');
        observable = descriptor.value.apply(this, args).pipe(
        //  takeUntil(target.unsubscribe),
          shareReplay(1),
        );
        return observable;
      }
    }
  }
}
