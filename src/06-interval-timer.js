import { interval, timer } from "rxjs";

const secuencenumbers$ = interval(200);
// secuencenumbers$.subscribe( console.log )

// Usado para retrazar ejecuciones
const delayedTimer$ = timer(5000);
// delayedTimer$.subscribe( console.log );