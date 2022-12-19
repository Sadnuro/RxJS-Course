import { fromEvent } from 'rxjs';

// observable
const onKeyDown$ = fromEvent( document, 'keydown' );

// observer
const observerOnKeyDown = {
    next: (event) => {
        console.log(event.key);
    },
    complete: () => {},
    error: () => {}
}

onKeyDown$.subscribe(observerOnKeyDown);