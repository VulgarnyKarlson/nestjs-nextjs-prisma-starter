import { Observable, Subscriber } from 'rxjs';

// A simple polyfill
export function asyncIterableToObservable<T>(
  iterable: AsyncIterable<T>,
): Observable<T> {
  return new Observable<T>(
    (observer: Subscriber<T>) =>
      void (async () => {
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
      })(),
  );
}
