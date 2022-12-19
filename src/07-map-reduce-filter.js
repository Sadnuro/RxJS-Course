import { map, reduce, filter } from 'rxjs/operators';
import { from } from 'rxjs';

// const number$ = from( [1, 2, 3, 4, 5, 6] ).pipe(
//     map( number => number*2 ),
//     map( number => number/2 )
// );
// number$.subscribe( console.log );


// const number$ = from( [1, 2, 3, 4, 5, 6] ).pipe(
//     reduce( (acc, val) => acc+val, 10 ) // 10: valor de que empieza a acumular
// );
// number$.subscribe( console.log );

// const number$ = from( [1, 2, 3, 4, 5, 6] ).pipe(
//     filter( (number) => number > 4 ) 
// );
// number$.subscribe( console.log );   // 5, 6
