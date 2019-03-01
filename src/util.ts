import { Observable } from 'rxjs';

// A simple polyfill
export function asyncIterableToObservable(iterable: AsyncIterable<any>): Observable<any> {
  return new Observable<any>(observer => void (async () => {
      try {
          for await (const item of iterable) {
              if (observer.closed) {
                return;
              }
              observer.next(item);
          }
          observer.complete();
      } catch (e) {
          observer.error(e);
      }
  })());
}
