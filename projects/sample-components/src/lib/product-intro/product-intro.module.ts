import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIntroComponent } from './product-intro.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductIntroComponent],
  exports: [ProductIntroComponent]
})
export class ProductIntroModule {}
