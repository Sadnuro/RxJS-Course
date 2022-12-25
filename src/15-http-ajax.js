import { ajax } from 'rxjs/ajax';
import { of, map, catchError } from 'rxjs';

/**
 * Ajax implementation
 * GET Request
 */

const ditto$ = ajax('https://pokeapi.co/api/v2/pokemon/ditto').pipe(
    map( data => data),     // Retorna la data
    catchError( error => {
        console.log('Error: ', error.message);
        return of(error);
    })
);

ditto$.subscribe( result => console.log('Result:', result)); 


/**
 * POST Request
 */

const postRequest$ = ajax({
    url: 'https://httpbin.org/delay/2',
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: {
        message: 'Where are Ditto?'
    }
}).pipe(
    map( data => data),     // Retorna la data
    catchError( error => {
        console.log('Error: ', error.message);
        return of(error);
    })
);

postRequest$.subscribe( result => console.log('Result:', result) );