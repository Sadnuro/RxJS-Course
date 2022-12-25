import { of, from } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

const letters$ = of('A', 'B', 'C').pipe(
    startWith('Z')
).subscribe(console.log);

// Z
// A
// B
// C

const numbers$ = of(1, 2, 3).pipe(
    endWith(0)
).subscribe(console.log);



// 1
// 2
// 3
// 0