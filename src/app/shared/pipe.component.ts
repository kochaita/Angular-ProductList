import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name : 'transform-pipe'
})

export class CustomPipe implements PipeTransform{

    replaceWith : string = '';

    transform(actual : string, replace : string) : string {
        return actual.replace(replace, this.replaceWith );
    }
}