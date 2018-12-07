import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector : 'star',
    templateUrl : './star.component.html'
})

export class StartComponent implements OnChanges{
    @Input() rating : number;
    starWidth : number;

    ngOnChanges() : void{
        this.starWidth = this.rating*75/5;
    }
}