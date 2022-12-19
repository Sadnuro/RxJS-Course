import { Observable, Subject } from "rxjs";

// Observables
const numbers$ = new Observable( subscriber => {
    // Se ejecuta para cada observador
    subscriber.next( Math.round(Math.random() * 100) );
});

const numbersRandom$ = new Subject();

// Observers
const observer1 = {
    next: (number) => {
        console.log(number);
    }
}
const observer2 = {
    next: (number) => {
        console.log(number);
    }
}

// Subscribe Observers to Observables
numbersRandom$.subscribe(observer1);
numbersRandom$.subscribe(observer2);
numbers$.subscribe(numbersRandom$);
