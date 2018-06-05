import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFactsComponent } from './product-facts.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductFactsComponent],
  exports: [ProductFactsComponent]
})
export class ProductFactsModule {}
