import { Observable } from "rxjs";

/**
 * A delay observable by n milliseconds
 * @param milliseconds The time to delay in milliseconds 
 * @returns Observable<boolean> false -> true after set number of milliseconds
 */
export function boolTimeout(milliseconds: number, initialState?: boolean): Observable<boolean> {
    const init = (initialState === true || initialState === false) ? initialState : false;
    const final = !init;

    return new Observable(
        subscriber => {
            subscriber.next(init);
            setTimeout(() => {
                subscriber.next(final);
                subscriber.complete();
            }, milliseconds);
        }
    );
}