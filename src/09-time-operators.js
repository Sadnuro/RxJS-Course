import { fromEvent } from "rxjs";
import { debounceTime, auditTime, throttleTime, sampleTime } from "rxjs/operators";

const onClick$ = fromEvent(document, 'click').pipe(
    // debounceTime(1000)
    // auditTime(1000)
    // throttleTime(1000)
    sampleTime(1000)
);

onClick$.subscribe( console.log );