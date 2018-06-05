import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'y-product-intro',
  templateUrl: './product-intro.component.html',
  styleUrls: ['./product-intro.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ProductIntroComponent implements OnInit {
  @Input() cssClass: string;

  constructor() { }

  ngOnInit() { }
}
