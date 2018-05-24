import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCardComponent } from './add-to-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AddToCardComponent],
  exports: [AddToCardComponent]
})
export class AddToCardModule {}
