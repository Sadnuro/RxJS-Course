import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

// const repeatedNumbers$ = of(1, 2, 3, 3, 4, 3, 4, 6, 7);

// repeatedNumbers$.subscribe( console.log );


const repeatedNumbers$ = of( 
    {k: 0},
    {k: 1},
    {k: 1},
    {k: 2},
    {k: 3},
    {k: 2},
    {k: 2},
    ).pipe(
    distinctUntilKeyChanged('k')
);

repeatedNumbers$.subscribe( console.log );