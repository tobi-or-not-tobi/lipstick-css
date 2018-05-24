import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'y-product-rating',
    templateUrl: './product-rating.component.html',
    styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {
    currentRate = 8;
    constructor() {}

    ngOnInit() {}
}
