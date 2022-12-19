import { Observable, Subject } from "rxjs";

const numbers$ = new Observable( subscriber => {
    // Se ejecuta para cada observador
    subscriber.next( Math.round(Math.random() * 100) );
});

const numbersRandom$ = new Subject();

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

numbersRandom$.subscribe(observer1);
numbersRandom$.subscribe(observer2);

numbersRandom$.next( Math.round(Math.random() * 100) );
