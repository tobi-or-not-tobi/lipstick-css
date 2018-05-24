import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'y-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public images = [
    {
      url: 'https://picsum.photos/1800/500',
      caption: 'First',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      url: 'https://picsum.photos/1801/500',
      caption: 'Second',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
