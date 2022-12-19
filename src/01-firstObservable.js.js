import { Observable } from "rxjs";


// Declare Observable
/**
 * Observer:
 * .next(): Observer's method used for the Observable to send the data
 * .completed(): Observer's method used for tje Observable to finish data flow
 * .error(): Observers method used for the observable to send error msg. End the data flow.
 */
const obsevableAlfa$ = new Observable( subscriber => {
    subscriber.next(1); // Send value 1 to subscriptors
    subscriber.next(2);
    subscriber.complete();
    subscriber.next(3);
    subscriber.next(4);
    const a = b;    // raise error
});

// declare observer
/**
 * Observer:
 * .next(): Observer's method used for the Observable to send the data
 * .completed(): Observer's method used for tje Observable to finish data flow
 * .error(): Observers method used for the observable to send error msg. End the data flow.
 */
const observer = {

    next: (value) => { // Return value received from observer
        console.log(value);
    }, 
    complete: () => {
        console.log('Observable completed!')
    },
    error: (error) => { // Return value received from observer
        console.log('Received error:');
        console.error(error);
    } 
}

obsevableAlfa$.subscribe(observer);
