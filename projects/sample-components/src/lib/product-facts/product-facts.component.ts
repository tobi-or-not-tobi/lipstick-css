import { Component, OnInit, ViewEncapsulation, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'y-product-facts',
  templateUrl: './product-facts.component.html',
  styleUrls: ['./product-facts.component.scss']
})
export class ProductFactsComponent implements OnInit {
  css = `
  .custom.style {
    display: block;
    background: #eee;
    padding: 20px;
    margin: 10px 0;
  
    p {
      color: var(--primary-color);
    }
    pre {
      background: #fff;
    }
    button {
      border-top-right-radius: 100px;
    }
  }
  
  `;

  constructor() {}

  ngOnInit() {}
}
