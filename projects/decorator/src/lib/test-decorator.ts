import {Observable, shareReplay} from "rxjs";

export function TestDecorator<T>() {
  let observable: Observable<T>;
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    return {
      ...descriptor,
      value: function (...args: any[]) {
        observable = descriptor.value.apply(this, args).pipe(shareReplay(1));
        return observable;
      }
    }
  }
}
