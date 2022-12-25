import { of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4).pipe(
    map( (number)=>{
        if(number === 3){
            x = 5;  // Injected error: x not defined
        }
        return number
    }),
    retry(3),
    catchError( (error)=> of('Observable de error - Ha ocurrido un error: ' + error.message) )
);

numbers$.subscribe(console.log);