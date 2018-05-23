import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BannerComponent],
  exports:[BannerComponent]
})
export class BannerModule { }
