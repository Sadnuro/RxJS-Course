import { from, of, asyncScheduler } from 'rxjs';

const fruitsFrom$ = from( ['apple', 'tangerine', 'lemon', 'pear'], asyncScheduler );
fruitsFrom$.subscribe( console.log );

const fruitsOf$ = of( 'apple', 'tangerine', 'lemon', 'pear' );
fruitsOf$.subscribe( console.log );

// apple 
// tangerine 
// lemon 
// pear