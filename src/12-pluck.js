import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

fromEvent(document, 'mousemove').pipe(
    pluck('clientX')
).subscribe(console.log);
