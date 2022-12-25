import { fromEvent, interval, from  } from 'rxjs';
import { mergeWith, mergeAll, mergeMap, map } from 'rxjs';

/**
 * mergeWith
 */

// const onClick$ = fromEvent(document, 'click').pipe( map(event => event.type) );
// const onMouseMove$ = fromEvent(document, 'mousemove').pipe( map(event => event.type) );

// onClick$.subscribe(console.log);
// onMouseMove$.subscribe(console.log);

// const mergedWithObservable$ = onMouseMove$.pipe(
//     mergeWith(onClick$)
// ).subscribe( (value)=> {
//     console.log('obs: ', value) 
// });

/**
 * mergeAll
 * interval: operador que genera observables
 * Observable de orden superior: Observable que emite muchos observables
 * Observable de primer orden: Obsevable ocn un solo flujo de datos
 * 
 * ordenSuperior$   : Por cada 'click' se generara un Observable de tipo interval que emitira valores 0-n
 * primerOrden$     : creara un solo flujo de datos observable a partir de todos los observables que se generen en ordenSuperior$
 */

const onClick$ = fromEvent(document, 'click');
const ordenSuperior$ = onClick$.pipe( map(()=> interval(1000)) );
const primerOrden$ = ordenSuperior$.pipe( mergeAll() );

primerOrden$.subscribe( console.log );

/**
 * mergeMap
 * 
 */

const letters$ = from( ['A', 'B', 'C', 'D'] );
const result$ = letters$.pipe(
    mergeMap( letter => interval(1000).pipe(
        map( second => letter + second )
    ))
);

result$.subscribe( console.log );