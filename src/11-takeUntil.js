import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


/**
 * Objetiovo: Cada vez que onMouseDown$ emita un evento, se dejara de emitir en onMouseMove$
 */

const onMouseMove$ = fromEvent(document, 'mousemove');
const onMouseDown$ = fromEvent(document, 'mouseup');

const sourceCompleted$ = onMouseMove$.pipe( takeUntil(onMouseDown$) );
sourceCompleted$.subscribe( console.log );
